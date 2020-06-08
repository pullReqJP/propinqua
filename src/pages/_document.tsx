import Document, { Html, Head, Main, NextScript } from 'next/document';
import outputcss from '!raw-loader!../styles/output.css';

type Props = {};

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />);
    const initialProps: any = await Document.getInitialProps(ctx);
    return {
      ...page,
      styles: [
        ...initialProps.styles,
        <style
          key="custom"
          dangerouslySetInnerHTML={{
            __html: outputcss,
          }}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          /> */}
          <link
            rel="preload"
            as="font"
            href="/fonts/comfortaa-v28-latin-300.woff2"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/comfortaa-v28-latin-regular.woff2"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/comfortaa-v28-latin-700.woff2"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
