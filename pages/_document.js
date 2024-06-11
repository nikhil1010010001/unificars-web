import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ title, description, canonicalUrl }) {
 

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://cdn.jsdelivr.net/npm/futura-font@1.0.0/styles.min.css" rel="stylesheet"/>
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
        {/* <link rel="preconnect" href="/futura/futura_n5.5632c6d8a6da9141ef40e51d14264a007bcae7e59303.woff2" type="font/woff2" crossorigin/>
        <link rel="preconnect" href="/futura/futura_n5.ea788239cf399e57dbdfe80e24bba751e5c2a36cad4d.woff" type="font/woff" crossorigin/>
        <link rel="preconnect" href="/futura/futura_n6.66fa8f5c3c4b2c7c04809ecefe751450fa59d9955a82.woff" type="font/woff" crossorigin/>
        <link rel="preconnect" href="/futura/futura_n6.bbe2e25d5b96d13ff36b242171a3d07cf5a601702718.woff2" type="font/woff2" crossorigin/>
        <link rel="preconnect" href="/futura/futura_o5.1bf4df2c089a877c3ba2d33a9d4c7908742bfc892072.woff" type="font/woff" crossorigin/>
        <link rel="preconnect" href="/futura/futura_o5.2374ce1c635b408a1f07994a3de4a936fc50f767d5e1.woff2" type="font/woff2" crossorigin/>
        <link rel="preconnect" href="/futura/futura_o6.2978dbd38bd9b3e8b72ee3299cd940da2900eb7293ad.woff2" type="font/woff2" crossorigin/>
        <link rel="preconnect" href="/futura/futura_o6.bbc5bc6e7a675b3182e4866da9f9643bb3821261ba2c.woff" type="font/woff" crossorigin/> */}
        {/* <link href="https://db.onlinewebfonts.com/c/02a0efa4275f78836dfc89db9e21feea?family=Futura-Book" rel="stylesheet"></link> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Roboto&display=swap" rel="stylesheet" /> */}
        <link rel="shortcut icon" type="image/png"  href={"/favicon.png"}></link>
        <link rel="icon" sizes='any' type="image/png"  href={"/favicon.png"}></link>
        <link rel="apple-touch-icon" type="image/png"  href={"/favicon.png"}></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
