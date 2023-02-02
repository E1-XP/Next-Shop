import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useCallback, useRef, useState } from "react";

import { Product } from "../../store/interfaces";

import styles from "./product-gallery.module.scss";

interface Props {
  product: Product;
}

export const ProductGallery = ({ product }: Props) => {
  const mainImgRef = useRef<HTMLImageElement>(null);

  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const zoomInOut = useCallback(
    (e: MouseEvent) => {
      const rect = mainImgRef.current?.getBoundingClientRect();
      if (!rect) return console.error("cannot get client rect");

      const x = e.pageX - rect?.left;
      const y = e.pageY - rect?.top;

      const imgWidth = rect?.width;
      const imgHeight = rect?.height;

      const xPercent = (x / imgWidth) * 100;
      const yPercent = (y / imgHeight) * 100;

      setMousePos({ x: xPercent, y: yPercent });
    },
    [mainImgRef]
  );

  const hoverImage = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return console.error("Current target not found.");

    if (!e.currentTarget.dataset) {
      return console.error("Dataset property is undefined.");
    }

    const idx = Number(e.currentTarget.dataset.idx);

    setCurrentImgIdx(idx);
  }, []);

  return (
    <div className={"row " + styles["product-gallery"]}>
      <div className="col-md-2">
        {product.images.map((src, idx) => (
          <Link
            href="#"
            key={idx}
            className={"d-block mb-3 " + styles["product-gallery__thumb-link"]}
          >
            <Image
              className={"img-fluid"}
              src={src}
              alt={`model presenting ${product.brand} ${product.name}`}
            />
            <div
              className={
                styles["product-gallery__thumb-cover"] +
                " " +
                (idx === currentImgIdx ? styles.active : "")
              }
              data-idx={idx}
              onMouseOver={hoverImage}
            ></div>
          </Link>
        ))}
      </div>
      <div className="col-md-10">
        <Link href="#" className="d-block position-relative">
          <Image
            className={"img-fluid " + styles["product-gallery__main-img"]}
            src={product.images[currentImgIdx]}
            alt={`model presenting ${product.brand} ${product.name}`}
            ref={mainImgRef}
          />
          <div
            className={styles["product-gallery__zoom"]}
            style={{
              background: `url(${product.images[0].src}) no-repeat`,
              backgroundPositionX: `${mousePos.x}%`,
              backgroundPositionY: `${mousePos.y}%`,
            }}
            onMouseMove={zoomInOut}
          ></div>
        </Link>
      </div>
    </div>
  );
};
