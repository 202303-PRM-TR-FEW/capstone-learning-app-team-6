"use client";
import { useState } from "react";
import { courses } from "@/app/page";
import Link from "next/link";

import styles from "./styles/coursePreview.module.css";

const CoursePreview = (props) => {
  const reviewBtnHandler = () => {
    if (typeof props.getClickedCourseName === "function") {
      // Proceed with calling the function
      courses.some((course) => {
        if (course.name.trim() == props.displayedCourse.name.trim()) {
          console.log(course.name);
          props.getClickedCourseName(course);
        }
      });
    } else {
      console.log(typeof props.getClickedCourseName);
    }
  };

  return (
    <section className={`${styles["course-preview__container"]} mflex`}>
      <div className={`${styles.container} mflex`}>
        <div className={styles["media-container"]}>
          <img
            // src="https://assets.api.uizard.io/api/cdn/stream/4f91c603-603d-44e2-ab35-65be1763f022.jpg"
            src={props.displayedCourse.image}
            alt="Course Photo"
          />
        </div>
        <div className={styles["course-content__container"]}>
          <h2 className={styles.text}>{props.displayedCourse.name}</h2>
          <div className={`${styles["course-info"]} mflex`}>
            <div className={`${styles["author-container"]} mflex`}>
              <div className={styles["author-image__container"]}>
                <img
                  src="https://assets.api.uizard.io/api/cdn/stream/106a750d-2bad-4c6c-bd08-6d8a6c8f7cae.jpg"
                  alt="Author's Photo"
                />
              </div>
              <h3>{props.displayedCourse.author}</h3>
            </div>
            <p className={`${styles["course-duration"]} mflex`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.icon}`}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clipRule="evenodd"
                />
              </svg>
              {props.displayedCourse.duration}
            </p>
            <p className={`${styles["course-rate"]} mflex`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.icon}`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {props.displayedCourse.rate}/5
            </p>
          </div>
        </div>
        <div className={styles["course-description__container"]}>
          <h2 className={styles.text}>Course Description</h2>
          <p>
            This online course was created for you if you are interested in
            taking great digital photos and learning how to make your
            photography unique and outstanding.
          </p>
        </div>
      </div>
      {!props.actionButton && (
        <div className={`${styles["actions-container"]} mflex`}>
          {/* <Link
            className={`${styles["action-button"]} ${styles["action-button__review"]}`}
            // onClick={reviewBtnHandler}
            href="/courses/coursepreviews"
          >
            {props.reviewBtn}
          </Link> */}
          <button
            className={`${styles["action-button"]} ${styles["action-button__review"]}`}
            onClick={reviewBtnHandler}
          >
            {props.reviewBtn}
          </button>
          <button className={styles["action-button"]}>{props.actionBtn}</button>
          ;
        </div>
      )}
    </section>
  );
};

export default CoursePreview;
