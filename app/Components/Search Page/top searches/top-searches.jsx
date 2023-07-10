import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./styles/top-searches.module.css";

let topSearches = [
  { name: "Marketing Strategy" },
  { name: "UX Design" },
  { name: "Excel" },
  { name: "Adobe Photoshop" },
  { name: "CRM" },
  { name: "Photography" },
  { name: "Content Making" },
];

function TopSearches() {
  return (
    <section className={styles.parent}>
      <h2 className={styles["header"]}>TOP SEARCHES</h2>
      <ul>
        {topSearches.map((topSearches) => (
          <li
            key={topSearches.name}
            className={`${topSearches.icon} ${styles.li} `}
          >
            <p className={styles.text}>{topSearches.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopSearches;
