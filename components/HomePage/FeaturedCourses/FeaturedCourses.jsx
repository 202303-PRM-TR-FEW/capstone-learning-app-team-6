"use client";
import React, { useState, useEffect } from "react";
import DisplayCourses from "./DisplayCourses";
import styles from "./styles/featuredCourses.module.css";
import { fetchCourses } from "@/components/Fetching/fetching";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      const courseList = await fetchCourses();
      setCourses(courseList);
    };

    fetchAllCourses();
  }, []);

  return (
    <section className={styles["features-container"]}>
      <h2 className="header-text">Featured Courses</h2>
      <ul className={`${styles["cards-container"]} mflex`}>
        {courses && <DisplayCourses AllCourses={courses.slice(0, 4)} />}
      </ul>
    </section>
  );
};

export default FeaturedCourses;
