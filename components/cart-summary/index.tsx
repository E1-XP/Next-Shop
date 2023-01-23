import { spaceGrotesk } from "./../../styles/fonts";

import styles from "./cart-summary.module.scss";

export const CartSummary = () => (
  <div className={"card " + styles["cart-summary"]}>
    <div className="card-body">
      <h5 className={"card-title " + spaceGrotesk.className}>Cart summary</h5>
      <form>
        <div
          className={
            "form-check " +
            styles["cart-summary__checkbox"] +
            " " +
            styles["active"]
          }
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
            onChange={() => null}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Free shipping
          </label>
          <span className="ms-auto checkbox__value">$0.00</span>
        </div>
        <div className={"form-check " + styles["cart-summary__checkbox"]}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Express shipping
          </label>
          <span className="ms-auto checkbox__value">+$15.00</span>
        </div>
        <p
          className={
            "card-text d-flex justify-content-between " +
            styles["cart-summary__amount"]
          }
        >
          Subtotal: <span className="fw-bold">$160.00</span>
        </p>
        <p
          className={
            "card-text d-flex justify-content-between fw-bold fs-18 " +
            styles["cart-summary__total-amount"]
          }
        >
          Total: <span>$160.00</span>
        </p>
        <button
          type="submit"
          className={
            spaceGrotesk.className +
            " btn btn-primary w-100 " +
            styles["cart-summary__btn"]
          }
        >
          Checkout
        </button>
      </form>
    </div>
  </div>
);
