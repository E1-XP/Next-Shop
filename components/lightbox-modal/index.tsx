import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { Product } from "../../store/interfaces";
import { ClientSidePortal } from "./../client-side-portal";

import styles from "./lightbox-modal.module.scss";

interface Props {
  product: Product;
  currentImgIdx: number;
  setCurrentImgIdx: (val: number) => void;
}

export const LightboxModal = ({
  product,
  currentImgIdx,
  setCurrentImgIdx,
}: Props) => {
  const mainImgRef = useRef<HTMLImageElement>(null);

  const [isImgZoomed, setIsZoomed] = useState(false);
  const [mouseYPos, setMouseYPos] = useState(0);
  const [computedYPos, setComputedYPos] = useState(0);

  const toggleZoomed = useCallback(
    () => setIsZoomed(!isImgZoomed),
    [isImgZoomed]
  );

  const setMousePos = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = mainImgRef.current?.getBoundingClientRect();
      if (!rect) return console.error("Cannot get client rect.");

      const y = e.pageY;
      if (!isImgZoomed) setMouseYPos(y);
    },
    [mainImgRef, isImgZoomed]
  );

  const hoverThumbnail = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return console.error("Current target not found.");
    if (!e.currentTarget.dataset) {
      return console.error("Dataset property is undefined.");
    }

    const idx = Number(e.currentTarget.dataset.idx);
    setCurrentImgIdx(idx);
  }, []);

  useEffect(() => {
    const rect = mainImgRef.current?.getBoundingClientRect();
    if (!rect) return console.error("Cannot get client rect.");

    const getYPosBoundaries = () => {
      const twentyPercentOfHeight = rect.bottom / 5;
      const isBelowTwentyPercent = mouseYPos < twentyPercentOfHeight;
      const isOverSixtyPercent = mouseYPos > twentyPercentOfHeight * 3;

      if (isBelowTwentyPercent) return 0;
      if (isOverSixtyPercent) return rect.bottom;
      return mouseYPos;
    };
    const yPos = getYPosBoundaries();

    setComputedYPos(Math.min(rect.height - window.innerHeight, yPos));
  }, [isImgZoomed, mouseYPos]);

  useEffect(() => {
    const turnOffZoomIn = () => isImgZoomed && toggleZoomed();

    window.addEventListener("resize", turnOffZoomIn);
    return () => window.removeEventListener("resize", turnOffZoomIn);
  }, [isImgZoomed]);

  return (
    <ClientSidePortal selector="#modal">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <button
              type="button"
              className={"btn-close " + styles["lightbox-modal__btn"]}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={"modal-body " + styles["modal-body"]}>
              <aside className={styles["lightbox-modal__menu"]}>
                {product.images.map((src, idx) => (
                  <Link
                    href="#"
                    key={idx}
                    className={
                      "d-block mb-3 " + styles["lightbox-modal__thumb-link"]
                    }
                  >
                    <Image
                      className={"img-fluid"}
                      src={src}
                      alt={`model presenting ${product.brand} ${product.name}`}
                    />
                    <div
                      className={
                        styles["lightbox-modal__thumb-cover"] +
                        " " +
                        (idx === currentImgIdx ? styles.active : "")
                      }
                      data-idx={idx}
                      onMouseOver={hoverThumbnail}
                    ></div>
                  </Link>
                ))}
              </aside>
              <div
                className={
                  "position-relative " +
                  styles["lightbox-modal__img-wrapper"] +
                  " " +
                  (isImgZoomed ? styles["lightbox-modal__zoom"] : "")
                }
                onClick={toggleZoomed}
                onMouseMove={setMousePos}
              >
                <Image
                  className={
                    "img-fluid d-block " +
                    styles["lightbox-modal__main-img"] +
                    (!isImgZoomed ? " h-100" : "")
                  }
                  src={product.images[currentImgIdx]}
                  alt={`model presenting ${product.brand} ${product.name}`}
                  ref={mainImgRef}
                  style={{
                    top: isImgZoomed ? `-${computedYPos}px` : "0px",
                    cursor: isImgZoomed ? "zoom-out" : "zoom-in",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientSidePortal>
  );
};
