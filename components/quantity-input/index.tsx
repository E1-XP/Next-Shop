import styles from "./quantity-input.module.scss";
import { spaceGrotesk } from "./../../styles/fonts";

export const QuantityInput = () => (
  <div className={styles["quantity-input"] + " " + spaceGrotesk.className}>
    <button className="btn">-</button>
    <span>1</span>
    <button className="btn">+</button>
  </div>
);
