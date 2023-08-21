import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>next-tailwind-starter</title>
        <meta name="Description" content="next-tailwind-starter" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
