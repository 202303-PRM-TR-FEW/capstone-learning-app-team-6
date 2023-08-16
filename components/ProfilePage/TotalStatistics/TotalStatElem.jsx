import styles from "./styles/totalStatElem.module.css";

const TotalStatElem = (props) => {
  return (
    <li className={`${styles["course-card"]} mflex`}>
      <div className={`${styles["course-image__container"]}`}>
        <img src={props.image} />
      </div>
      <h3 className={styles["course-name"]}>{props.name}</h3>
      <div className={`${styles["course-info"]} mflex`}>
        <p className={styles["course-quantity"]}>{props.quantity}</p>
      </div>
    </li>
  );
};

export default TotalStatElem;
