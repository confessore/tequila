import "../styles/globals.css";
import type { AppProps } from "next/app";
//import { PayPalScriptProvider } from "@paypal/react-paypal-js";
//import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import Layout from "../components/layout";
//import { GoogleAnalytics } from "nextjs-google-analytics";
//<GoogleAnalytics trackPageViews />
//import { Analytics } from '@vercel/analytics/react';
//import { GoogleAnalytics } from 'nextjs-google-analytics';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
