import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

class Document extends NextDocument<Props> {
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

export default Document;
