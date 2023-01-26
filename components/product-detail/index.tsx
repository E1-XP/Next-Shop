import { Product } from "../../store/interfaces";
import { ProductRating } from "../product-rating";

import styles from "./product-detail.module.scss";
import { spaceGrotesk } from "./../../styles/fonts";
import { QuantityInput } from "../quantity-input";

interface Props {
  product: Product;
}

export const ProductDetail = ({ product }: Props) => (
  <div className={styles["product-detail"]}>
    <nav
      className={styles["product-detail__breadcrumb"]}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">Women</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">T-shirts</a>
        </li>
      </ol>
    </nav>
    <h2 className={spaceGrotesk.className}>{product.brand}</h2>
    <h3 className={spaceGrotesk.className}>{product.name}</h3>
    <p>
      ${product.price} <span>${product.oldPrice}</span>
    </p>
    <p>
      <ProductRating rating={product.rating} />
    </p>
    <QuantityInput fullWidth />
    <button className="btn btn-primary w-100">Add to Cart</button>
  </div>
);
