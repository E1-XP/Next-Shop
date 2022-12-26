import Head from "next/head";
import { Inter } from "@next/font/google";

import { Navigation } from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Next-shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>ok</main>
    </>
  );
}
