"use client";
import TopSearches from "@/Components/SearchPage/TopSearches/TopSearches";
import CategoriesSearchPage from "@/Components/SearchPage/CategoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/Components/SearchPage/FindYourFav/SearchBar";
import RatingLevel from "@/Components/SearchPage/RatingLevel/RatingLevel";
import Recommended from "@/Components/SearchPage/RecommendedForYou/Recommended";

import { useState, useEffect } from "react";
import { courses } from "@/app/page";

const Search = (props) => {
  let checkedArray = [];
  let matchingCoursesIds = [];
  const [filter, setFilter] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Update filter state when searchInput changes
  const handleInputChange = (searchInput) => {
    setFilter(searchInput);
  };

  const handleLevelsCheckedArray = (categoriesCheckedArray) => {
    courses.forEach((course) => {
      if (categoriesCheckedArray.includes(course.level.toLowerCase())) {
        matchingCoursesIds.push(course.id);
      }
    });
    console.log(matchingCoursesIds);
    // Update the checkedArray with the matching courses' IDs
    checkedArray =
      ([...checkedArray],
      courses.filter((course) => matchingCoursesIds.includes(course.id)));
    console.log(checkedArray);
    setFilteredCourses([...checkedArray]);
    console.log(filteredCourses);
  };
  const handleCategoriesCheckedArray = (categoriesCheckedArray) => {
    courses.forEach((course) => {
      if (categoriesCheckedArray.includes(course.category.toLowerCase())) {
        matchingCoursesIds.push(course.id);
      }
    });
    console.log(matchingCoursesIds);
    // Update the checkedArray with the matching courses' IDs
    // checkedArray = courses.filter((course) =>
    checkedArray =
      ([...checkedArray],
      courses.filter((course) => matchingCoursesIds.includes(course.id)));
    console.log(checkedArray);
    setFilteredCourses([...checkedArray]);
    console.log(filteredCourses);
  };
  useEffect(() => {
    const filteredCourses = courses.filter(
      (course) =>
        course.category.toLowerCase().includes(filter.toLowerCase()) ||
        course.name.toLowerCase().includes(filter.toLowerCase()) ||
        course.description.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  }, [filter]);

  return (
    <main className="home-container">
      <SearchBar onChange={handleInputChange} />
      <TopSearches />
      <CategoriesSearchPage
        categoriesCheckedArray={handleCategoriesCheckedArray}
      />
      <RatingLevel levelsCheckedArray={handleLevelsCheckedArray} />
      <Recommended filteredCoursesProp={filteredCourses} />
    </main>
  );
};

export default Search;
