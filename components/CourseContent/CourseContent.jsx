import { courses } from "@/app/page";
import DisplayChapterElements from "./DisplayChapterElements";
import ActionButton from "../UI/ActionButton";
import styles from "./styles/courseContent.module.css";

const CourseContent = (props) => {
  return (
    <section className={`${styles["content__container"]} flex`}>
      <ul className={styles["container"]}>
        <h2 className="header-text">Course Overview</h2>
        <DisplayChapterElements
          key={props.displayedCourseContent.name}
          course={props.displayedCourseContent}
        />
      </ul>
      <ActionButton action={"BUY NOW"} />
    </section>
  );
};

export default CourseContent;
