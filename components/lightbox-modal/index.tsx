import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

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
  const hoverImage = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return console.error("Current target not found.");

    if (!e.currentTarget.dataset) {
      return console.error("Dataset property is undefined.");
    }

    const idx = Number(e.currentTarget.dataset.idx);

    setCurrentImgIdx(idx);
  }, []);

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
            <div className={"modal-body"}>
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
                      onMouseOver={hoverImage}
                    ></div>
                  </Link>
                ))}
              </aside>
              <div
                className={
                  "position-relative h-100 " +
                  styles["lightbox-modal__img-wrapper"]
                }
              >
                <Image
                  className={
                    "img-fluid d-block " + styles["lightbox-modal__main-img"]
                  }
                  src={product.images[currentImgIdx]}
                  alt={`model presenting ${product.brand} ${product.name}`}
                  // ref={mainImgRef}
                />
                <div
                  className={styles["lightbox-modal__zoom"]}
                  // style={{
                  //   background: `url(${product.images[0].src}) no-repeat`,
                  //   backgroundPositionX: `${mousePos.x}%`,
                  //   backgroundPositionY: `${mousePos.y}%`,
                  // }}
                  // onMouseMove={zoomInOut}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientSidePortal>
  );
};
