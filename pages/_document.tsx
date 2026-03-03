import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </Head>
      <body className="bg-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
