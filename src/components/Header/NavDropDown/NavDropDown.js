import React from "react";
import "./NavDropDown.css";

const NavDropDown = () => {
  return (
    <div className="drop-down">
      <button style={{ color: "black" }} href="#">
        Popular
      </button>
      <button href="#">All</button>
    </div>
  );
};

export default NavDropDown;
