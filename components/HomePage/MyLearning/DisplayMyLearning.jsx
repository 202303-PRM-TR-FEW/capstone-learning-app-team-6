import Progress from "@/components/UI/Progress";
import MyLearningElement from "./MyLearningElement";
import Button from "@/components/UI/Button";

const DisplayMyLearning = (props) => {
  const getClickedCourse = (event) => {
    console.log(event);
    console.log("Clicked ");
  };
  return props.AllCourses.map((course) => {
    return (
      <MyLearningElement
        onClick={() => console.log("Course Clicked")}
        key={course.id}
        id={course.id}
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
