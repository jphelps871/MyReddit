import React from 'react';
import PropTypes from 'prop-types';
import './SubmitSearch.css';

const SubmitSearch = ({ searchValue, onClick }) => {
  // show button if props.searchvalue is true, else hide it.
  // when user has clicked header, reset search

  if (searchValue) {
    return (
      <div className="submitSearch">
        <button type="button" value={searchValue} onClick={onClick}>
          Search
        </button>
      </div>
    );
  }

  return null;
};

SubmitSearch.propTypes = {
  searchValue: PropTypes.string,
  onClick: PropTypes.func,
};

SubmitSearch.defaultProps = {
  searchValue: '',
  onClick: () => {},
};

export default SubmitSearch;
