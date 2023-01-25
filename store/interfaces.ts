import { StaticImageData } from "next/image";

type FiveElemArr = [
  StaticImageData,
  StaticImageData,
  StaticImageData,
  StaticImageData,
  StaticImageData
];

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice: number;
  rating: number;
  images: FiveElemArr;
}
