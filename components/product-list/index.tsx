import { useContext } from "react";

import { GlobalContext } from "../../store/context";
import { ProductCard } from "./../product-item";

import styles from "./product-list.module.scss";

export const ProductList = () => {
  const [data] = useContext(GlobalContext);

  return (
    <section className={`container ${styles.products}`}>
      <nav>
        <div
          className={`nav nav-tabs justify-content-center ${styles["nav-tabs"]}`}
          id="nav-tab"
          role="tablist"
        >
          <button
            className={"nav-link active " + styles["nav-link"]}
            id="nav-trending-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-trending"
            type="button"
            role="tab"
            aria-controls="nav-trending"
            aria-selected="true"
          >
            Trending products
          </button>
          <button
            className={"nav-link " + styles["nav-link"]}
            id="nav-new-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-new"
            type="button"
            role="tab"
            aria-controls="nav-new"
            aria-selected="false"
          >
            New arrivals
          </button>
          <button
            className={"nav-link " + styles["nav-link"]}
            id="nav-sale-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-sale"
            type="button"
            role="tab"
            aria-controls="nav-sale"
            aria-selected="false"
          >
            Sale
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane show active"
          id="nav-trending"
          role="tabpanel"
          aria-labelledby="nav-trending-tab"
        >
          <div className="row hidden-md-up gy-4 product__list">
            {data.map((product, idx) => (
              <div key={idx} className="col-md-3 col-sm-4 col-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="tab-pane"
          id="nav-new"
          role="tabpanel"
          aria-labelledby="nav-new-tab"
        >
          <div className="row hidden-md-up gy-4 product__list">
            {data.map((product, idx) => (
              <div key={idx} className="col-md-3 col-sm-4 col-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="tab-pane"
          id="nav-sale"
          role="tabpanel"
          aria-labelledby="nav-sale-tab"
        >
          <div className="row hidden-md-up gy-4 product__list">
            {data.map((product, idx) => (
              <div key={idx} className="col-md-3 col-sm-4 col-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
