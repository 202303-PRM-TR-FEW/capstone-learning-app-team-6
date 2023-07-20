import TopSearches from "@/Components/Search Page/top searches/TopSearches";
import CategoriesSearchPage from "@/Components/Search Page/categoriesSearchPage/categoriesSearchPage";
import styles from "./searchPage.module.css";
import SearchBar from "@/Components/Search Page/find your fav/SearchBar";
import RatingLevel from "@/Components/Search Page/rating-level/RatingLevel";

const Search = (props) => {
  return (
    <main className="home-container">
      <SearchBar />
      <TopSearches />
      <CategoriesSearchPage />
      <RatingLevel />
    </main>
  );
};
export default Search;
