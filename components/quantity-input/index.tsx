import styles from "./quantity-input.module.scss";
import { spaceGrotesk } from "./../../styles/fonts";

interface Props {
  fullWidth?: boolean;
  className?: string;
}

export const QuantityInput = ({ fullWidth, className }: Props) => (
  <div
    className={
      spaceGrotesk.className +
      " " +
      styles["quantity-input"] +
      " " +
      (fullWidth ? styles["quantity-input--full-width"] : "") +
      " " +
      (className || "")
    }
  >
    <button className="btn">-</button>
    <span>1</span>
    <button className="btn">+</button>
  </div>
);
