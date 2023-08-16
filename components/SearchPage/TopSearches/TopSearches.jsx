import { useState } from "react";
import styles from "./styles/top-searches.module.css";

const topSearches = [
  { name: "Master" },
  { name: "UX Design" },
  { name: "Excel" },
  { name: "Product" },
  { name: "Discover" },
  { name: "Photography" },
  { name: "Advanced" },
];

function TopSearches(props) {
  const [activeSearch, setActiveSearch] = useState(null);
  const handleInputChange = (searchValue) => {
    // Toggle active search value
    activeSearch === searchValue
      ? setActiveSearch(null)
      : setActiveSearch(searchValue);

    props.onClick(searchValue);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>TOP SEARCHES</h2>
      <ul className={styles.parent}>
        {topSearches.map((searchItem) => (
          <li
            key={searchItem.name}
            className={`${styles.li} ${
              activeSearch === searchItem.name ? styles.active : ""
            }`}
            onClick={() => handleInputChange(searchItem.name)}
          >
            <p className={styles.text}>{searchItem.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopSearches;
