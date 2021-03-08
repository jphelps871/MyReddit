import React from 'react';
import PropTypes from 'prop-types';

const Subreddit = ({ onClick, subredditName }) => (
  <button
    type="button"
    onClick={onClick}
    value={subredditName}
    className="anchor-subreddit subreddit-link"
  >
    {subredditName}
  </button>
);

Subreddit.propTypes = {
  onClick: PropTypes.func,
  subredditName: PropTypes.string.isRequired,
};

Subreddit.defaultProps = {
  onClick: () => {},
};

export default Subreddit;
