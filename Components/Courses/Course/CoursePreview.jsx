import styles from "./styles/coursePreview.module.css";

const courses = [
  {
    name: "Becoming a Photographer",
    author: "Clara Manning",
    value: 69,
    image:
      "https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg",
  },
  {
    name: "Design Thinking 2.0",
    author: "Chris Kinley",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
  },
  {
    name: "Product Photography",
    author: "Lena Gold",
    value: 11,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/937fc2b0-e1c5-4a5a-93f7-34d23cd5ca6d.jpg",
  },
  {
    name: "Learn how to make portraits",
    author: "Maria Silver",
    value: 27,
    image:
      "https://i.etsystatic.com/21944704/r/il/2a028b/3175957310/il_fullxfull.3175957310_3802.jpg",
  },
];
const CoursePreview = (props) => {
  return (
    <section className={`${styles["course-preview__container"]} mflex`}>
      <div className={`${styles.container} mflex`}>
        <div className={styles["media-container"]}>
          <img
            src="https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg"
            alt="Course Photo"
          />
        </div>
        <div className={styles["course-content__container"]}>
          <h2 className={styles.text}>Becoming a Photographer</h2>
          <div className={`${styles["course-info"]} mflex`}>
            <div className={`${styles["author-container"]} mflex`}>
              <div className={styles["author-image__container"]}>
                <img
                  src="https://assets.api.uizard.io/api/cdn/stream/106a750d-2bad-4c6c-bd08-6d8a6c8f7cae.jpg"
                  alt="Author's Photo"
                />
              </div>
              <h3>Tom Collins</h3>
            </div>
            <p className={`${styles["course-duration"]} mflex`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.icon}`}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clipRule="evenodd"
                />
              </svg>
              43min
            </p>
            <p className={`${styles["course-rate"]} mflex`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.icon}`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              4.3/5.0
            </p>
          </div>
        </div>
        <div className={styles["course-description__container"]}>
          <h2 className={styles.text}>Course Description</h2>
          <p>
            This online course was created for you if you are interested in
            taking great digital photos and learning how to make your
            photography unique and outstanding.
          </p>
        </div>
      </div>
      <div className={`${styles["actions-container"]} mflex`}>
        <button
          className={`${styles["action-button"]} ${styles["action-button__review"]}`}
        >
          {props.review}
        </button>
        <button className={styles["action-button"]}>{props.action}</button>
      </div>
    </section>
  );
};

export default CoursePreview;
