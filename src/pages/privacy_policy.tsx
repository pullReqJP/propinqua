import Head from 'next/head';
import Layout from '../components/layout';

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>
      <Layout>
        <div className="container p-4 break-words">
          <h1>株式会社プルリク　プライバシーポリシー</h1>
          <h2>Google アナリティクス</h2>
          <p className="mt-6">
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="mt-6">
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
            <a
              className="pq-trend-color"
              target="_blank"
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            >
              Googleアナリティクスサービス利用規約
            </a>
            のページや
            <a
              className="pq-trend-color"
              target="_blank"
              href="https://policies.google.com/technologies/ads?hl=ja"
            >
              Googleポリシーと規約
            </a>
            ページをご覧ください。
          </p>
        </div>
      </Layout>
    </>
  );
}
