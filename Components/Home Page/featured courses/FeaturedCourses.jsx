"use client";
import React, { useState, useEffect } from "react";
import DisplayCourses from "./DisplayCourses";
import styles from "./styles/featuredCourses.module.css";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courseCollection = collection(db, "courses");
      const courseSnapshot = await getDocs(courseCollection);
      const courseList = courseSnapshot.docs.map((doc) => doc.data());
      setCourses(courseList);
    };

    fetchCourses();
  }, []);

  return (
    <section className={styles["features-container"]}>
      <h2 className="header-text">Featured Courses</h2>
      <ul className={`${styles["cards-container"]} mflex`}>
        {courses && <DisplayCourses AllCourses={courses} />}
      </ul>
    </section>
  );
};

export default FeaturedCourses;
