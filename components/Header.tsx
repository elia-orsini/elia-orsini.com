import Head from "next/head";
import React from "react";

function Header({
  title = "elia orsini",
  description = "personal website of elia orsini.",
  img = "/favicon.ico",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={img} />
    </Head>
  );
}

export default Header;
