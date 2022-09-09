import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import "../global.css";
import { NextWebVitalsMetric } from "next/app";
import Head from "next/head";

import CartProvider from "@store/Cart";

export function reportWebVitals(metrics: NextWebVitalsMetric) {
  console.log(metrics);
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>Avocados Store</title>
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
};

export default MyApp;
