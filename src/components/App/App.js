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
      <h1 className="title">A James Phelps Design For Reddit</h1>
      <Header
        onClick={handleHeaderSubreddit}
        onSubmit={handleSearch}
        subRedditValue={subReddit}
        searchRedditValue={searchReddit}
      />
      <Media
        query="(min-width: 1200px)"
        render={() => (
          <Aside className="aside" onClick={handleCardsSubreddit} />
        )}
      />
      <Filter
        className="filter"
        onClick={handleFilter}
        filterRedditValue={filterReddit}
      />
      <main>
        <Cards
          onClick={handleCardsSubreddit}
          query={{
            filterReddit,
            subReddit,
            searchReddit,
            pageNum,
          }}
        />

        <Pager
          onClick={handlePageNumbers}
          searchRedditValue={searchReddit}
          pageNum={pageNum}
        />
      </main>
    </div>
  );
};

export default App;
