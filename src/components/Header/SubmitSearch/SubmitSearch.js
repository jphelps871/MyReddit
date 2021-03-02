import React from "react";

const SubmitSearch = (props) => {
  if (props.searchValue) {
    return (
      <div>
        <button value={props.searchValue} onClick={props.onClick}>
          Add
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default SubmitSearch;
