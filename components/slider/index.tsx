import Image from "next/image";

import styles from "./slider.module.scss";
import { spaceGrotesk } from "../../styles/fonts";

import image1 from "./../../public/images/pexels-nicolas-postiglioni-1080118.jpg";
import image2 from "./../../public/images/pexels-david-fagundes-1894263.jpg";
import image3 from "./../../public/images/pexels-ali-pazani-2829369.jpg";

const heading = " It's time for a bold statement!";
const paragraph =
  "Make a statement this summer with our bold and vibrant new  collection for women - perfect for turning heads and standing out in style.";

const data = [
  { img: image1, heading, paragraph },
  { img: image2, heading, paragraph },
  { img: image3, heading, paragraph },
];

export const Slider = () => (
  <div
    id="carouselExampleIndicators"
    className={`carousel slide h-100 ${styles.carousel}`}
    data-bs-ride="carousel"
    data-bs-interval="5000"
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
    <div className="carousel-inner h-100">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`carousel-item ${idx === 0 ? "active" : ""} h-100`}
        >
          <div className={styles.carousel__backimg}></div>
          <Image
            src={item.img}
            className={`d-block img-fluid ${styles.carousel__img}`}
            alt="girl presenting new fashion"
          />
          <div className={`container ${styles.container}`}>
            <div
              className={`carousel-caption container ${styles.carousel__caption}`}
            >
              <h5
                className={`${spaceGrotesk.className} ${styles.carousel__heading}`}
              >
                {item.heading}
              </h5>
              <p className={styles.carousel__paragraph}>{item.paragraph}</p>
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
        </div>
      ))}
    </div>
  </div>
);
