import Layout from '../components/layout';
import Head from 'next/head';

export default function Home() {

  return (

    <Layout>

      <Head>
        <title>Next.js starter site</title>
      </Head>

      <h1>Next.js starter site</h1>
      <p>This is a demonstration website and blog using <a href="https://nextjs.org/">Next.js</a>.</p>

      <p>It illustrates features such as static generation, server-side rendering, dynamic routing, React components, hot reloading, and various styling options.</p>

      <p>Images from <a href="https://unsplash.com/">unsplash.com</a> courtesy of <a href="https://unsplash.com/@gabrielizalo">Gabriel Porras</a>, <a href="https://unsplash.com/@timaesthetic">Tim Rüßmann</a>, and <a href="https://unsplash.com/@lazycreekimages">Michael Dziedzic</a>.</p>

    </Layout>

  );

}
