import { styled } from "styled-components";
import CourseElement from "./FeaturedCourseElement";

const DisplayCourses = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <CourseElement
        key={course.id}
        name={course.name}
        image={course.image}
        duration={course.duration}
        rate={course.rate}
        price={course.price}
        description={course.description}
        author={course.author}
        category={course.category}
        value={course.value}
        content={course.content}
        level={course.level}
      ></CourseElement>
    );
  });
};

export default DisplayCourses;
