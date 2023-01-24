import { Product, ProductCard } from "./../product-item";
import styles from "./product-list.module.scss";

import image from "./../../public/images/e0ee1f3f48114e4c9ddf10e2ef73e4ef.webp";
import image2 from "./../../public/images/b10b0b7b1f23477f94903ff2c107976c.webp";

export const product = {
  name: "TEE SLIM - T-shirt basic",
  brand: "Nike",
  sizes: [],
  price: 22,
  oldPrice: 30,
  rating: 4,
  images: [image, image, image, image, image],
};

export const product2 = {
  name: "PERFECT TEE - T-shirt basic",
  brand: "Levi's®",
  price: 23,
  oldPrice: 32,
  rating: 4,
  images: [image2, image2, image2, image2, image2],
};

const data = [] as Product[];

while (data.length < 12) {
  const isEven = data.length % 2 === 0;
  data.push(isEven ? product : product2);
}

export const ProductList = () => (
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
