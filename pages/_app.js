import '@/styles/globals.css';

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(()=> import("@/components/Footer"),{ssr: true})
import Head from 'next/head';
import Script from 'next/script';

import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../ReduxStore/Store';



export default function App({ Component, pageProps }) {
    const router = useRouter();

  return (
    <>
    <Provider store={store}>
      <Head>
        <meta name="google-site-verification" content="B_rDvi4eBjWtzt-OgbGPtsw81mBO65QXvvTDuNIn7-o" />
       
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1VXLGSLZE" strategy="afterInteractive" />

        {/* Google Analytics script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D9PMBN6V80" strategy="afterInteractive" />
        <Script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D9PMBN6V80');
        `}} />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16482210051" strategy="afterInteractive" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16482210051');
            `,
          }}
        />
      </Head>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>

      <Footer />
      {/* <AllCarParts /> */}
      </Provider>
    </>
  );
}
