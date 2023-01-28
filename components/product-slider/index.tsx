import Image from "next/image";

import { Product } from "../../store/interfaces";
import styles from "./product-slider.module.scss";

interface Props {
  images: Product["images"];
}

export const ProductSlider = ({ images }: Props) => (
  <div
    id="carouselExampleControls"
    className={"carousel slide " + styles["product-slider"]}
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <div className="carousel-inner">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`carousel-item ${idx === 0 ? "active" : ""} h-100`}
        >
          <Image
            src={img}
            className={`d-block img-fluid`}
            alt="model presenting new fashion"
          />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
