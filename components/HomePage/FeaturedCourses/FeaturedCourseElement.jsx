"use client";
import styles from "./styles/featuredCourseElement.module.css";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import {
  checkIfBookmarked,
  bookmarkCourse,
} from "@/components/Fetching/fetching";

const PriceBox = styled.span`
  background-color: #2e8dff;
  color: #fbfbfb;
  padding: 0.4rem 1.2rem;
  border-radius: 1rem;
`;

const ButtonContainer = styled.div`
  position: relative;
  color: #333;
`;

const BookmarkButton = styled.button`
  background: rgba(128, 128, 128, 0.5);
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem;
  position: absolute;
  top: -18rem;
  right: 0.5rem;

  .bookmark-icon {
    color: #ffffff;
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    transform: scale(1.15);
  }
`;

const FeaturedCourseElement = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      const status = await checkIfBookmarked(props.name);
      setIsBookmarked(status);
    };
    fetchBookmarkStatus();
  }, [props.name]);

  const handleBookmark = async () => {
    try {
      const alreadyBookmarked = await checkIfBookmarked(props.name);
      if (alreadyBookmarked) {
        alert("This course has already been added!");
        return;
      }
      await bookmarkCourse({
        name: props.name,
        image: props.image,
        duration: props.duration,
        rate: props.rate,
        price: props.price,
      });
      setIsBookmarked(true);
    } catch (error) {
      console.error("Error bookmarking course: ", error);
    }
  };

  return (
    <li key={props.id} className={`${styles["course-card"]} mflex`}>
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
        <ButtonContainer>
          <PriceBox>${props.price}</PriceBox>
          <BookmarkButton onClick={handleBookmark}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bookmark-icon"
              fill={isBookmarked ? "blue" : "currentColor"}
              viewBox="0 0 24 24"
              stroke={isBookmarked ? "blue" : "currentColor"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h12a2 2 0 012 2v14l-8-4-8 4V6z"
              />
            </svg>
          </BookmarkButton>
        </ButtonContainer>
      </div>
    </li>
  );
};

export default FeaturedCourseElement;
