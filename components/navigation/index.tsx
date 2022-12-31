import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => (
  <nav className={`navbar navbar-expand-lg ${styles.navigation}`}>
    <div className="container">
      <h1 className={`navbar-brand ${styles.navigation_logo}`}>
        <Link href="/">Next-shop</Link>
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-between ${styles.navigation__listwrapper}`}
        id="navbarSupportedContent"
      >
        <ul className={`navbar-nav my-2 ${styles.navigation__list}`}>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              New arrivals
            </Link>
          </li>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              Men
            </Link>
          </li>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              Women
            </Link>
          </li>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              Kids
            </Link>
          </li>
        </ul>
        <ul className={`navbar-nav ${styles.navigation__list}`}>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              x
            </Link>
          </li>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              x
            </Link>
          </li>
          <li className={`nav-item ${styles.navigation__item}`}>
            <Link className="nav-link" href="#">
              x
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
