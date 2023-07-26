import CoursePreview from "@/components/Courses/Course/CoursePreview";
import CourseContent from "@/components/CourseContent/CourseContent";

import styles from "../../courses/coursePage.module.css";

const CoursePreviews = (props) => {
  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <CoursePreview actionButton={true} />
      <CourseContent />
    </main>
  );
};
export default CoursePreviews;
