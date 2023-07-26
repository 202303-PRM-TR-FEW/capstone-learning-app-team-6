import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "@/components/Search Page/categoriesSearchPage/styles/categoriesSearch.module.css";

let category = [
  { icon: "fa-solid fa-chart-line", name: "Sales" },
  { icon: "fa-solid fa-users-line", name: "HR" },
  { icon: "fa-solid fa-bezier-curve", name: "Drawing" },
  { icon: "fa-solid fa-table", name: "Big Data" },
  { icon: "fa-solid fa-pen-ruler", name: "Design" },
  { icon: "fa-solid fa-lightbulb", name: "Markiting" },
  { icon: "fa-solid fa-star", name: "Astronomy" },
];

function CategoriesSearchPage() {
  return (
    <div>
      <ul>
        {category.map(
          (
            category,
            index // if index smaller than 5 loop over elements in category else stop
          ) =>
            index < 5 ? (
              <>
                <li className={styles.category}>
                  <p>
                    <input type="checkbox" className={styles.checkbox} />
                    {category.name}
                  </p>
                </li>
              </>
            ) : (
              ""
            )
        )}
      </ul>
    </div>
  );
}

export default CategoriesSearchPage;
