import TopSearches from "@/Components/SearchPage/TopSearches/TopSearches";
import CategoriesSearchPage from "@/Components/SearchPage/CategoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/Components/SearchPage/FindYourFav/SearchBar";
import RatingLevel from "@/Components/SearchPage/RatingLevel/RatingLevel";
import Recommended from "@/Components/SearchPage/RecommendedForYou/Recommended";

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
