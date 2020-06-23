import Head from 'next/head';
import Layout from '../components/layout';

export default function service() {
  return (
    <>
      <Head>
        <title>商品 | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>

      <Layout>
        <div className="container p-4 break-words">
          <h1>商品</h1>
          <p className="mt-6">
            ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
          </p>
          <h2 id="hp">HPの作成・リニューアル</h2>
          <p className="mt-6">
            企画開発、保守、ドメイン取得、SEO対策、サーバーなどWEBページを作成するのに必要なものはすべてワンストップ化
          </p>
          <p className="mt-6">
            また、EC販売やWEBページに連動した社内業務効率化を図るソフト開発などもお任せください。
          </p>
          <h2 id="system">システム受託開発</h2>
          <p className="mt-6">
            テレワークに必要な環境の構築から、受注管理システム、勤怠管理や、給与計算など、パッケージソフトでは叶わない、お客様の細かなニーズに合わせたソフトウェアの開発など、幅広く対応いたします。
          </p>
          <h2 id="hikari">「pqひかり」光サービス</h2>
          <p className="mt-6">
            1ギガ、10ギガタイプにそれぞれ、速度制限にかからない「no
            limit」プランをご用意し、お客様に合った形でハイクオリティな光回線を提供いたします。
          </p>
          <p className="mt-6">Coming soon...</p>
        </div>
      </Layout>
    </>
  );
}
