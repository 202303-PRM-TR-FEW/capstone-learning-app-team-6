"use client";
import { useState } from "react";
import { courses } from "@/app/page";

import CoursePreview from "@/Components/Courses/Course/CoursePreview";
import CourseContent from "@/Components/CourseContent/CourseContent";

import styles from "../../courses/coursePage.module.css";

const CoursePreviews = (props) => {
  const [displayCourse, setDisplayCourse] = useState(courses[1]);

  const previewClickedCourse = (courseName) => {
    console.log(courses.indexOf(courseName));
    const clickedCourseIndex = courses.indexOf(courseName);
    setDisplayCourse(courses[clickedCourseIndex]);
    console.log(displayCourse);
  };

  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <CoursePreview
        getClickedCourseName={previewClickedCourse}
        displayedCourse={displayCourse}
        actionButton={true}
      />
      <CourseContent displayedCourseContent={displayCourse.content} />
    </main>
  );
};
export default CoursePreviews;
