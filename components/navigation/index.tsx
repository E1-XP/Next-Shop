import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => (
  <nav className={styles.navigation}>
    <h1 className={styles.navigation__logo}>
      <Link href="/">Next-shop</Link>
    </h1>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <Link href="#">New arrivals</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link href="#">Men</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link href="#">Women</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link href="#">Kids</Link>
      </li>
    </ul>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__item}>
        <Link href="#">x</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link href="#">x</Link>
      </li>
      <li className={styles.navigation__item}>
        <Link href="#">x</Link>
      </li>
    </ul>
  </nav>
);
