import React from "react";
import searchLogo from "../../../assets/icons/search.svg";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="search-bar">
      <input
        onChange={props.onChange}
        type="text"
        aria-label="search"
        placeholder="Search Reddit"
      />
      <button>
        <img src={searchLogo} alt="Logo" aria-label="submit search" />
      </button>
    </div>
  );
};

export default Search;
