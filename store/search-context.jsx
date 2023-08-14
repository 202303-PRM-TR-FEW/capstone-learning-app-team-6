import React from "react";
const SearchContext = React.createContext({
  filteredCoursesIds: [],
  setFilteredCoursesIds: (array) => {
    console.log("context");
    console.log(array);
  },
});

export default SearchContext;

// import React, { createContext, useState } from "react";

// const SearchContext = createContext({
//   filteredCoursesIds: [],
//   setFilteredCoursesIds: (array) => {
//     console.log(array);
//   },
// });

// export const SearchContextProvider = ({ children }) => {
//   const [filteredCoursesIds, setFilteredCoursesIds] = useState([]);

//   const contextValue = {
//     filteredCoursesIds,
//     setFilteredCoursesIds,
//   };

//   return (
//     <SearchContext.Provider value={contextValue}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export default SearchContext;
