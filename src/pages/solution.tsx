import Head from 'next/head';
import Layout from '../components/layout';

export default function solution() {
  return (
    <>
      <Head>
        <title>solution | 株式会社プルリク</title>
        <meta name="description" content="Pullreq Limited" />
      </Head>

      <Layout>
        <div className="relative">
          <img
            className="-z-10"
            src="/img/solution_20200723_01.jpg"
            alt="solution-image"
          />
          <h1 className="absolute top-0 left-0 mt-0 pt-0 sm:pt-4 pl-4 sm:pl-10 text-white">
            solution
          </h1>
        </div>
        <div className="container mx-auto p-4 break-words">
          <div className="flex mb-4 p-4 shadow-md">
            <div>
              <img src="/img/solution_20200723_02.png" alt="excel-image" />
            </div>
            <div className="p-4 font-pq">
              <p>顧客情報をExcelで管理してるんだけどシステム化したいなぁ。</p>
            </div>
          </div>
          <div className="flex flex-row-reverse mb-4 p-4 shadow-md">
            <div>
              <img src="/img/solution_20200723_03.png" alt="excel-image" />
            </div>
            <div className="p-4 font-pq">
              <p>
                以前システム化したものが、Windowsのサポート終了で動かなくなっちゃう・・・
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-4 shadow-md">
            <div>
              <img src="/img/solution_20200723_04.png" alt="excel-image" />
            </div>
            <div className="p-4 font-pq">
              <p>
                社内のシステムと連携した会社のホームページを作りたいなぁ・・・
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse mb-4 p-4 shadow-md">
            <div>
              <img src="/img/solution_20200723_05.png" alt="excel-image" />
            </div>
            <div className="p-4 font-pq">
              <p>メールが急に送れなくなった・・・</p>
              <p>受け取れなくなった・・・</p>
            </div>
          </div>
          <h2>対応実績</h2>
          <ul>
            <li>社内管理システムの改修</li>
            <li>社内ネットワーク環境設定</li>
            <li>メール機能不全調査・改修</li>
            <li>顧客管理システム改修</li>
            <li>HDD交換作業</li>
            <li>VPN接続設定</li>
            <li>DNSサーバ移転</li>
            <li>IP電話（ビジネスフォン）の設定</li>
            <li>プリンター設定</li>
            <li>各種デバイス設定</li>
            <li>IPアドレスの設定、管理</li>
            <li>社内システムデータベース連携</li>
            <li>メールサーバ構築</li>
            <li>メールアカウントの追加</li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
