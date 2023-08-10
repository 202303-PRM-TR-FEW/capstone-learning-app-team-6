import DisplayAchievements from "./DisplayAchievements";
import styles from "./styles/achievements.module.css";

const courses = [
  {
    name: "Commited Learner",
    value: 69,
    image: "/images/hours-learned.jpg",
    aim: "Reach a 3 day streak",
    task: "2/3",
  },
  {
    name: "Point Collector",
    value: 27,
    image: "/images/skills-achieved.jpg",
    aim: "Earn 1000 more points",
    task: "2000/3000",
  },
];

const Achievements = (props) => {
  return (
    <div className={styles["myLearning-container"]}>
      <h2 className={styles["header-text"]}>Achievements</h2>
      <ul className={`${styles["cards-container"]} mflex`}>
        <DisplayAchievements AllCourses={courses}></DisplayAchievements>
      </ul>
    </div>
  );
};

export default Achievements;
