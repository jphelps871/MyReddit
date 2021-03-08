/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const displayImage = (imageSource) => {
  const regex = /(.jpg|.png|.gif)$/;
  if (regex.test(imageSource)) {
    return <img src={imageSource} alt="reddit img" />;
  }
  return <div />;
};

const displayVideo = (videoSource) => {
  if (videoSource /* not null */) {
    return (
      <video controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return <div />;
};

const displayLink = (linkSource) => {
  const regex = /(?<=\.).+(?=\.com|\.co)/gi;
  if (linkSource.match(regex)) {
    return (
      <a href={linkSource} target="_blank" rel="noreferrer nofollow">
        {`See more at ${linkSource.match(regex)}`}
      </a>
    );
  }
  return <div />;
};

// eslint-disable-next-line object-curly-newline
const Card = ({ subreddit, title, comments, upVotes, onClick, url, video }) => (
  <article className="card">
    <div className="info">
      <button
        type="button"
        onClick={onClick}
        value={subreddit}
        className="subreddit anchor-subreddit"
      >
        {subreddit}
      </button>
    </div>
    <h3 classame="title">{title}</h3>
    <div className="media">
      {displayImage(url)}
      {displayVideo(video)}
      {displayLink(url)}
    </div>
    <div className="metadata">
      <p className="comments">{comments}</p>
      <p className="votes">{upVotes}</p>
    </div>
  </article>
);

Card.propTypes = {
  subreddit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  upVotes: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  video: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  video: '',
  onClick: () => {},
};

export default Card;
