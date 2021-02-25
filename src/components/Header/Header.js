import React from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import Search from "./Search/Search";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-container">
      <NavDropDown />
      <Search />
    </header>
  );
};

export default Header;
