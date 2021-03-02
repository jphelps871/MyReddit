import React from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import Search from "./Search/Search";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="main-container">
      <NavDropDown onChange={props.onChange} />
      <Search />
    </header>
  );
};

export default Header;
