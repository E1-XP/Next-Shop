import { Product, ProductCard } from "./../product-item";
import image from "./../../public/images/e0ee1f3f48114e4c9ddf10e2ef73e4ef.webp";
import image2 from "./../../public/images/b10b0b7b1f23477f94903ff2c107976c.webp";

const product = {
  name: "TEE SLIM - T-shirt basic",
  brand: "Nike",
  price: 22,
  oldPrice: 30,
  rating: 4,
  images: [image],
};

const product2 = {
  name: "PERFECT TEE - T-shirt basic",
  brand: "Levi's®",
  price: 23,
  oldPrice: 32,
  rating: 4,
  images: [image2],
};

const data = [] as Product[];

while (data.length < 12) {
  const isEven = data.length % 2 === 0;
  data.push(isEven ? product : product2);
}

export const ProductList = () => (
  <section className="container products">
    <h2>Trending products</h2>
    <div className="row hidden-md-up gy-4 product__list">
      {data.map((product, idx) => (
        <div key={idx} className="col-md-3">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </section>
);
