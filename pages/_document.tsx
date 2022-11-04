import { Html, Head, Main, NextScript } from 'next/document';


const MyDocument = (): JSX.Element => (
  <Html lang="ja">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
