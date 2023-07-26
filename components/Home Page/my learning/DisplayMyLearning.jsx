import Progress from "@/components/UI/Progress";
import MyLearningElement from "./MyLearningElement";
import Button from "@/components/UI/Button";

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
