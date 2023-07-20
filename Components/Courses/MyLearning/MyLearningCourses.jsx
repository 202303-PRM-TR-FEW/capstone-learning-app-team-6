
import DisplayMyLearning from "@/Components/Home Page/my learning/DisplayMyLearning";

const MyLearningCourses = (props) => {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <h2 className="header-text">{props.header}</h2>
      <ul>
        <DisplayMyLearning AllCourses={props.courses}></DisplayMyLearning>
      </ul>
    </section>
  );
};

export default MyLearningCourses;
