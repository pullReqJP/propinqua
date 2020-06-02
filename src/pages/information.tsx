import React from 'react';
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

  InfoLoop = () => {
    console.log('InfoLoop');
    var h2: string[] = [];
    var h3: string[] = [];
    var h4: string[] = [];
    var elm = [];

    h2 = Object.keys(this.plrqInfo);
    // console.log(h2); //["会社概要"]
    h2.forEach((h2_value) => {
      // console.log(h2_value);
      h3 = Object.keys(this.plrqInfo[h2_value]);
      // console.log(h3); //(3) ["会社概要_01", "会社概要_02", "会社概要_03"]
      h3.forEach((h3_value) => {
        // console.log(h3_value);
        // console.log(this.plrqInfo[h2_value][h3_value]);
        h4 = Object.keys(this.plrqInfo[h2_value][h3_value]);
        // console.log(h4);
        // h4.forEach((h4_value) => {
        //   // console.log(this.plrqInfo[h2_value][h3_value][h4_value]);
        //   // console.log(this.plrqInfo[h2_value][h3_value][h4_value].key);
        //   // console.log(h4_value);
        //   return <div>{this.plrqInfo[h2_value][h3_value][h4_value].key}</div>;
        // });
        elm.push(
          this.plrqInfo[h2_value][h3_value].map(
            (data: { value: any; key: string }) => {
              var keyPrefix: any = h2_value + '-' + h3_value;
              // console.log(keyPrefix + '-' + data.key);
              // console.log(data);
              // console.log(data.key);
              console.log(data.value);
              // console.log(...data.value);
              return (
                <>
                  <div key={keyPrefix + '-' + data.key}>{data.key}</div>
                  <div key={keyPrefix + '-' + data.value}>{data.value}</div>
                  {/* <this.ValueLoop {data.value, keyPrefix} /> */}
                </>
              );
            }
          )
        );
      });
    });

    return <>{elm}</>;
  };

  // ValueLoop = (key, value) => {
  //   console.log('ValueLoop');
  //   // console.log(key);
  //   console.log(value);
  //   return <div key={key + '-' + value[0]}></div>;
  // };

  // for (var pI in this.plrqInfo[i]) {
  //   elm.push(this.SubLoop(this.plrqInfo[i], pI));
  // }

  // SubLoop = (info, no) => {
  //   console.log('SubLoop');
  //   var elm = [];

  //   for (var j in info[no]) {
  //     console.log(info[no][j]);
  //     elm.push(
  //       <div key={no + j + '-left'} className="text-right col-span-1">
  //         {info[no][j].key}
  //       </div>
  //     );
  //     elm.push(
  //       <div key={no + j + '-right'} className="col-span-2">
  //         {info[no][j].value}
  //       </div>
  //     );
  //   }

  //   return (
  //     <div
  //       key={no}
  //       className="mt-6 grid grid-cols-3 row-gap-2 col-gap-6 leading-none"
  //     >
  //       {elm}
  //     </div>
  //   );
  // };

  render() {
    return (
      <Layout>
        <h1>企業情報</h1>
        <this.InfoLoop />
      </Layout>
    );
  }
}
