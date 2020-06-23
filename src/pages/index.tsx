import Head from 'next/head';
import Layout from '../components/layout';
import B from '../../lib/basepath';

export default function Home() {
  return (
    <>
      <Head>
        <title>株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>
      <Layout>
        <img
          className="absolute top-0 left-0 opacity-100 transition duration-300 hover:opacity-0 ease-in-out"
          src={B('/img/20200611_00.jpg')}
          alt="top_before"
        />
        <img
          className="absolute top-0 left-0 opacity-0 transition duration-700 hover:opacity-100 ease-in-out"
          src={B('/img/20200611_01.jpg')}
          alt="top_after"
        />
      </Layout>
    </>
  );
}
