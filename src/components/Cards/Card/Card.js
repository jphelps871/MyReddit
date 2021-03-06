import React from "react";
import "./Card.css";

const checkImage = (image) => {
  const regex = /(.jpg|.png|.gif)$/;
  return regex.test(image) ? true : "";
};

const checkVideo = (video) => {
  if (video) {
    return video;
  } else {
    return "";
  }
};

const editLink = (link) => {
  const regex = /(?<=\.).+(?=\.com|\.co)/gi;
  if (link.match(regex)) {
    return link.match(regex);
  } else {
    return "Link";
  }
};

const Card = (props) => {
  const { subreddit, title, comments, upVotes } = props;
  const { url, video } = props.media;

  return (
    <article className="card">
      <div className="info">
        <button
          onClick={props.onClick}
          value={subreddit}
          className="subreddit anchor-subreddit"
        >
          {subreddit}
        </button>
      </div>
      <h3 classame="title">{title}</h3>
      <div className="media">
        {checkImage(url) ? (
          <img src={url} alt="reddit img" />
        ) : checkVideo(video()) ? (
          <video controls>
            <source src={video()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <a href={props.media.url} target="_blank" rel="noreferrer nofollow">
            See more at {editLink(url)}
          </a>
        )}
      </div>
      <div className="metadata">
        <p className="comments">{comments}</p>
        <p className="votes">{upVotes}</p>
      </div>
    </article>
  );
};

export default Card;
