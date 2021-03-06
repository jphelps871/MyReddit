import React from "react";
import "./SubmitSearch.css";

const SubmitSearch = (props) => {
  // show button if props.searchvalue is true, else hide it.
  // when user has clicked header, reset search

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
