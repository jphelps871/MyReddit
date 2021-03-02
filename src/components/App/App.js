import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import "./App.css";

const App = () => {
  const [subReddit, setSubReddit] = useState("popular");
  const [filterReddit, setFilterReddit] = useState("best");
  const [searchReddit, setSearchReddit] = useState("");
  const [pages, setPages] = useState(0);

  const handleSubreddit = ({ target }) => {
    setSearchReddit("");
    setPages(0);
    setSubReddit(target.value);
  };

  const handleFilter = ({ target }) => {
    setPages(0);
    const filterQuery = target.name;
    setFilterReddit(filterQuery.toLowerCase());
  };

  const handleSearch = ({ target }) => {
    setPages(0);
    setSearchReddit(target.value);
  };

  return (
    <div className="App">
      <Header onChange={handleSubreddit} onClick={handleSearch} />
      <Filter handleClick={handleFilter} findName={filterReddit} />
      <main>
        <Cards
          query={{
            filterReddit: filterReddit,
            subReddit: subReddit,
            searchReddit: searchReddit,
            pages: pages,
          }}
        />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            width: "20%",
            margin: "auto",
          }}
        >
          <button onClick={() => setPages(pages - 1)}>-</button>
          <p>{pages}</p>
          <button onClick={() => setPages(pages + 1)}>+</button>
        </div>
      </main>
    </div>
  );
};

export default App;
