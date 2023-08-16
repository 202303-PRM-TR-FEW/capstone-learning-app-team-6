"use client";
import TopSearches from "@/Components/SearchPage/TopSearches/TopSearches";
import CategoriesSearchPage from "@/Components/SearchPage/CategoriesSearchPage/categoriesSearchPage";
import SearchBar from "@/Components/SearchPage/FindYourFav/SearchBar";
import RatingLevel from "@/Components/SearchPage/RatingLevel/RatingLevel";
import Recommended from "@/Components/SearchPage/RecommendedForYou/Recommended";

import SearchContext from "@/store/search-context";

import { useState, useEffect } from "react";
import { courses } from "@/app/page";

const Search = () => {
  let checkedArray = [];
  let matchingCoursesIds = [];
  let displayedCourses = [];
  
  const [filter, setFilter] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredCoursesIds, setFilteredCoursesIds] = useState([]);
  let uniqueCoursesIds = [...new Set(filteredCoursesIds)];

  // Update filter state when searchInput changes
  const handleInputChange = (searchInput) => {
    setFilter(searchInput);
  };

  /*
  RATING HANDLER
*/
  const handleRating = (rateValue) => {
    console.log(rateValue);
    const filteredRateCourses = courses.filter(
      (course) => course.rate <= rateValue
    );
    console.log(filteredRateCourses);
    setFilteredCourses(filteredRateCourses);
    // setFilteredCoursesIds((prev) => [...prev, course.id]);
  };

  /* 
  CHECKED ARRAY HANDLER
  */
  const handleCheckedArray = (categoriesCheckedArray, targetKey) => {
    const arrayToBeUsed =
      displayedCourses.length === 0 ? courses : displayedCourses;
    arrayToBeUsed.forEach((course) => {
      if (categoriesCheckedArray.includes(course[targetKey].toLowerCase())) {
        matchingCoursesIds.push(course.id);
        setFilteredCoursesIds((prev) => [...prev, course.id]);
      }
    });
    console.log("filteredCoursesIds");
    console.log(filteredCoursesIds);
    console.log("uniqueCoursesIds");
    console.log(uniqueCoursesIds);
    // console.log(matchingCoursesIds);
    checkedArray =
      ([...checkedArray],
      arrayToBeUsed.filter((course) => matchingCoursesIds.includes(course.id)));
    // arrayToBeUsed.filter((course) =>
    //   new Set(filteredCoursesIds).has(course.id)
    // ));
    setFilteredCourses([...checkedArray]);
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
      <SearchContext.Provider
        value={{ filteredCoursesIds: [filteredCoursesIds] }}
      >
        <SearchBar onChange={handleInputChange} />
        <TopSearches onClick={handleInputChange} />
        <CategoriesSearchPage categoriesCheckedArray={handleCheckedArray} />
        <RatingLevel
          levelsCheckedArray={handleCheckedArray}
          rateValueProp={handleRating}
        />
        <Recommended filteredCoursesProp={filteredCourses} />
      </SearchContext.Provider>
    </main>
  );
};

export default Search;
