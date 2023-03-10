import type { AppProps } from "next/app";
import { useEffect } from "react";

import "../styles/main.scss";

import { Store } from "../store/context";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}
