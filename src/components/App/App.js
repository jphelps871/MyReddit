/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Media from 'react-media';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards';
import Aside from '../Aside/Aside';
import Pager from '../Pager/Pager';
import './App.css';

const App = () => {
  const [subReddit, setSubReddit] = useState('popular');
  const [filterReddit, setFilterReddit] = useState('best');
  const [searchReddit, setSearchReddit] = useState('');
  const [pageNum, setPageNum] = useState(0);

  const handleCardsSubreddit = ({ target }) => {
    const cardValue = target.value;
    const [itemValue] = cardValue.match(/(?<=\/).+/);

    setSearchReddit('');
    // reset pagination
    setPageNum(0);
    setSubReddit(itemValue);
  };

  const handleHeaderSubreddit = ({ target }) => {
    setSearchReddit('');
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

  const handlePageNumbers = ({ target }) => {
    if (target.value === 'next') {
      setPageNum((prevPageNum) => prevPageNum + 1);
    }
    setPageNum((prevPageNum) => prevPageNum - 1);
  };

  return (
    <div className="App">
      <Header
        onChange={handleHeaderSubreddit}
        onClick={handleSearch}
        subReddit={subReddit}
        searchReddit={searchReddit}
      />
      <Media
        query="(min-width: 1200px)"
        render={() => (
          <Aside className="aside" onChange={handleCardsSubreddit} />
        )}
      />
      <Filter
        className="filter"
        handleClick={handleFilter}
        filterReddit={filterReddit}
      />
      <main>
        <Cards
          onChange={handleCardsSubreddit}
          query={{
            filterReddit,
            subReddit,
            searchReddit,
            pageNum,
          }}
        />

        <Pager
          onClick={handlePageNumbers}
          searchReddit={searchReddit}
          pageNum={pageNum}
        />
      </main>
    </div>
  );
};

export default App;
