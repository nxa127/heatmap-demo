import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

import ClientLayout from "@/layout/ClientLayout";

import "./globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClientLayout>
      <Head>
        <title>Heatmap demo</title>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NZRG83WX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Component {...pageProps} />
    </ClientLayout>
  );
};

export default MyApp;
