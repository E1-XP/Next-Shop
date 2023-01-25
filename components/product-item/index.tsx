import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Product } from "../../store/interfaces";
import { ProductRating } from "../product-rating";

import styles from "./product-item.module.scss";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => (
  <div className={`card ${styles.product}`}>
    <Image
      src={product.images[0]}
      className={`card-img-top d-block img-fluid ${styles.product__img}`}
      alt={`model presenting ${product.brand} ${product.name}`}
    />
    <div className={`card-body ${styles.card__body}`}>
      <p className="card-text">
        <ProductRating rating={product.rating} />
      </p>
      <p className="card-text">{product.brand}</p>
      <Link href="#" className="card-text stretched-link">
        {product.name}
      </Link>
      <p className="card-text">
        ${product.price}{" "}
        <span className={styles.product__oldprice}>${product.oldPrice}</span>
      </p>
    </div>
  </div>
);
