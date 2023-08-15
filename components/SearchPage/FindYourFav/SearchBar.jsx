"use client";

import { useState } from "react";
import Button from "@/Components/UI/Button";
import styles from "./styles/searchBar.module.css";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    // console.log("Search input:", searchInput);
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    // console.log("Search input:", searchInput);
    props.onChange(searchInput);
  };

  return (
    <section className={styles.section}>
      <h2 className="header-text">Find Your Favorites</h2>
      <input
        type="text"
        placeholder="Search Categories"
        className={styles.input}
        value={searchInput}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick}>SEARCH</Button>
      <button onClick={handleSearchClick}>SEARCH</button>
    </section>
  );
};

export default SearchBar;
