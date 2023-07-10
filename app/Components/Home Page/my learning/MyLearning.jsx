import DisplayMyLearning from "./DisplayMyLearning";

import styles from "./styles/myLearning.module.css";

const courses = [
  {
    name: "Becoming a Photographer",
    author: "Clara Manning",
    value: 69,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
  },
  {
    name: "Design Thinking 2.0",
    author: "Chris Kinley",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
  },
];

const MyLearning = (props) => {
  return (
    <section className={styles["myLearning-container"]}>
      <h2 className={styles["header"]}>My Learning</h2>
      <ul className={`${styles["cards-container"]} mflex`}>
        <DisplayMyLearning AllCourses={courses}></DisplayMyLearning>
      </ul>
    </section>
  );
};

export default MyLearning;
