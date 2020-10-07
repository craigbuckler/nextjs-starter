import { getAllPosts } from '../../lib/posts'
import Layout from '../../components/layout';
import Pagelink from '../../components/pagelink';
import Head from 'next/head'

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
            type="articles"
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


export async function getStaticProps() {

  return {
    props: {
      postData: await getAllPosts('articles')
    }
  }

}
