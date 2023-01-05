import Image from "next/image";

import image1 from "./../../public/images/pexels-nicolas-postiglioni-1080118.jpg";
import image2 from "./../../public/images/pexels-marcelo-chagas-2229490.jpg";
import image3 from "./../../public/images/pexels-ali-pazani-2829369.jpg";

export const Slider = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image
          src={image1}
          className="d-block img-fluid"
          alt="girl presenting new fashion"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          className="d-block img-fluid"
          alt="girl presenting new fashion"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image3}
          className="d-block img-fluid"
          alt="girl presenting new fashion"
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
