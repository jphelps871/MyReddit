import React from 'react';
import PropTypes from 'prop-types';
import AsideItem from './AsideItem/AsideItem';
import { useFetchSubreddits } from '../../Actions';
import staticSubreddits from '../../MyData';
import trendingHeaderImage from '../../assets/icons/aside-images/trending-header.png';
import myRedditHeaderImage from '../../assets/icons/aside-images/my-reddit-header.jpg';
import './Aside.css';

const Aside = ({ onClick }) => {
  const { names, icons } = useFetchSubreddits(
    'https://www.reddit.com/r/trendingsubreddits.json',
  );

  const { staticNames, staticIcons } = staticSubreddits();

  const trendingHeaderTitle = 'Todays trending subreddits';
  const myRedditHeaderTitle = 'My Reddits';

  return (
    <aside>
      <AsideItem
        onClick={onClick}
        heading={trendingHeaderTitle}
        image={trendingHeaderImage}
        names={names}
        icons={icons}
      />
      <AsideItem
        onClick={onClick}
        heading={myRedditHeaderTitle}
        image={myRedditHeaderImage}
        names={staticNames}
        icons={staticIcons}
      />
    </aside>
  );
};

Aside.propTypes = {
  onClick: PropTypes.func,
};

Aside.defaultProps = {
  onClick: () => {},
};
export default Aside;
