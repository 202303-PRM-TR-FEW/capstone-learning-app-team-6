import DisplayMyLearning from "@/components/HomePage/MyLearning/DisplayMyLearning";
import Button from "@/components/UI/Button";

const MyLearningCourses = (props) => {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <h2 className="header-text">{props.header}</h2>
      <ul>
        <DisplayMyLearning
          AllCourses={props.courses}
          isButton={props.isButton}
        ></DisplayMyLearning>
      </ul>
    </section>
  );
};

export default MyLearningCourses;
