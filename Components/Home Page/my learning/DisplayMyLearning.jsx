import Progress from "@/Components/UI/progress bar/Progress";
import MyLearningElement from "./MyLearningElement";
import Button from "@/Components/UI/progress bar/Button";

const DisplayMyLearning = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <MyLearningElement
        key={course.name}
        name={course.name}
        image={course.image}
        author={course.author}
      >
        {props.isButton ? (
          <Button>BUY</Button>
        ) : (
          <Progress value={course.value} />
        )}
      </MyLearningElement>
    );
  });
};

export default DisplayMyLearning;
