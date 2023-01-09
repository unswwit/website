import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script
        strategy="lazyOnload"
        src={'https://www.googletagmanager.com/gtag/js?id=G-6QEYGEF8Q5'}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6QEYGEF8Q5', {
                page_path: window.location.pathname,
              });
                  `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
