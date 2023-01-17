import Image from "next/image";

import { product, product2 } from "./../product-list/index";
import styles from "./product-table.module.scss";

import { formatPrice } from "../../helpers";
import { spaceGrotesk } from "./../../styles/fonts";

const data = [product, product2];

export const ProductTable = () => (
  <table className="table table-borderless">
    <thead className={spaceGrotesk.className}>
      <tr className={styles["product-table__row"]}>
        <th className="w-50" scope="col">
          Product
        </th>
        <th scope="col">Quantity</th>
        <th scope="col" className={styles["product-table__th--align"]}>
          Price
        </th>
        <th scope="col">Subtotal</th>
      </tr>
    </thead>
    <tbody className={styles["product-table__body"]}>
      {data.map((product) => (
        <tr className={styles["product-table__row"]} key={product.name}>
          <td className="w-50">
            <div className={`card border-0 flex-row ${styles.card}`}>
              <Image
                src={product.images[0]}
                className={`img-fluid rounded ${styles.card__img}`}
                width={150}
                alt="..."
              />
              <div className={"card-body " + styles.card__body}>
                <h5 className={"card-title " + styles.card__title}>
                  {product.brand} {product.name}
                </h5>
                <p className={"card-text " + styles.card__subtitle}>
                  size: M, color: Beige{" "}
                </p>
                <p className="card-text">
                  <button className={"btn " + styles.card__btn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash"
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
                      <line x1={4} y1={7} x2={20} y2={7}></line>
                      <line x1={10} y1={11} x2={10} y2={17}></line>
                      <line x1={14} y1={11} x2={14} y2={17}></line>
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    </svg>
                    Remove
                  </button>
                </p>
              </div>
            </div>
          </td>
          <td className="align-middle text-center">1</td>
          <td className="align-middle text-center">
            ${formatPrice(product.price)}
          </td>
          <td className="align-middle text-center">
            ${formatPrice(product.price)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
