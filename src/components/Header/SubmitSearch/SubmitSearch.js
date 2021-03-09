import React from 'react';
import PropTypes from 'prop-types';
import './SubmitSearch.css';

const SubmitSearch = ({ search, onClick }) => {
  // show button if props.searchvalue is true, else hide it.
  // when user has clicked header, reset search

  if (search) {
    return (
      <div className="submitSearch">
        <button type="button" value={search} onClick={onClick}>
          Search
        </button>
      </div>
    );
  }

  return null;
};

SubmitSearch.propTypes = {
  search: PropTypes.string,
  onClick: PropTypes.func,
};

SubmitSearch.defaultProps = {
  search: '',
  onClick: () => {},
};

export default SubmitSearch;
