import React from 'react';
import PropTypes from 'prop-types';

import AsideItem from './AsideItem/AsideItem';
import { useFetchSubreddits } from '../../Actions';
import staticSubreddits from '../../MyData';
import trendingHeaderImage from '../../assets/icons/aside-images/trending-header.png';
import myRedditHeaderImage from '../../assets/icons/aside-images/my-reddit-header.jpg';
import './Aside.css';

const Aside = ({ onChange }) => {
  const { names, icons } = useFetchSubreddits(
    'https://www.reddit.com/r/trendingsubreddits.json',
  );

  const { staticNames, staticIcons } = staticSubreddits();

  const trendingHeaderTitle = 'Todays trending subreddits';
  const myRedditHeaderTitle = 'My Reddits';

  return (
    <aside>
      <AsideItem
        heading={trendingHeaderTitle}
        image={trendingHeaderImage}
        onClick={onChange}
        names={names}
        icons={icons}
      />
      <AsideItem
        heading={myRedditHeaderTitle}
        image={myRedditHeaderImage}
        onClick={onChange}
        names={staticNames}
        icons={staticIcons}
      />
    </aside>
  );
};

Aside.propTypes = {
  onChange: PropTypes.func,
};

Aside.defaultProps = {
  onChange: () => {},
};
export default Aside;
