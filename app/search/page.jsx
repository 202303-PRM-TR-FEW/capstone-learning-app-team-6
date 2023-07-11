import TopSearches from "@/Components/Search Page/top searches/TopSearches";
import styles from "./searchPage.module.css";

const Search = (props) => {
  return (
    <main className={styles["home-container"]}>
      <TopSearches />
    </main>
  );
};

export default Search;
