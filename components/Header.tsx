import Head from "next/head";
import React from "react";

function Header({
  title = "elia orsini",
  description = "personal website of elia orsini",
  img = "/favicon.ico",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={img} />

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
  );
}

export default Header;
