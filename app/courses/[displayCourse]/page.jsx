"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { courses } from "@/app/page";

import CoursePreview from "@/Components/Courses/Course/CoursePreview";
import CourseContent from "@/Components/CourseContent/CourseContent";

import styles from "../../courses/coursePage.module.css";

const CoursePreviews = ({ params }) => {
  const router = useRouter();
  // const { name } = usePathname();
  const { displayCourse } = params;
  // Fetch the course data based on courseId
  const course = courses.find((course) => course.id === displayCourse);
  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <CoursePreview displayedCourse={course} actionButton={true} />
      <CourseContent displayedCourseContent={course.content} />
    </main>
  );
};
export default CoursePreviews;

// const [displayCourse, setDisplayCourse] = useState(courses[1]);

// const previewClickedCourse = (courseName) => {
//   console.log(courses.indexOf(courseName));
//   const clickedCourseIndex = courses.indexOf(courseName);
//   setDisplayCourse(courses[clickedCourseIndex]);
//   console.log(displayCourse);
// };
