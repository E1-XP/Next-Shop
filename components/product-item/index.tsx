import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./product-item.module.scss";

export interface Product {
  name: string;
  brand: string;
  price: number;
  oldPrice: number;
  rating: number;
  images: StaticImageData[];
}

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
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`icon icon-tabler icon-tabler-star ${
                styles.product__rating
              } ${i < product.rating ? styles["product__rating--active"] : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="grey"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
            </svg>
          ))}
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
