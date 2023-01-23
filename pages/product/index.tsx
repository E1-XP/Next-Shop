import Head from "next/head";

import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";

import { inter, spaceGrotesk } from "../../styles/fonts";
import styles from "./product.module.scss";

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Next-shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <header className={styles.header}>
          <Navigation />
        </header>
        <main className="container">
          <div className="row">
            <div className="col-md-6">photo</div>
            <div className="col-md-6">product detail</div>
          </div>
          <div className="row">details</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
