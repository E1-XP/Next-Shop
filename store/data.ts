import { Product } from "./interfaces";

import image from "./../public/images/e0ee1f3f48114e4c9ddf10e2ef73e4ef.webp";
import image2 from "./../public/images/b10b0b7b1f23477f94903ff2c107976c.webp";

export const product: Product = {
  id: 0,
  name: "TEE SLIM - T-shirt basic",
  brand: "Nike",
  price: 22,
  oldPrice: 30,
  rating: 4,
  images: [image, image, image, image, image],
};

export const product2: Product = {
  id: 1,
  name: "PERFECT TEE - T-shirt basic",
  brand: "Levi's®",
  price: 23,
  oldPrice: 32,
  rating: 4,
  images: [image2, image2, image2, image2, image2],
};

export const getPreparedData = () => {
  const data = [] as Product[];

  while (data.length < 12) {
    const isEven = data.length % 2 === 0;
    data.push(isEven ? product : product2);
  }

  return data;
};
