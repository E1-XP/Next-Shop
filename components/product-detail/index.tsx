import { Product } from "../../store/interfaces";

import styles from "./product-detail.module.scss";
import { spaceGrotesk } from "./../../styles/fonts";
import { ProductRating } from "../product-rating";

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
      $86.00 <span>$100.00</span>
    </p>
    <p>
      <ProductRating rating={product.rating} />
    </p>
  </div>
);
