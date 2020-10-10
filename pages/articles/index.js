import { getAllFiles } from '../../lib/posts-md';
import Layout from '../../components/layout';
import Pagelink from '../../components/pagelink';
import Head from 'next/head';

const postsDir = 'articles';

export default function ArticleIndex({ postData }) {

  return (

    <Layout hero="phone.jpg">

      <Head>
        <title>Article index</title>
        <meta name="description" content="A list of articles published on this site." />
      </Head>

      <h1>Article index</h1>

      <aside className="pagelist">

        { postData.map(post => (
          <Pagelink
            key={ post.id }
            postsdir={ postsDir }
            id={ post.id }
            title={ post.title }
            description={ post.description }
            dateymd={ post.dateYMD }
            datefriendly={ post.dateFriendly }
          />
        ))}

      </aside>

    </Layout>

  );

}


// fetch array of all article posts
export async function getStaticProps() {

  return {
    props: {
      postData: await getAllFiles(postsDir)
    }
  }

}
