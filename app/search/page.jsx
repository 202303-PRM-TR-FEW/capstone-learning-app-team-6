import TopSearches from "@/Components/Search Page/top searches/TopSearches";
import CategoriesSearchPage from "@/Components/Search Page/categoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/Components/Search Page/find your fav/SearchBar";
import RatingLevel from "@/Components/Search Page/rating-level/RatingLevel";
import Recommended from "@/Components/Search Page/recommended for you/Recommended";
const Search = (props) => {
  return (
    <main className="home-container">
      <SearchBar />
      <TopSearches />
      <CategoriesSearchPage />
      <RatingLevel />
      <Recommended />
    </main>
  );
};
export default Search;
