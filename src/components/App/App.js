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
    let itemValue = target.value;

    // if user clicks from cards, remove r/ from start
    const regex = /(?<=\/).+/;
    if (itemValue.match(regex)) itemValue = itemValue.match(regex)[0];

    setSearchReddit("");
    // reset pagination
    setPageNum(0);
    setSubReddit(itemValue);
  };

  const handleFilter = ({ target }) => {
    // reset pagination
    setPageNum(0);
    const filterQuery = target.name;
    setFilterReddit(filterQuery.toLowerCase());
  };

  const handleSearch = ({ target }) => {
    // reset pagination
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
        query="(min-width: 1300px)"
        render={() => <Aside className="aside" onChange={handleSubreddit} />}
      />
      <Filter
        className="filter"
        handleClick={handleFilter}
        filterReddit={filterReddit}
      />
      <main>
        <Cards
          onChange={handleSubreddit}
          // have an onChange function which runs when user clicks the subreddit
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
