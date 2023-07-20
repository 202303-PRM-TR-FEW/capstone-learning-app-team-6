import StatisticsElement from "./TotalStatElem";

const DisplayStatistics = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <StatisticsElement
        key={course.name}
        name={course.name}
        image={course.image}
        quantity={course.quantity}
      ></StatisticsElement>
    );
  });
};

export default DisplayStatistics;
