import React from "react";
const SearchContext = React.createContext({
  filteredCoursesIds: [],
  setFilteredCoursesIds: () => {},
});

export default SearchContext;
