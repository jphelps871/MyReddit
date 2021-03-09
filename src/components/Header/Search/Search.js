import React from 'react';
import PropTypes from 'prop-types';
import searchLogo from '../../../assets/icons/search.svg';
import './Search.css';

const Search = ({ onChange }) => (
  <div className="search-bar">
    <input onChange={onChange} type="text" placeholder="Search Reddit" />
    <button type="button" aria-label="submit">
      <img src={searchLogo} alt="" />
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
