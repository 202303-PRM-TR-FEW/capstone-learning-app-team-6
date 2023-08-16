import styles from "./styles/courseContent.module.css";

const ChapterElement = (props) => {
  return (
    <article className={styles["chapter__container"]}>
      <div>
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["check__icon"]}
        >
          <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
        </svg>
      </div>
      <div className={`${styles["chapter-content__container"]} mflex`}>
        <h3 className={styles["chapter__header"]}>{props.name}</h3>
        <h4 className={styles["number-of-videos"]}>{props.video} videos</h4>
      </div>
      <div className={styles["chevron-right__container"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles["chevron-right__icon"]}
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </article>
  );
};

export default ChapterElement;
