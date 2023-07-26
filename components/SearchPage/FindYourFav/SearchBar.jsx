import Button from "@/components/UI/Button";
import styles from "./styles/searchBar.module.css";
const SearchBar = (props) => {
  return (
    <section className={styles.section}>
      <h2 className="header-text">Find Your Favorites</h2>
      <input
        type="text"
        placeholder="Search Categories"
        className={styles.input}
      ></input>
      <Button>SEARCH</Button>
    </section>
  );
};

export default SearchBar;
