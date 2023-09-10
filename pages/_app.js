import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import Header from "@components/Header";
import localFont from "next/font/local";

const iAWriterQuattroS = localFont({
  src: [
    {
      path: '../public/iAWriterQuattroS-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/iAWriterQuattroS-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})

function MyApp({ Component, pageProps }) {
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

      <main className={iAWriterQuattroS.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
