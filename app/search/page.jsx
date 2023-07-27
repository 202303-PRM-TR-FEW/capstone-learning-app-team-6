import TopSearches from "@/Components/Search Page/TopSearches/TopSearches";
import CategoriesSearchPage from "@/Components/Search Page/CategoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/Components/Search Page/FindYourFav/SearchBar";
import RatingLevel from "@/Components/Search Page/RatingLevel/RatingLevel";
import Recommended from "@/Components/Search Page/RecommendedForYou/Recommended";

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
