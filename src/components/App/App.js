import React, { useState } from "react";
import Media from "react-media";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import Aside from "../Aside/Aside";
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
      <Header
        onChange={handleSubreddit}
        onClick={handleSearch}
        subReddit={subReddit}
        searchReddit={searchReddit}
      />
      <Media
        query="(min-width: 1500px)"
        render={() => <Aside className="aside" />}
      />
      <Filter
        className="filter"
        handleClick={handleFilter}
        filterReddit={filterReddit}
      />
      <main>
        <Cards
          query={{
            filterReddit: filterReddit,
            subReddit: subReddit,
            searchReddit: searchReddit,
            pageNum: pageNum,
          }}
        />

        {!searchReddit && (
          <div className="pager">
            <button
              onClick={() => setPageNum((prevPageNum) => prevPageNum - 1)}
            >
              Previous
            </button>
            <p>{pageNum}</p>
            <button
              onClick={() => setPageNum((prevPageNum) => prevPageNum + 1)}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
