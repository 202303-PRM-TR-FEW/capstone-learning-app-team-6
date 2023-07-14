import TopSearches from "@/Components/Search Page/top searches/TopSearches";
import CategoriesSearchPage from "@/Components/Search Page/categoriesSearchPage/categoriesSearchPage";
import styles from "./searchPage.module.css";
import SearchBar from "@/Components/Search Page/find your fav/SearchBar";

const Search = (props) => {
  return (
    <main className={styles["home-container"]}>
      <h2 className="header-text">Find Your Favorites</h2>
      <SearchBar></SearchBar>
      <TopSearches />
      <CategoriesSearchPage />
      {/* This is the searches */}
    </main>
  );
};
export default Search;
