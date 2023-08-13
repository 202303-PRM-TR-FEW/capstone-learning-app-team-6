import { styled } from "styled-components";
import CourseElement from "./FeaturedCourseElement";

const DisplayCourses = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <CourseElement
        key={course.id}
        id={course.id}
        name={course.name}
        image={course.image}
        duration={course.duration}
        rate={course.rate}
        price={course.price}
        description={course.description}
        level={course.level}
        value={course.value}
        category={course.category}
        author={course.author}
      ></CourseElement>
    );
  });
};

export default DisplayCourses;
