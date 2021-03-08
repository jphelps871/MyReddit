import React from 'react';
import PropTypes from 'prop-types';
import searchLogo from '../../../assets/icons/search.svg';
import './Search.css';

const Search = ({ onChange }) => (
  <div className="search-bar">
    <input
      onChange={onChange}
      type="text"
      aria-label="search"
      placeholder="Search Reddit"
    />
    <button type="button">
      <img src={searchLogo} alt="Logo" aria-label="submit search" />
    </button>
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};

export default Search;
