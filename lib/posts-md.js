import { promises as fsp } from 'fs';
import path from 'path';
import fm from 'front-matter';
import remark from 'remark';
import remarkhtml from 'remark-html';
import * as dateformat from './dateformat';

const fileExt = 'md';


// return absolute path to folder
function absPath(dir) {
  return (
    path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir)
  )
}


// return array of files by type in a directory and remove extensions
export async function getFileIds(dir = './') {

  const
    loc = absPath(dir),
    files = await fsp.readdir(loc);

  return files
    .filter(fn => path.extname(fn) === `.${ fileExt }`)
    .map(fn => path.basename(fn, path.extname(fn)) );

}


// return data for a single markdown file
export async function getFileData(dir = './', id) {

  const
    file = path.join(absPath(dir), `${id}.${fileExt}`),
    stat = await fsp.stat(file),
    data = await fsp.readFile(file, 'utf8'),
    matter = fm(data),
    html = (await remark().use(remarkhtml).process(matter.body)).toString();

  // date formatting
  const date = matter.attributes.date || stat.ctime;
  matter.attributes.date = date.toUTCString();
  matter.attributes.dateYMD = dateformat.ymd(date);
  matter.attributes.dateFriendly = dateformat.friendly(date);

  // word count
  const
    roundTo     = 10,
    readPerMin  = 200,
    numFormat   = new Intl.NumberFormat('en'),
    count       = matter.body.replace(/\W/g, ' ').replace(/\s+/g, ' ').split(' ').length,
    words       = Math.ceil(count / roundTo) * roundTo,
    mins        = Math.ceil(count / readPerMin);

  matter.attributes.wordcount = `${ numFormat.format(words) } words, ${ numFormat.format(mins) }-minute read`;

  return {
    id,
    html,
    ...matter.attributes
  };

}


// return sorted array of all posts for indexes
export async function getAllFiles(dir) {

  const
    now = dateformat.ymd(new Date()),
    files = await getFileIds(dir),
    data = await Promise.allSettled( files.map(id => getFileData(dir, id)) )

  return data
    .filter(md => md.value && md.value.dateYMD <= now)
    .map(md => md.value)
    .sort((a, b) => (a.dateYMD < b.dateYMD ? 1 : -1));

}
