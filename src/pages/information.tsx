import React from 'react';
import Layout from '../components/layout';

type Props = {
  // plrqInfo: { [key: string]: string };
};

type State = {
  // plrqInfo: { [key: string]: string };
};

export default class Information extends React.Component<Props, State> {
  plrqInfo: any[] = [
    {
      pI01: [
        {
          order_num: 100,
          key: '会社名',
          value: '株式会社 プルリク（Pullreq limited）',
        },
        {
          order_num: 200,
          key: '所在地',
          value: '愛知県名古屋市名東区高柳町２０２番地',
        },
        {
          order_num: 300,
          key: '連絡先　TEL',
          value: '０５２ー２６５ー９８３１',
        },
        {
          order_num: 400,
          key: 'FAX',
          value: '０５２ー２６５ー９８３２',
        },
        {
          order_num: 500,
          key: 'mail',
          value: 'info@p-req.com',
        },
      ],
    },
    {
      pI02: [
        {
          order_num: 600,
          key: '代表者名',
          value: '牛嶋　一樹',
        },
        {
          order_num: 700,
          key: '役員　代表取締役',
          value: '牛嶋　一樹',
        },
        {
          order_num: 800,
          key: '取締役',
          value: '坪井　健',
        },
      ],
    },
    {
      pI03: [
        {
          order_num: 900,
          key: '資本金',
          value: '５００万円',
        },
        {
          order_num: 1000,
          key: '取引銀行',
          value: '○○銀行',
        },
        {
          order_num: 1100,
          key: '取引先企業名',
          value: 'メディアウェイブシステムズ株式会社',
        },
        {
          order_num: 1200,
          key: '設立年月',
          value: '２０２０年６月１日',
        },
      ],
    },
  ];

  constructor(props) {
    super(props);
    console.log('Information');
    this.state = {};
  }

  InfoLoop = () => {
    console.log('InfoLoop');
    var elm = [];

    for (var i in this.plrqInfo) {
      for (var pI in this.plrqInfo[i]) {
        elm.push(this.SubLoop(this.plrqInfo[i], pI));
      }
    }

    return <>{elm}</>;
  };

  SubLoop = (info, no) => {
    console.log('SubLoop');
    var elm = [];

    for (var j in info[no]) {
      console.log(info[no][j]);
      elm.push(
        <div key={no + j + '-left'} className="text-right col-span-1">
          {info[no][j].key}
        </div>
      );
      elm.push(
        <div key={no + j + '-right'} className="col-span-2">
          {info[no][j].value}
        </div>
      );
    }

    return (
      <div
        key={no}
        className="mt-6 grid grid-cols-3 row-gap-2 col-gap-6 leading-none"
      >
        {elm}
      </div>
    );
  };

  render() {
    return (
      <Layout>
        <h1>会社概要</h1>
        <this.InfoLoop />
      </Layout>
    );
  }
}
