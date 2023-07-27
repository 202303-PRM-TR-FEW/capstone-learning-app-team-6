"use client";
import { getDocs, collection } from "firebase/firestore";
import db from "@/firebase";
import React, { useState, useEffect } from "react";

import CoursePreview from "@/Components/Courses/Course/CoursePreview";
import MyLearningCourses from "@/Components/Courses/MyLearning/MyLearningCourses";

import styles from "../courses/coursePage.module.css";

const Courses = (props) => {
  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    const fetchSavedCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "savedCourses"));
      let courses = [];
      querySnapshot.forEach((doc) => {
        courses.push(doc.data());
      });
      setSavedCourses(courses);
    };

    fetchSavedCourses();
  }, []);

  return (
    <main
      className={`home-container grid-2 ${styles["home-container__courses"]}`}
    >
      <MyLearningCourses
        header={"Saved Courses"}
        courses={savedCourses}
        isButton={true}
      />
      <CoursePreview review={"PREVIEW"} action={"BUY NOW"} />
    </main>
  );
};

export default Courses;
