import React, { useEffect, useState } from "react";
import NavDropDown from "./NavDropDown/NavDropDown";
import Search from "./Search/Search";
import SubmitSearch from "./SubmitSearch/SubmitSearch";
import "./Header.css";

const Header = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };

  useEffect(() => {
    if (props.searchReddit) setSearchValue("");
  }, [props.searchReddit]);

  return (
    <header className="main-container">
      <NavDropDown
        onChange={props.onChange}
        subReddit={props.subReddit}
        searchReddit={props.searchReddit}
      />
      <Search onChange={handleSearch} />
      <SubmitSearch onClick={props.onClick} searchValue={searchValue} />
    </header>
  );
};

export default Header;
