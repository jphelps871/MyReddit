import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const Li = ({ toggleStyle, onClick, children, icon }) => {
  let active;
  if (toggleStyle) {
    active = {
      color: 'white',
      backgroundColor: '#f74302',
      boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.3)',
      backgroundImage: `url(${icon})`,
      backgroundPosition: '2px center',
      padding: '12px 12px 12px 26px',
    };
  } else {
    active = {
      // set color to default
      color: '',
    };
  }

  return (
    <li>
      <button type="button" style={active} onClick={onClick} name={children}>
        {children}
      </button>
    </li>
  );
};

Li.propTypes = {
  toggleStyle: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Li.defaultProps = {
  onClick: () => {},
};

export default Li;
