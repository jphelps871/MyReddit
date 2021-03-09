import React from 'react';
import PropTypes from 'prop-types';
import './Pager.css';

const Pager = ({ onClick, searchReddit, pageNum }) => {
  if (searchReddit) return <div />;

  return (
    <div className="pager">
      <button value="previous" type="button" onClick={onClick}>
        Previous
      </button>
      <p>{pageNum}</p>
      <button value="next" type="button" onClick={onClick}>
        Next
      </button>
    </div>
  );
};

Pager.propTypes = {
  onClick: PropTypes.func,
  searchReddit: PropTypes.string,
  pageNum: PropTypes.number.isRequired,
};

Pager.defaultProps = {
  onClick: () => {},
  searchReddit: '',
};

export default Pager;
