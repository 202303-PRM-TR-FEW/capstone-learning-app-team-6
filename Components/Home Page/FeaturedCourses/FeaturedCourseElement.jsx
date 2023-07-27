"use client";
import styles from "./styles/featuredCourseElement.module.css";
import { styled } from "styled-components";

const Button = styled.button`
  background-color: #2e8dff;
  color: #fbfbfb;
  font-size: 1.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
`;

const FeaturedCourseElement = (props) => {
  return (
    <li key={props.key} className={`${styles["course-card"]} mflex`}>
      <div className={`${styles["course-image__container"]}`}>
        <img src={props.image} />
      </div>
      <h3 className={styles["course-name"]}>{props.name}</h3>
      <div className={`${styles["course-info"]} mflex`}>
        <p className={`${styles["course-duration"]} mflex`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>

          {props.duration}
        </p>
        <p className={`${styles["course-rate"]} mflex`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          {props.rate}/5
        </p>
        <Button>${props.price}</Button>
      </div>
    </li>
  );
};

export default FeaturedCourseElement;
