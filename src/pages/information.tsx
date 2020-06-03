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
          key: '社名',
          value: ['株式会社 プルリク', '（Pullreq limited）'],
        },
        {
          key: '所在地',
          value: [
            '〒４６５ー００３４',
            '愛知県名古屋市名東区高柳町２０２番地',
            ['TEL', '０５２ー２６５ー９８３１'],
            ['FAX', '０５２ー２６５ー９８３２'],
            ['mail', 'info@p-req.com'],
          ],
        },
      ],
      会社概要_02: [
        {
          key: '代表者',
          value: ['代表取締役', '牛嶋　一樹'],
        },
        {
          key: '役員',
          value: ['取締役', '坪井　健'],
        },
      ],
      会社概要_03: [
        {
          key: '資本金',
          value: '５００万円',
        },
        {
          key: '取引銀行',
          value: '○○銀行',
        },
        {
          key: '取引先企業名',
          value: 'メディアウェイブシステムズ株式会社',
        },
        {
          key: '設立年月',
          value: '２０２０年６月１日',
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
    var elm = [];

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

    return <>{elm}</>;
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
