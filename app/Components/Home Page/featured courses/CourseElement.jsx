import styles from "./styles/courseElement.module.css";

const CourseElement = (props) => {
  return (
    <li className={`${styles["course-card"]} flex`}>
      <div className={`${styles["course-image__container"]}`}>
        <img src={props.image} />
      </div>
      <h3 className={styles["course-name"]}>{props.name}</h3>
      <div className={`${styles["course-info"]} flex`}>
        <p className={styles["course-duration"]}>{props.duration}</p>
        <p className={styles["course-rate"]}>{props.rate}/5</p>
        <p className={styles["course-price"]}>${props.price}</p>
      </div>
    </li>
  );
};

export default CourseElement;
