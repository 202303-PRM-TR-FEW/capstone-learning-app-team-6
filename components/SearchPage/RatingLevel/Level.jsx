"use client";
import { useState } from "react";

import styles from "./styles/level.module.css";
let category = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "professional", name: "Professional" },
];
const Level = (props) => {
  const [levelsChecked, setLevelsChecked] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event, categoryId) => {
    const isChecked = event.target.checked;
    setLevelsChecked((prevCheckedCategories) => {
      const updatedCategories = isChecked
        ? [...prevCheckedCategories, categoryId]
        : prevCheckedCategories.filter((id) => id !== categoryId);

      // console.log(updatedCategories);
      props.levelsCheckedArray(updatedCategories);
      return updatedCategories;
    });
  };
  // const handleCheckboxChange = (event, categoryId) => {
  //   const isChecked = event.target.checked;
  //   if (isChecked) {
  //     setLevelsChecked([...levelsChecked, categoryId]);
  //     // console.log(levelsChecked);
  //     props.levelsCheckedArray(levelsChecked)
  //   } else {
  //     setLevelsChecked(levelsChecked.filter((id) => id !== categoryId));
  //     // console.log(levelsChecked);
  //   }
  // };

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
