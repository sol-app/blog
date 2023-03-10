import Layout from '../components/layout';
import '../styles/globals.css';
import NextScript from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <NextScript strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-3HXER7XDKH"></NextScript>
      <NextScript id='google-analytics' strategy='afterInteractive'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3HXER7XDKH');
        `}
      </NextScript>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
