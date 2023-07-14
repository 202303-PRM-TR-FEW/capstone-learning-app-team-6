import MyLearningElement from "./MyLearningElement";

const DisplayMyLearning = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <MyLearningElement
        key={course.name}
        name={course.name}
        image={course.image}
        author={course.author}
        value={course.value}
      ></MyLearningElement>
    );
  });
};

export default DisplayMyLearning;
