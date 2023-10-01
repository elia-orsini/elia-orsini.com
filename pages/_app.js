import "../css/index.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "@components/layout";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const iAWriterQuattroS = localFont({
  src: [
    {
      path: "../public/iAWriterQuattroS-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/iAWriterQuattroS-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="og:site_name" content="elia orsini" />
        <meta property="twitter:title" content="elia orsini" />
        <meta property="twitter:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="keywords"
          content="elia, orsini, eliaorsini, 2023, 3D, designer, software developer, three.js, photographer, scotland, edinburgh, 3D graphic design, developer"
        />
        <meta name="author" content="elia orsini" />

        <link rel="apple-touch-icon" href="/favicon.ico" />

        <link rel="manifest" href="/favicon.ico" />
      </Head>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <main className={iAWriterQuattroS.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
