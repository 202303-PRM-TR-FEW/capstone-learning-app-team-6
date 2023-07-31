import AchievementsElement from "./AchievementsElement";

const DisplayAchievements = (props) => {
  return props.AllCourses.map((course) => {
    return (
      <AchievementsElement
        key={course.name}
        name={course.name}
        image={course.image}
        value={course.value}
        aim={course.aim}
        task={course.task}
      ></AchievementsElement>
    );
  });
};

export default DisplayAchievements;
