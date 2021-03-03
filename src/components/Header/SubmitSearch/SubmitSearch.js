import React from "react";
import "./SubmitSearch.css";

const SubmitSearch = (props) => {
  if (props.searchValue) {
    return (
      <div className="submitSearch">
        <button value={props.searchValue} onClick={props.onClick}>
          Search
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default SubmitSearch;
