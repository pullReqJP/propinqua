import Head from 'next/head';
import Layout from '../components/layout';
import Thx from '../../lib/thx';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Para = styled('p')`
  ${tw`my-6`};
  text-indent: 1em;
`;

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
          <Thx>
            <div className="flex flex-col md:flex-row mb-4 p-4 shadow-md">
              <div>
                <img src="/img/solution_20200723_02.png" alt="excel-image" />
              </div>
              <div className="p-4 font-pq">
                <Para>
                  顧客情報や管理台帳を複数のエクセルで管理してるんだけど、同じ内容を複数回入力するのは、ミスも増えるから何とかしたい。
                </Para>
                <p className="mt-4 mb-2 pq-trend-color text-2xl border-b-2 border-trend">
                  solution!
                </p>
                <Para>社内の情報をニーズに合わせてシステム化。</Para>
                <Para>
                  顧客管理システムや、受発注管理システムなど、今までExcelや伝票で管理されていた情報をシステム化して業務効率の向上とヒューマンエラーを改善します。{' '}
                </Para>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse mb-4 p-4 shadow-md">
              <div>
                <img src="/img/solution_20200723_03.png" alt="excel-image" />
              </div>
              <div className="p-4 font-pq">
                <Para>
                  Windows７のサポートが終了しちゃったけどそのまま使い続けて大丈夫かな？
                </Para>
                <Para>
                  今使っている社内システムが対応しなくなっちゃうけど、新しくシステムを組みなおすコストがかけられない・・・
                </Para>
                <p className="mt-4 mb-2 pq-trend-color text-2xl border-b-2 border-trend">
                  solution!
                </p>
                <Para>
                  Windows10へのアップデートや新しいパソコンへの移設をご提案。
                </Para>
                <Para>
                  現環境を変更できない場合は、そのまま仮想化して、今後も継続的に安全に利用できる状態を構築いたします。
                </Para>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4 p-4 shadow-md">
              <div>
                <img src="/img/solution_20200723_04.png" alt="excel-image" />
              </div>
              <div className="p-4 font-pq">
                <Para>
                  社内のシステムと連携した会社のホームページを作りたいなぁ・・・
                </Para>
                <p className="mt-4 mb-2 pq-trend-color text-2xl border-b-2 border-trend">
                  solution!
                </p>
                <Para>
                  すでに自社ホームページやマイページをお持ちのお客様にはそれらのサイト・データベースを連携させた、より使いやすくより情報整理が容易なシステムをご提案いたします。
                </Para>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse mb-4 p-4 shadow-md">
              <div>
                <img src="/img/solution_20200723_05.png" alt="excel-image" />
              </div>
              <div className="p-4 font-pq">
                <Para>メールが急に送れなくなった・・・</Para>
                <Para>受け取れなくなった・・・</Para>
                <p className="mt-4 mb-2 pq-trend-color text-2xl border-b-2 border-trend">
                  solution!
                </p>
                <Para>
                  当社で原因を調査し、メールサービスの復旧・再開を最優先で行います。
                </Para>
                <Para>
                  判明した原因はお客様に共有し、今後問題が再発しない運用方法やシステムの改善案について、ていねいにご案内いたします。{' '}
                </Para>
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
          </Thx>
        </div>
      </Layout>
    </>
  );
}
