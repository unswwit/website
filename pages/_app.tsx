import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Layout>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
