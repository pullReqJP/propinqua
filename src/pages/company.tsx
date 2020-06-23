import React from 'react';
import Layout from '../components/layout';
import PlrqInfo from '../components/plrqInfo';
// export const config = { amp: true };

type Props = {};
type State = {};

export default class Company extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    console.log('Company');
    this.state = {};
  }

  Section = (props: { name: string }) => {
    let data = PlrqInfo[props.name];
    console.log(data);
    return (
      <>
        <h2 id={props.name}>{props.name}</h2>
        <div className="grid grid-cols-4 col-gap-4 row-gap-2 leading-tight">
          {Object.keys(data).map((value) => (
            <>
              <div className="col-span-1 text-right">{value}</div>
              <div className="col-span-3">
                {PlrqInfo[props.name][value].map((array: React.ReactNode) => (
                  <div key={value}>{array}</div>
                ))}
              </div>
            </>
          ))}
        </div>
      </>
    );
  };

  render() {
    return (
      <Layout>
        <div className="container p-4">
          <h1>企業情報</h1>
          <this.Section name="会社概要" />
          <this.Section name="事業内容" />
        </div>
      </Layout>
    );
  }
}
