import TopSearches from "@/components/Search Page/top searches/TopSearches";
import CategoriesSearchPage from "@/components/Search Page/categoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/components/Search Page/find your fav/SearchBar";
import RatingLevel from "@/components/Search Page/rating-level/RatingLevel";
import Recommended from "@/components/Search Page/recommended for you/Recommended";

const Search = (props) => {
  return (
    <main className="home-container">
      <SearchBar />
      <TopSearches />
      <CategoriesSearchPage />
      <RatingLevel />
      {/* <Recommended /> */}
    </main>
  );
};
export default Search;
