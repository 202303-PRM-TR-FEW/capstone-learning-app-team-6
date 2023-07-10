import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "../categories/styles/categories.module.css";

let category = [
  { icon: "fa-solid fa-chart-line", name: "Sales" },
  { icon: "fa-solid fa-users-line", name: "HR" },
  { icon: "fa-solid fa-bezier-curve", name: "Drawing" },
  { icon: "fa-solid fa-table", name: "Big Data" },
  { icon: "fa-solid fa-pen-ruler", name: "Design" },
  { icon: "fa-solid fa-lightbulb", name: "Markiting" },
  { icon: "fa-solid fa-star", name: "Astronomy" },
];

function Categories() {
  return (
    <div>
      <ul>
        {category.map((category) => (
          <>
            <li className={`${category.icon} ${styles.category}`}>
              <p className={styles.text}>{category.name}</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
