import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import "./App.css";

const App = (props) => {
  const [searchReddit, setSearchRedit] = useState("popular");
  const [findName, setFindName] = useState("best");

  const searchFor = ({ target }) => {
    setSearchRedit(target.value);
  };

  const handleClick = ({ target }) => {
    const filterQuery = target.name;
    setFindName(filterQuery.toLowerCase());
  };

  return (
    <div className="App">
      <Header onChange={searchFor} />
      <Filter handleClick={handleClick} findName={findName} />
      <main>
        <Cards searchReddit={searchReddit} findName={findName} />
      </main>
    </div>
  );
};

export default App;
