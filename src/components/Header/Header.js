import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavDropDown from './NavDropDown/NavDropDown';
import Search from './Search/Search';
import SubmitSearch from './SubmitSearch/SubmitSearch';
import './Header.css';

// eslint-disable-next-line object-curly-newline
const Header = ({ searchRedditValue, subRedditValue, onClick, onSubmit }) => {
  const [search, setSearch] = useState('');
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    if (searchRedditValue) setSearch('');
  }, [searchRedditValue]);

  return (
    <header className="main-container">
      <NavDropDown
        onClick={onClick}
        subRedditValue={subRedditValue}
        searchRedditValue={searchRedditValue}
      />
      <Search onChange={handleSearch} />
      <SubmitSearch onClick={onSubmit} search={search} />
    </header>
  );
};

Header.propTypes = {
  searchRedditValue: PropTypes.string,
  subRedditValue: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

Header.defaultProps = {
  searchRedditValue: '',
  subRedditValue: '',
  onClick: () => {},
  onSubmit: () => {},
};

export default Header;
