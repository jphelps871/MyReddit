import React, { useState } from "react";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import "./App.css";

const App = () => {
  const [subReddit, setSubReddit] = useState("popular");
  const [filterReddit, setFilterReddit] = useState("best");
  const [searchReddit, setSearchReddit] = useState("");
  const [pageNum, setPageNum] = useState(0);

  const handleSubreddit = ({ target }) => {
    setSearchReddit("");
    setPageNum(0);
    setSubReddit(target.value);
  };

  const handleFilter = ({ target }) => {
    setPageNum(0);
    const filterQuery = target.name;
    setFilterReddit(filterQuery.toLowerCase());
  };

  const handleSearch = ({ target }) => {
    setPageNum(0);
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
            pageNum: pageNum,
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
          <button onClick={() => setPageNum(pageNum - 1)}>-</button>
          <p>{pageNum}</p>
          <button onClick={() => setPageNum(pageNum + 1)}>+</button>
        </div>
      </main>
    </div>
  );
};

export default App;
