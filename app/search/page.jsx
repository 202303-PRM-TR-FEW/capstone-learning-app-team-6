import TopSearches from "../Components/Search Page/top searches/top-searches";
import styles from "../home/homePage.module.css";

const Search = (props) => {
  return (
    <main className={styles["home-container"]}>
      <TopSearches />
    </main>
  );
};

export default Search;
