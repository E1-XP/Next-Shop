import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => (
  <nav className={`navbar navbar-expand-md ${styles.navigation}`}>
    <div className={`container ${styles.container}`}>
      <h1 className={`navbar-brand ${styles.navigation_logo}`}>
        <Link href="/">Next-shop</Link>
      </h1>
      <button
        className={`navbar-toggler ${styles.navigation__btn}`}
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
        className={`collapse navbar-collapse justify-content-between flex-grow-0 ${styles.navigation__listwrapper}`}
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
      </div>
      <ul className={`navbar-nav ${styles["navigation__list--absolute"]}`}>
        <li className={`nav-item ${styles.navigation__item}`}>
          <Link className="nav-link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
          </Link>
        </li>
        <li className={`nav-item ${styles.navigation__item}`}>
          <Link className="nav-link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
          </Link>
        </li>
        <li className={`nav-item ${styles.navigation__item}`}>
          <Link className="nav-link position-relative" href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-bag"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
              <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
            </svg>
            <span
              className={`position-absolute translate-middle badge rounded-pill bg-dark ${styles.badge}`}
            >
              2<span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
