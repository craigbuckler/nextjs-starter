import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, hero }) {

  return (
    <>

      <Head>
        <meta
          name="description"
          content="Next.js starter site"
        />
      </Head>

      <Header hero={ hero } />

      <main>{ children }</main>

      <Footer />

    </>
  )
}
