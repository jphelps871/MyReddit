import React, { useState } from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import Search from "./Search/Search";
import SubmitSearch from "./SubmitSearch/SubmitSearch";
import "./Header.css";

const Header = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <header className="main-container">
      <NavDropDown onChange={props.onChange} subReddit={props.subReddit} />
      <Search onChange={handleSearch} />
      <SubmitSearch searchValue={searchValue} onClick={props.onClick} />
    </header>
  );
};

export default Header;
