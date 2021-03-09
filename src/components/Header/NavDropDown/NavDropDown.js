import React from 'react';
import PropTypes from 'prop-types';
import './NavDropDown.css';

const NavDropDown = ({ subRedditValue, searchRedditValue, onClick }) => {
  const active = {
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <div className="drop-down">
      <button
        type="button"
        style={
          subRedditValue === 'popular' && !searchRedditValue ? active : null
        }
        onClick={onClick}
        value="popular"
      >
        Popular
      </button>
      <button
        type="button"
        style={subRedditValue === 'all' && !searchRedditValue ? active : null}
        onClick={onClick}
        value="all"
      >
        All
      </button>
      {subRedditValue !== 'popular' && subRedditValue !== 'all' ? (
        <span style={subRedditValue ? active : null}>{subRedditValue}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

NavDropDown.propTypes = {
  subRedditValue: PropTypes.string.isRequired,
  searchRedditValue: PropTypes.string,
  onClick: PropTypes.func,
};

NavDropDown.defaultProps = {
  searchRedditValue: '',
  onClick: () => {},
};

export default NavDropDown;
