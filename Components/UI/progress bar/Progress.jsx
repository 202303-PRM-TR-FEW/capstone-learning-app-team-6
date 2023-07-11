import styles from "./styles/progress.module.css";

const Progress = (props) => {
  return (
    <div className={styles["progress-container"]}>
      <progress
        min={0}
        max={100}
        value={+props.value}
        className={styles["progress-bar"]}
      ></progress>
      <p>{+props.value}% Complete</p>
    </div>
  );
};

export default Progress;
