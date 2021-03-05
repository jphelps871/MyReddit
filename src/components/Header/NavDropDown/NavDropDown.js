import React from "react";
import "./NavDropDown.css";

const NavDropDown = (props) => {
  const active = {
    fontWeight: "bold",
    color: "black",
  };

  return (
    <div className="drop-down">
      <button
        style={props.subReddit === "popular" ? active : null}
        onClick={props.onChange}
        value="popular"
        href="#"
      >
        Popular
      </button>
      <button
        style={props.subReddit === "all" ? active : null}
        onClick={props.onChange}
        value="all"
        href="#"
      >
        All
      </button>
    </div>
  );
};

export default NavDropDown;
