"use client";
import TopSearches from "@/Components/SearchPage/TopSearches/TopSearches";
import CategoriesSearchPage from "@/Components/SearchPage/CategoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/Components/SearchPage/FindYourFav/SearchBar";
import RatingLevel from "@/Components/SearchPage/RatingLevel/RatingLevel";
import Recommended from "@/Components/SearchPage/RecommendedForYou/Recommended";

import { useState } from "react";
import { courses } from "@/app/page";

const Search = (props) => {
  let FilteredCourses = [];
  const [filter, setFilter] = useState("photo");
  // Update filter state when searchInput changes
  const handleInputChange = (searchInput) => {
    setFilter(searchInput); // Update filter state
  };

  FilteredCourses = courses.filter(
    (course) =>
      course.category.toLowerCase().includes(filter.toLowerCase()) ||
      course.name.toLowerCase().includes(filter.toLowerCase()) ||
      course.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className="home-container">
      <SearchBar onChange={handleInputChange} />
      <TopSearches />
      <CategoriesSearchPage />
      <RatingLevel />
      <Recommended filteredCourses={FilteredCourses} />
    </main>
  );
};

export default Search;
