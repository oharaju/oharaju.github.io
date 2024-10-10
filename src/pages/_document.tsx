import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&amp;family=Ubuntu:wght@700&amp;display=swap" rel="stylesheet" />
        <link rel="shortcut icon" sizes="32x32" href="./images/favicon.ico"/>
        <title>Portfólio - Júlia Ohara</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
