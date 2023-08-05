import DisplayMyLearning from "@/Components/HomePage/MyLearning/DisplayMyLearning";
import { courses } from "@/app/page";
import { fetchedCourses } from "@/Components/Fetching/fetching";
import Button from "@/components/UI/Button";

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
      <h2 className="header-text">{props.header}</h2>
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
