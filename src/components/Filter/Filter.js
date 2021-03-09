import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import './Filter.css';
import List from './FilterButtons/List';
import rocketIcon from './icons/shuttleIcon.svg';
import flameIcon from './icons/flameIcon.svg';
import newIcon from './icons/newIcon.svg';
import topIcon from './icons/topIcon.svg';
import risingIcon from './icons/risingIcon.svg';

const Filter = ({ onClick, filterRedditValue }) => (
  <ul className="filter">
    <List
      onClick={onClick}
      icon={rocketIcon}
      toggleStyle={filterRedditValue === 'best'}
    >
      Best
    </List>
    <List
      onClick={onClick}
      icon={flameIcon}
      toggleStyle={filterRedditValue === 'hot'}
    >
      Hot
    </List>
    <List
      onClick={onClick}
      icon={newIcon}
      toggleStyle={filterRedditValue === 'new'}
    >
      New
    </List>
    <List
      onClick={onClick}
      icon={topIcon}
      toggleStyle={filterRedditValue === 'top'}
    >
      Top
    </List>

    <Media
      query="(min-width: 760px)"
      render={() => (
        <List
          onClick={onClick}
          icon={risingIcon}
          toggleStyle={filterRedditValue === 'rising'}
        >
          Rising
        </List>
      )}
    />
  </ul>
);

Filter.propTypes = {
  onClick: PropTypes.func,
  filterRedditValue: PropTypes.string.isRequired,
};

Filter.defaultProps = {
  onClick: () => {},
};

export default Filter;
