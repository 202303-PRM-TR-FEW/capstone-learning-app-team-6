import DisplayStatistics from "./DisplayStatistics";
import styles from "./styles/totalStatistics.module.css";

const courses = [
  {
    name: "FINISHED COURSES",
    image: "/images/finished-courses.jpg",
    quantity: "3",
  },
  {
    name: "HOURS LEARNED",
    image: "/images/hours-learned.jpg",
    quantity: "56",
  },
  {
    name: "SKILLS ACHIEVED",
    image: "/images/skills-achieved.jpg",
    quantity: "7",
  },
];

const TotalStatistics = () => {
  return (
    <section className={styles["features-container"]}>
      <h5 className={styles["header-text"]}>Total Statistics</h5>
      <ul className={`${styles["cards-container"]} mflex`}>
        <DisplayStatistics AllCourses={courses}></DisplayStatistics>
      </ul>
    </section>
  );
};

export default TotalStatistics;
