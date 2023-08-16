import DisplayMyLearning from "@/components/HomePage/MyLearning/DisplayMyLearning";
import { courses } from "@/app/page";
import { fetchedCourses } from "@/components/Fetching/fetching";
import Button from "@/components/UI/Button";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Link from "next/link";
import Styles from "./styles/MyLearningCourses.module.css";

const MyLearningCourses = (props) => {
  const getClickedCourse = (event) => {
    console.log(event.target.closest("li"));
    // console.log(event.target.closest("li").querySelector("h2").textContent);
    const liExist = event.target.closest("li");

    if (liExist !== null) {
      const clickedCourseID = event.target
        .closest("li")
        .getAttribute("data-courseid");

      console.log(clickedCourseID, typeof clickedCourseID);
      props.coursesSource.some((course) => {
        if (course.id == clickedCourseID) {
          console.log(course);
          console.log(typeof props.clickedCourseID);
          props.getClickedCourseName(course);
        }
      });
      console.log("after", clickedCourseID);
    } else return;
  };

  return (
    <section style={{ paddingTop: "3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="header-text">{props.header}</h2>
        <Link
          href="/statistics"
          className={Styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={Styles.statistics}>
            <EqualizerIcon style={{ fontSize: "2.5rem" }} />
            Statistics
          </h2>
        </Link>
      </div>
      <ul onClick={getClickedCourse}>
        <DisplayMyLearning
          AllCourses={props.courses}
          isButton={props.isButton}
        ></DisplayMyLearning>
      </ul>
    </section>
  );
};

export default MyLearningCourses;
