import React from 'react';
import PropTypes from 'prop-types';
import Icon from './AsideBody/Icon';
import Subreddit from './AsideBody/Subreddit';
import './AsideItem.css';

const organiseData = (text, img) => {
  const allSubreddits = [];

  for (let i = 0; i < text.length; i += 1) {
    const subreddit = [];
    subreddit.push(img[i]);
    subreddit.push(text[i]);
    allSubreddits.push(subreddit);
  }

  return allSubreddits;
};

// eslint-disable-next-line object-curly-newline
const AsideItem = ({ names, icons, image, heading, onClick }) => {
  const subredditData = organiseData(names, icons);

  return (
    <article className="aside-item-container">
      <div
        style={{
          backgroundImage: `linear-gradient(
            rgba(217, 217, 217, 0.6),
            rgba(217, 217, 217, 0.6)
            ), url("${image}")`,
        }}
        className="aside-header"
      >
        <h4>{heading}</h4>
      </div>
      {subredditData.map((data, idx) => (
        <section className="subreddit-container" key={idx.toString()}>
          <Icon srcIcon={data[0]} key={data[0]} />
          <Subreddit onClick={onClick} subredditName={data[1]} key={data[1]} />
        </section>
      ))}
    </article>
  );
};

AsideItem.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AsideItem;
