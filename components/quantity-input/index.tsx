import styles from "./quantity-input.module.scss";
import { spaceGrotesk } from "./../../styles/fonts";

interface Props {
  fullWidth?: boolean;
}

export const QuantityInput = ({ fullWidth }: Props) => (
  <div
    className={
      spaceGrotesk.className +
      " " +
      styles["quantity-input"] +
      " " +
      (fullWidth ? styles["quantity-input--full-width"] : "")
    }
  >
    <button className="btn">-</button>
    <span>1</span>
    <button className="btn">+</button>
  </div>
);
