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
      ></CourseElement>
    );
  });
};

export default DisplayCourses;
