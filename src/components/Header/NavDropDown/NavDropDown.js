import React from "react";
import "./NavDropDown.css";

const NavDropDown = (props) => {
  return (
    <div className="drop-down">
      <button onClick={props.onChange} value="popular" href="#">
        Popular
      </button>
      <button onClick={props.onChange} value="all" href="#">
        All
      </button>
    </div>
  );
};

export default NavDropDown;
