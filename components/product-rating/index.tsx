import styles from "./product-rating.module.scss";

interface Props {
  rating: number;
  big?: boolean;
}

export const ProductRating = ({ rating, big }: Props) => (
  <>
    {Array(5)
      .fill(null)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`icon icon-tabler icon-tabler-star ${
            styles["product-rating__item"]
          } ${i < rating ? styles["product-rating__item--active"] : ""} ${
            big ? styles["product-rating__item--big"] : ""
          }`}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="grey"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
        </svg>
      ))}
  </>
);
