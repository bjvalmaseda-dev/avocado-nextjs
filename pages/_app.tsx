import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import "../global.css";
import { NextWebVitalsMetric } from "next/app";

import CartProvider from "@store/Cart";

export function reportWebVitals(metrics: NextWebVitalsMetric) {
  console.log(metrics);
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
