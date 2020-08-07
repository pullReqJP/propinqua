import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>
      <Layout>
        <img
          className="absolute top-0 left-0 w-auto h-screen lg:h-auto object-cover opacity-100 transition duration-300 hover:opacity-0 ease-in-out"
          src="/img/20200611_00.jpg"
          alt="top_before"
        />
        <div className="absolute top-0 left-0 opacity-0 transition duration-700 hover:opacity-100 ease-in-out">
          <img
            className="w-auto h-screen lg:h-auto object-cover"
            src="/img/20200611_01.jpg"
            alt="top_after"
          />
          <p className="absolute inset-x-0 top-0 mt-20 font-pq text-center text-white text-xl md:text-5xl">
            shape your shapless idea.
          </p>
        </div>
      </Layout>
    </>
  );
}
