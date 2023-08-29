import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
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
        <title>elia orsini</title>
        <meta name="Description" content="elia orsini personal website 2023" />
      </Head>

      <main className={iAWriterQuattroS.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
