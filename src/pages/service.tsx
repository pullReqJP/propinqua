import Head from 'next/head';
import Layout from '../components/layout';
import Thx from '../../lib/thx';
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
        <title>サービス概要 | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>

      <Layout>
        <div className="container p-4 break-words">
          <h1>サービス概要</h1>
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
            <div>
              <h2 id="hp">HPの作成・リニューアル</h2>
              {/* <Thx>
                企画開発、保守、ドメイン取得、SEO対策、サーバーなどWEBページを作成するのに必要なものすべてをワンストップで提供。
              </Thx> */}
              <Para></Para>

              <Para>
                また、EC販売やWEBページに連動した社内業務効率化を図るソフト開発などもお任せください。
              </Para>
            </div>
            <div>
              <h2 id="system">システム受託開発</h2>
              <Para>
                テレワークに必要な環境の構築から、受注管理システム、勤怠管理や、給与計算など、パッケージソフトでは叶わない、お客様の細かなニーズに合わせたソフトウェアの開発など、幅広く対応いたします。
              </Para>
            </div>
            <div>
              <h2 id="hikari">光サービス「ｐｑひかり」</h2>
              <Para>
                1ギガタイプと10ギガタイプを提供。お客様に合った形でハイクオリティな光回線をご利用いただけます。
              </Para>
              <Thx tag="p">
                また、速度制限にかからない「no
                limit」プランを利用することで、通信にかかわるストレスを解消します。
              </Thx>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
