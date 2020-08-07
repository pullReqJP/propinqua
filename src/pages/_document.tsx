import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type Props = {
  styleTags: any;
};

class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const url = this.props.__NEXT_DATA__.page;
    const pageName = url.replace(/(?<!^)\/.*/, '').replace('/', '');

    const query = this.props.__NEXT_DATA__.query;
    const pageID = query.id ? ' ' + query.id : '';

    const GA_TRACKING_ID = 'GTM-TGT2JV7';
    const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GA_TRACKING_ID}');`;
    const gtmFrame = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    return (
      <Html lang="ja">
        <Head>
          <link rel="canonical" href={'https://p-req.com/' + pageName} />
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
          {this.props.styleTags}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={pageName + pageID}>
          <noscript dangerouslySetInnerHTML={{ __html: gtmFrame }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
