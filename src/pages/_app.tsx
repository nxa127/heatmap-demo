import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Script from "next/script";

import ClientLayout from "@/layout/ClientLayout";

import "./globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClientLayout>
      <Head>
        <title>Heatmap demo</title>
      </Head>
      <Script
        id="uhmBUOhjWP"
        dangerouslySetInnerHTML={{
          __html: `
          (function(add, cla){window['UserHeatTag']=cla;window[cla]=window[cla]||function(){(window[cla].q=window[cla].q||[]).push(arguments)},window[cla].l=1*new Date();var ul=document.createElement('script');var tag = document.getElementsByTagName('script')[0];ul.async=1;ul.src=add;tag.parentNode.insertBefore(ul,tag);})('//uh.nakanohito.jp/uhj2/uh.js', '_uhtracker');_uhtracker({id:'uhmBUOhjWP'});
            `,
        }}
      />
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
