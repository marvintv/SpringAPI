import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
// import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fan Fusion: Your Top OnlyFans Agency for Smart Content Management</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      {/* <LoadingScreen /> */}
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
      <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11315313664" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-11315313664');
        `}
      </Script>
    </div>
    </>
  );
}

export default MyApp;
