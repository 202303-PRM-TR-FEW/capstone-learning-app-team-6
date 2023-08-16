"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "@/components/SearchPage/CategoriesSearchPage/styles/categoriesSearch.module.css";

let category = [
  { icon: "fa-solid fa-chart-line", name: "Photography" },
  { icon: "fa-solid fa-users-line", name: "HR" },
  { icon: "fa-solid fa-bezier-curve", name: "Drawing" },
  { icon: "fa-solid fa-table", name: "Big Data" },
  { icon: "fa-solid fa-pen-ruler", name: "Design" },
  { icon: "fa-solid fa-lightbulb", name: "Marketing" },
  { icon: "fa-solid fa-star", name: "Programming" },
];

function CategoriesSearchPage(props) {
  const [categoriesChecked, setCategoriesChecked] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event, categoryName) => {
    const isChecked = event.target.checked;
    setCategoriesChecked((prevCheckedCategories) => {
      const updatedCategories = isChecked
        ? [...prevCheckedCategories, categoryName]
        : prevCheckedCategories.filter((name) => name !== categoryName);

      console.log(updatedCategories);
      props.categoriesCheckedArray(updatedCategories, "category");
      return updatedCategories;
    });
  };

  return (
    <section>
      <h2 className={styles.header}>CATEGORIES</h2>
      <ul>
        {category.map((category) => (
          <li
            className={styles.category}
            id={category.name}
            key={category.name}
          >
            <p>
              <input
                type="checkbox"
                className={styles.checkbox}
                id={category.name}
                checked={categoriesChecked.includes(
                  category.name.toLowerCase()
                )}
                onChange={(event) =>
                  handleCheckboxChange(event, category.name.toLowerCase())
                }
              />
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoriesSearchPage;
