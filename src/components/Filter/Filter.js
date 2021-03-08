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

const Filter = ({ handleClick, filterReddit }) => (
  <ul className="filter">
    <List
      onChange={handleClick}
      icon={rocketIcon}
      toggleStyle={filterReddit === 'best'}
    >
      Best
    </List>
    <List
      onChange={handleClick}
      icon={flameIcon}
      toggleStyle={filterReddit === 'hot'}
    >
      Hot
    </List>
    <List
      onChange={handleClick}
      icon={newIcon}
      toggleStyle={filterReddit === 'new'}
    >
      New
    </List>
    <List
      onChange={handleClick}
      icon={topIcon}
      toggleStyle={filterReddit === 'top'}
    >
      Top
    </List>

    <Media
      query="(min-width: 760px)"
      render={() => (
        <List
          onChange={handleClick}
          icon={risingIcon}
          toggleStyle={filterReddit === 'rising'}
        >
          Rising
        </List>
      )}
    />
  </ul>
);

Filter.propTypes = {
  handleClick: PropTypes.func,
  filterReddit: PropTypes.string,
};

Filter.defaultProps = {
  handleClick: () => {},
  filterReddit: '',
};

export default Filter;
