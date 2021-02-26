import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <ul className="filter">
      <li>
        <a href="#">Best</a>
      </li>
      <li>
        <a href="#">Hot</a>
      </li>
      <li>
        <a href="#">New</a>
      </li>
      <li>
        <a href="#">Top</a>
      </li>
    </ul>
  );
};

export default Filter;
