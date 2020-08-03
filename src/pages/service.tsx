import Head from 'next/head';
import Layout from '../components/layout';
import ServiceSymbol from 'react-svg-loader!../components/service.svg';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Para = styled('p')`
  ${tw`my-6`};
  text-indent: 1em;
`;

export default function service() {
  return (
    <>
      <Head>
        <title>service | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>

      <Layout>
        <div className="container mx-auto p-4 break-words">
          <h1>service</h1>
          <div className="grid md:grid-cols-2 col-gap-8">
            <ServiceSymbol
              className="
                w-full
                lg:h-full
                border-4
                rounded-4rem
                border-black
                border-opacity-60
                lg:row-span-3
              "
            />
            <div className="font-pq">
              <h2>法人向けサービス</h2>
              <h3>ソリューション案件（システム受託開発）</h3>
              <h3>p q ひかり</h3>
              <h3>p q ひかり電話　officeタイプ</h3>
              <h3>net value</h3>
              <h3>プロバイダサービス</h3>
              <h3>固定IPサービス</h3>
              <h3>HP作成・リニューアル</h3>
              <h3>LP作成</h3>
            </div>
            <div className="font-pq">
              <h2>個人向けサービス</h2>
              <h3>net value</h3>
              <h3>プロバイダサービス</h3>
              <h3>p q ひかり</h3>
              <h3>p q ひかり電話</h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
