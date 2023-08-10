import TopSearches from "@/components/SearchPage/TopSearches/TopSearches";
import CategoriesSearchPage from "@/components/SearchPage/CategoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/components/SearchPage/FindYourFav/SearchBar";
import RatingLevel from "@/components/SearchPage/RatingLevel/RatingLevel";
import Recommended from "@/components/SearchPage/RecommendedForYou/Recommended";

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
