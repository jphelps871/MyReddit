import React from 'react';
import PropTypes from 'prop-types';
import './ErrorStatus.css';

const ErrorStatus = ({ error }) => {
  if (error) {
    return <h3 className="error">{error}</h3>;
  }
  return <div />;
};

ErrorStatus.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorStatus;
