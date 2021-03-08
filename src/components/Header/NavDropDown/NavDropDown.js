import React from 'react';
import PropTypes from 'prop-types';
import './NavDropDown.css';

const NavDropDown = ({ subReddit, searchReddit, onChange }) => {
  const active = {
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <div className="drop-down">
      <button
        type="button"
        style={subReddit === 'popular' && !searchReddit ? active : null}
        onClick={onChange}
        value="popular"
        href="#"
      >
        Popular
      </button>
      <button
        type="button"
        style={subReddit === 'all' && !searchReddit ? active : null}
        onClick={onChange}
        value="all"
        href="#"
      >
        All
      </button>
      {subReddit !== 'popular' && subReddit !== 'all' ? (
        <span style={subReddit ? active : null}>{subReddit}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

NavDropDown.propTypes = {
  subReddit: PropTypes.string.isRequired,
  searchReddit: PropTypes.string,
  onChange: PropTypes.func,
};

NavDropDown.defaultProps = {
  searchReddit: '',
  onChange: () => {},
};

export default NavDropDown;
