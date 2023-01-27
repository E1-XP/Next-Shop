import Link from "next/link";
import { Fragment } from "react";

import { Product } from "../../store/interfaces";
import { ProductRating } from "../product-rating";

import styles from "./product-detail.module.scss";
import { spaceGrotesk } from "./../../styles/fonts";
import { QuantityInput } from "../quantity-input";
import { formatPrice } from "../../helpers";

interface Props {
  product: Product;
}

export const ProductDetail = ({ product }: Props) => (
  <div className={"d-flex flex-column h-100 " + styles["product-detail"]}>
    <nav
      className={styles["product-detail__breadcrumb"]}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Women</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">T-shirts</a>
        </li>
      </ol>
    </nav>
    <h2
      className={spaceGrotesk.className + " " + styles["product-detail__title"]}
    >
      {product.brand}
    </h2>
    <h3
      className={
        spaceGrotesk.className + " " + styles["product-detail__subtitle"]
      }
    >
      {product.name}
    </h3>

    <p className={styles["product-detail__price"] + " " + styles.price}>
      ${formatPrice(product.price)}
      <span className={styles["price__old"]}>
        ${formatPrice(product.oldPrice)}
      </span>
    </p>
    <p className="mt-4">
      <ProductRating big rating={product.rating} />
    </p>

    <div className={"form-check ps-0 " + styles["color-selector"]}>
      {["beige", "olive", "orangered"].map((color, idx) => (
        <Fragment key={color}>
          <input
            type="radio"
            className="btn-check"
            name="color-options"
            id={"color-option" + idx}
            autoComplete="off"
            checked={idx === 0}
          />
          <label
            className={"btn " + styles["color-selector__option"]}
            htmlFor={"color-option" + idx}
            style={{ backgroundColor: color }}
          >
            <span className="visually-hidden">{color}</span>
          </label>
        </Fragment>
      ))}
    </div>
    <div className="form-check ps-0 mt-3 mb-4">
      {["XS", "S", "M", "L", "XL", "XXL"].map((size, idx) => (
        <Fragment key={size}>
          <input
            type="radio"
            className="btn-check"
            name="options"
            id={"option" + idx}
            autoComplete="off"
            checked={idx === 0}
          />
          <label className="btn" htmlFor={"option" + idx}>
            {size}
          </label>
        </Fragment>
      ))}
    </div>
    <QuantityInput fullWidth className={styles["product-detail__quantity"]} />
    <button
      className={"btn btn-primary w-100 " + styles["product-detail__btn"]}
    >
      Add to Cart
    </button>
    <div className={styles["product-detail__links"]}>
      <Link href="#" className="btn">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        </span>
        Wishlist
      </Link>
      <Link href="#" className="btn">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-question-circle"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 16v.01"></path>
            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          </svg>
        </span>
        Ask question
      </Link>
      <Link href="#" className="btn">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-share"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M8.7 10.7l6.6 -3.4"></path>
            <path d="M8.7 13.3l6.6 3.4"></path>
          </svg>
        </span>
        Share
      </Link>
    </div>
  </div>
);
