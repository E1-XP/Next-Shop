import styles from "./detail-tabs.module.scss";
import { spaceGrotesk } from "../../styles/fonts";

export const DetailTabs = () => (
  <div className={"d-flex align-items-start " + styles["detail-tabs"]}>
    <div
      className="nav flex-column nav-pills me-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        className={"nav-link active " + spaceGrotesk.className}
        id="v-pills-description-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-description"
        type="button"
        role="tab"
        aria-controls="v-pills-description"
        aria-selected="true"
      >
        Description
      </button>
      <button
        className={"nav-link " + spaceGrotesk.className}
        id="v-pills-reviews-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-reviews"
        type="button"
        role="tab"
        aria-controls="v-pills-reviews"
        aria-selected="false"
      >
        Reviews
      </button>
    </div>
    <div className="tab-content" id="v-pills-tabContent">
      <div
        className="tab-pane fade show active p-2"
        id="v-pills-description"
        role="tabpanel"
        aria-labelledby="v-pills-description-tab"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
        consequatur tempora incidunt nihil sunt ipsam quis eum reiciendis labore
        vero nemo exercitationem ex, deserunt ullam blanditiis fuga hic qui
        placeat?
        <p className={"lead mt-3 " + spaceGrotesk.className}>Information</p>
        <ul className={"list-group " + styles.description__list}>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            An item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            A second item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            A third item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            A fourth item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            And a fifth one
          </li>
        </ul>
      </div>
      <div
        className="tab-pane fade show active p-2"
        id="v-pills-reviews"
        role="tabpanel"
        aria-labelledby="v-pills-reviews-tab"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
        consequatur tempora incidunt nihil sunt ipsam quis eum reiciendis labore
        vero nemo exercitationem ex, deserunt ullam blanditiis fuga hic qui
        placeat?
        <p className={"lead mt-3 " + spaceGrotesk.className}>Reviews</p>
        <ul className={"list-group " + styles.description__list}>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            An item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            A second item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            A third item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            A fourth item
          </li>
          <li
            className={"list-group-item border-0 " + styles.description__item}
          >
            And a fifth one
          </li>
        </ul>
      </div>
    </div>
  </div>
);
