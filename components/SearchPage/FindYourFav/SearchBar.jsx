"use client";
import { useState } from "react";
import Button from "@/components/UI/Button";
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
      {/* <Button onClick={handleSearchClick}>SEARCH</Button> */}
      <button
  onClick={handleSearchClick}
  style={{
    backgroundColor: "#2e8dff",
    color: "#fbfbfb",
    fontSize: "1.6rem",
    padding: "0.5rem 2rem",
    borderRadius: "1.2rem",
    fontWeight: 600
  }}
>
  SEARCH
</button>

    </section>
  );
};

export default SearchBar;
