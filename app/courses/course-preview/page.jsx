<<<<<<< HEAD:app/Courses/coursepreviews/page.jsx
"use client";
import { useState } from "react";
import { courses } from "@/app/page";

import CoursePreview from "@/Components/Courses/Course/CoursePreview";
import CourseContent from "@/Components/CourseContent/CourseContent";
=======
import CoursePreview from "@/components/Courses/Course/CoursePreview";
import CourseContent from "@/components/CourseContent/CourseContent";
>>>>>>> 509bbaedb285f841a974a9da37031a76e122ed39:app/courses/course-preview/page.jsx

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
<<<<<<< HEAD:app/Courses/coursepreviews/page.jsx
      <CoursePreview
        getClickedCourseName={previewClickedCourse}
        displayedCourse={displayCourse}
        actionButton={true}
      />
      <CourseContent displayedCourseContent={displayCourse.content} />
=======
      <CoursePreview actionButton={true} />
      <CourseContent />
>>>>>>> 509bbaedb285f841a974a9da37031a76e122ed39:app/courses/course-preview/page.jsx
    </main>
  );
};
export default CoursePreviews;
