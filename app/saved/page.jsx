import { courses } from "@/app/page";

import CoursePreview from "@/Components/Courses/Course/CoursePreview";
import MyLearningCourses from "@/Components/Courses/MyLearning/MyLearningCourses";

import styles from "../courses/coursePage.module.css";

const Courses = (props) => {
  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <MyLearningCourses
        header={"Saved Courses"}
        courses={courses.slice(4)}
        isButton={true}
      />
      <CoursePreview review={"PREVIEW"} action={"BUY NOW"}/>
    </main>
  );
};
export default Courses;
