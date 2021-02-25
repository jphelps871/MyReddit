import React from "react";
import searchLogo from "../../../assets/icons/search.svg";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" aria-label="search" placeholder="Search Reddit" />
      <button>
        <img src={searchLogo} alt="Logo" aria-label="submit search" />
      </button>
    </div>
  );
};

export default Search;
