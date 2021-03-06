import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

const Pager = ({ onClick, searchRedditValue, pageNum }) => {
  if (searchRedditValue) return <div />;

  return (
    <div className="pager">
      <button
        aria-label="Previous page"
        value="previous"
        type="button"
        onClick={onClick}
      >
        Previous
      </button>
      <p>{pageNum}</p>
      <button
        aria-label="next page"
        value="next"
        type="button"
        onClick={onClick}
      >
        Next
      </button>
    </div>
  );
};

Pager.propTypes = {
  onClick: PropTypes.func,
  searchRedditValue: PropTypes.string,
  pageNum: PropTypes.number.isRequired,
};

Pager.defaultProps = {
  onClick: () => {},
  searchRedditValue: '',
};

export default Pager;
