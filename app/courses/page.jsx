import { courses } from "@/app/page";

import CoursePreview from "@/components/Courses/Course/CoursePreview";
import MyLearningCourses from "@/components/Courses/MyLearning/MyLearningCourses";

import styles from "./coursePage.module.css";
const Courses = (props) => {
  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <MyLearningCourses header={"My Learning"} courses={courses.slice(0, 4)} />
      <CoursePreview review={"REVIEW COURSE"} action={"CONTINUE LEARNING"} />
    </main>
  );
};
export default Courses;