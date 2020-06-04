import React, { Fragment } from 'react';
import Layout from '../components/layout';

type Props = {
  // plrqInfo: {
  //   [会社概要: string]: {
  //     [会社概要_01:string[]]:{
  //       key:string;
  //       value:(string | string[])[];
  //     }
  //   }
  // };
};

type State = {
  // plrqInfo: { [key: string]: string };
};

export default class Information extends React.Component<Props, State> {
  plrqInfo = {
    会社概要: {
      会社概要_01: [
        {
          key: '会社名',
          value: ['株式会社 プルリク', '（Pullreq limited）'],
        },
        {
          key: '設立年月',
          value: ['２０２０年６月１日'],
        },
        {
          key: '所在地',
          value: [
            '〒４６５ー００３４',
            '愛知県名古屋市名東区高柳町２０２番地',
            // ['TEL', '０５２ー２６５ー９８３１'],
            // ['FAX', '０５２ー２６５ー９８３２'],
            // ['mail', 'info@p-req.com'],
          ],
        },
        {
          key: '資本金',
          value: ['５００万円'],
        },
        // {
        //   key: '取引銀行',
        //   value: '○○銀行',
        // },
        // {
        //   key: '取引先企業名',
        //   value: 'メディアウェイブシステムズ株式会社',
        // },
      ],
      会社概要_02: [
        {
          key: '役員紹介',
          value: [
            ['代表取締役', '牛嶋　一樹'],
            ['取締役', '坪井　健'],
          ],
        },
        {
          key: '従業員数',
          value: '５名',
        },
      ],
      会社概要_03: [
        {
          key: '事業内容',
          value: [
            '①ITシステム及びソフトウェアの企画、開発、販売 ',
            '②情報通信機器及び情報通信役務の企画、開発、販売',
            '③ITを利用したイベント及びセールスプロモーションの企画、実施',
            '④電気通信事業法に基づく電気通信事業',
          ],
        },
      ],
    },
  };

  constructor(props) {
    super(props);
    console.log('Information');
    this.state = {};
  }

  // this.plrqInfo → 配列 → JSX.Element
  InfoLoop = () => {
    console.log('InfoLoop');
    var h2: string[] = [];
    var h3: string[] = [];
    var elm: JSX.Element[] = [];

    h2 = Object.keys(this.plrqInfo);
    h2.forEach((h2_value) => {
      h3 = Object.keys(this.plrqInfo[h2_value]);
      h3.forEach((h3_value) => {
        elm.push(
          this.plrqInfo[h2_value][h3_value].map(
            (data: { value: any; key: string }) => {
              var keyPrefix: any = h2_value + '-' + h3_value;
              console.log('valueLoop');
              console.log(data.value);
              let valueLoop = this.ValueLoop(data.value);
              return (
                <Fragment key={keyPrefix + '+' + data.key}>
                  <div key={keyPrefix + '-' + data.key}>{data.key}</div>
                  {valueLoop}
                </Fragment>
              );
            }
          )
        );
      }); //h3.forEach
    }); //h2.forEach

    return (
      <div key={'InfoLoop'} className="pq-grid-1-3">
        {elm}
      </div>
    );
  }; //InfoLoop()

  // 配列 → JSX.Element
  ValueLoop = (value) => {
    var elm = [];
    var key: string = '';
    if (Array.isArray(value)) {
      // 配列の場合は再帰呼び出し
      value.map((subValue) => {
        key += subValue;
        elm.push(this.ValueLoop(subValue));
      });
      return <div key={key}>{elm}</div>;
    } else {
      return <div key={value}>{value}</div>;
    }
  }; //ValueLoop()

  render() {
    return (
      <Layout>
        <h1>企業情報</h1>
        <this.InfoLoop />
      </Layout>
    );
  }
}
