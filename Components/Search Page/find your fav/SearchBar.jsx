import Button from "@/Components/UI/progress bar/Button";
import styles from "./styles/searchBar.module.css";
const SearchBar = (props) => {
  return (
    <section className={styles.section}>
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
