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
        style={
          props.subReddit === "popular" && !props.searchReddit ? active : null
        }
        onClick={props.onChange}
        value="popular"
        href="#"
      >
        Popular
      </button>
      <button
        style={props.subReddit === "all" && !props.searchReddit ? active : null}
        onClick={props.onChange}
        value="all"
        href="#"
      >
        All
      </button>
      {props.subReddit !== "popular" && props.subReddit !== "all" ? (
        <span style={props.subReddit ? active : null}>{props.subReddit}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavDropDown;
