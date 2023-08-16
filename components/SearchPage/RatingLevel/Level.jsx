"use client";
import { useState, useContext } from "react";
import SearchContext from "@/store/search-context";

import styles from "./styles/level.module.css";
import { courses } from "@/app/page";
let category = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "professional", name: "Professional" },
];

const Level = (props) => {
  const [levelsChecked, setLevelsChecked] = useState([]);
  const searchCtx = useContext(SearchContext);

  // Function to handle checkbox change
  const handleCheckboxChange = (event, categoryId) => {
    const isChecked = event.target.checked;
    setLevelsChecked((prevCheckedCategories) => {
      const updatedCategories = isChecked
        ? [...prevCheckedCategories, categoryId]
        : prevCheckedCategories.filter((id) => id !== categoryId);

      // console.log("updatedCategories");
      // console.log(updatedCategories);

      console.log("searchCtx");
      console.log(searchCtx.filteredCoursesIds);
      props.levelsCheckedArray(updatedCategories, "level");
      // courses.forEach((course) => {
      //   if (levelsChecked.includes(course.level.toLowerCase())) {
      //     searchCtx.filteredCoursesIds.push(course.id);
      //   }
      // });
      // searchCtx.setFilteredCoursesIds(updatedCategories);

      // console.log("searchCtx");
      // console.log(searchCtx);
      return updatedCategories;
    });
  };

  return (
    <section>
      <h2 className={styles.header}>LEVEL</h2>
      <ul>
        {category.map((category) => (
          <li className={styles.category} key={category.id}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id={category.id}
              checked={levelsChecked.includes(category.id)}
              onChange={(event) => handleCheckboxChange(event, category.id)}
            />
            <label htmlFor={category.id}>{category.name}</label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Level;
