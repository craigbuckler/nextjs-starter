// date formatting functions
const toMonth = new Intl.DateTimeFormat('en', { month: 'long' });


// format a date to YYYY-MM-DD
export function ymd(date) {

  return date instanceof Date ?
    `${ date.getUTCFullYear() }-${ String(date.getUTCMonth() + 1).padStart(2, '0') }-${ String(date.getUTCDate()).padStart(2, '0') }` : '';

}


// format a date to DD MMMM, YYYY
export function friendly(date) {

  return date instanceof Date ?
    date.getUTCDate() + ' ' + toMonth.format(date) + ', ' + date.getUTCFullYear() : '';

}
