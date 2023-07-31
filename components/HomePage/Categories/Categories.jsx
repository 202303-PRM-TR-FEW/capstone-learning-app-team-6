import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./styles/categories.module.css";

let category = [
  { icon: "fa-solid fa-chart-line", name: "Sales" },
  { icon: "fa-solid fa-users-line", name: "HR" },
  { icon: "fa-solid fa-bezier-curve", name: "Drawing" },
  { icon: "fa-solid fa-table", name: "Big Data" },
  { icon: "fa-solid fa-pen-ruler", name: "Design" },
  { icon: "fa-solid fa-lightbulb", name: "Marketing" },
  { icon: "fa-solid fa-star", name: "Astronomy" },
];

function Categories() {
  return (
    <section className={styles.parent}>
      <h2 className="header-text">Categories</h2>
      <ul>
        {category.map((category) => (
          <li key={category.name} className={`${category.icon} ${styles.li} `}>
            <p className={styles.text}>{category.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
