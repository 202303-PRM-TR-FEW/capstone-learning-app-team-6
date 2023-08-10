"use client";
import { useState, useEffect } from "react";
import { courses } from "@/app/page";
import CoursePreview from "@/Components/Courses/Course/CoursePreview";
import MyLearningCourses from "@/Components/Courses/MyLearning/MyLearningCourses";

import styles from "../courses/coursePage.module.css";
import {
  fetchSavedCourses,
  fetchedCourses,
} from "@/components/Fetching/fetching";

const SavedCourses = (props) => {
  const [displayCourse, setDisplayCourse] = useState(courses[1]);
  const renderClickedCourse = (courseName) => {
    const clickedCourseIndex = fetchedCourses.indexOf(courseName);
    console.log(clickedCourseIndex);
    console.log("fetchedCourses", fetchedCourses);
    console.log(typeof fetchedCourses);
    setDisplayCourse(fetchedCourses[clickedCourseIndex]);
  };

  const [savedCourses, setSavedCourses] = useState([courses[0]]);
  useEffect(() => {
    const fetchCourses = async () => {
      const newlyFetchedCourses = await fetchSavedCourses();
      setSavedCourses(newlyFetchedCourses);
    };

    fetchCourses();
  }, []);
  console.log("savedCourses");
  console.log(savedCourses);
  // useEffect(() => {
  //   setDisplayCourse(fetchedCourses[0]);
  // }, [fetchedCourses]);

  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <MyLearningCourses
        header={"Saved Courses"}
        courses={savedCourses}
        coursesSource={fetchedCourses}
        isButton={true}
        getClickedCourseName={renderClickedCourse}
      />
      <CoursePreview
        displayedCourse={displayCourse}
        coursesSource={fetchedCourses}
        reviewBtn={"PREVIEW"}
        actionBtn={"BUY NOW"}
      />
    </main>
  );
};

export default SavedCourses;
