import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ title, description, canonicalUrl }) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link rel="shortcut icon" type="image/png" href={"/favicon.png"}></link>
        <link
          rel="icon"
          sizes="any"
          type="image/png"
          href={"/favicon.png"}></link>
        <link
          rel="apple-touch-icon"
          type="image/png"
          href={"/favicon.png"}></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
