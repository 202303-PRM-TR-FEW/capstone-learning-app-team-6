import { courses } from "@/app/page";
import DisplayMyLearning from "./DisplayMyLearning";

import styles from "./styles/myLearning.module.css";

// const courses = [
//   {
//     name: "Becoming a Photographer",
//     author: "Clara Manning",
//     value: 69,
//     image:
//       "https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg",
//   },
//   {
//     name: "Design Thinking 2.0",
//     author: "Chris Kinley",
//     value: 27,
//     image:
//       "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
//   },
// ];

const MyLearning = (props) => {
  return (
    <section className={styles["myLearning-container"]}>
      <h2 className="header-text">My Learning</h2>
      <ul className={`${styles["cards-container"]} mflex`}>
        <DisplayMyLearning AllCourses={courses.slice(0, 2)}></DisplayMyLearning>
      </ul>
    </section>
  );
};

export default MyLearning;
