import "../css/index.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "@components/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as gtag from "../lib/gtag";

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
        <title>elia orsini</title>
        <meta property="og:title" content="elia orsini" />

        <meta name="description" content="personal website of elia orsini." />
        <meta
          property="og:description"
          content="personal website of elia orsini."
        />

        <meta property="og:image" content="/favicon.ico" />

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
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
