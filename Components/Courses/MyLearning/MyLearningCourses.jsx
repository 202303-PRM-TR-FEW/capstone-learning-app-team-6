import DisplayMyLearning from "@/Components/HomePage/MyLearning/DisplayMyLearning";
import { courses } from "@/app/page";

const MyLearningCourses = (props) => {
  const getClickedCourse = (event) => {
    // console.log(event.target.closest("li").querySelector("h2").textContent);
    const liExist = event.target.closest("li");

    if (liExist !== null) {
      const clickedCourseName = event.target
        .closest("li")
        .querySelector("h2").textContent;

      console.log(clickedCourseName.trim(), typeof clickedCourseName);
      courses.some((course) => {
        if (course.name.trim() == clickedCourseName.trim()) {
          console.log(course);
          console.log(typeof props.getClickedCourseName);
          props.getClickedCourseName(course);
        }
      });
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
