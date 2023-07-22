import Progress from "@/Components/UI/progress bar/Progress";
import styles from "./styles/achievementsElement.module.css";

const AchievementsElement = (props) => {
  return (
    <>
      <li className={`${styles["myLearning-card"]} mflex`}>
        <div className={styles["image-container"]}>
          <img src={props.image} />
        </div>
        <div className={`${styles.text} mflex`}>
          <div style={{ width: "100%", height: "100%" }}>
            <div className={`${styles["course"]} mflex`}>
              <h2>{props.name}</h2>
              <h3>{props.task}</h3>
            </div>
            <h3 className={styles["author-name"]}>{props.author} </h3>
          </div>
          <Progress value={props.value} />
          <h3>{props.aim}</h3>
        </div>
      </li>
    </>
  );
};

export default AchievementsElement;
