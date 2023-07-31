import Progress from "@/components/UI/Progress";
import styles from "./styles/achievementsElement.module.css";

const AchievementsElement = (props) => {
  return (
    <ul className={styles.main}>
      <li className={`${styles["myLearning-card"]} mflex`}>
        <div className={styles["image-container"]}>
          <img src={props.image} />
        </div>
        <div className={`${styles.text} mflex`}>
          <div style={{ width: "100%", height: "100%" }}>
            <div>
              <h2 className={`${styles["course"]} mflex`}>{props.name}</h2>
            </div>
          </div>
              <h3 className={`${styles["task"]} mflex`}>{props.task}</h3>
          <Progress value={props.value} />
          <h3 className={styles["aim"]}>{props.aim}</h3>
        </div>
      </li>
    </ul>
  );
};

export default AchievementsElement;
