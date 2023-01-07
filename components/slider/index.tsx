import Image from "next/image";

import styles from "./slider.module.scss";
import { spaceGrotesk } from "../../styles/fonts";

import image1 from "./../../public/images/pexels-nicolas-postiglioni-1080118.jpg";
import image2 from "./../../public/images/pexels-marcelo-chagas-2229490.jpg";
import image3 from "./../../public/images/pexels-ali-pazani-2829369.jpg";

export const Slider = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    // data-bs-ride="carousel"
    // data-bs-interval="false"
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
        <div
          className={`carousel-caption d-md-block ${styles.carousel__caption}`}
        >
          <h5 className={spaceGrotesk.className}>
            Its time for a bold statement!
          </h5>
          <p className={styles.carousel__paragraph}>
            Make a statement this summer with our bold and vibrant new
            collection for women - perfect for turning heads and standing out in
            style.
          </p>
          <button type="button" className="btn btn-light">
            Shop now
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <line x1="15" y1="16" x2="19" y2="12"></line>
                <line x1="15" y1="8" x2="19" y2="12"></line>
              </svg>
            </span>
          </button>
        </div>
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
    ></button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    ></button>
  </div>
);
