import Image from "next/image";
import Link from "next/link";

import { Product } from "../../store/interfaces";

import styles from "./product-gallery.module.scss";

interface Props {
  product: Product;
}

export const ProductGallery = ({ product }: Props) => (
  <div className={"row " + styles["product-gallery"]}>
    <div className="col-md-2">
      {product.images.map((src, idx) => (
        <Link
          href="#"
          key={idx}
          className={"d-block mb-3 " + styles["product-gallery__thumb-link"]}
        >
          <Image
            className={"img-fluid"}
            src={src}
            alt={`model presenting ${product.brand} ${product.name}`}
          />
          <div
            className={
              styles["product-gallery__thumb-cover"] +
              " " +
              (!idx ? styles.active : "")
            }
          ></div>
        </Link>
      ))}
    </div>
    <div className="col-md-10">
      <Link href="#" className="d-block">
        <Image
          className="img-fluid"
          src={product.images[0]}
          alt={`model presenting ${product.brand} ${product.name}`}
        />
      </Link>
    </div>
  </div>
);
