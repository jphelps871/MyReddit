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
  return (
    <article className="card">
      <div className="info">
        <p className="subreddit">{props.subreddit}</p>
      </div>
      <h3 classame="title">{props.title}</h3>
      <div className="media">
        {checkImage(props.media.image) ? (
          <img src={props.media.image} alt="reddit img" />
        ) : checkVideo(props.media.video()) ? (
          <video width="320" height="240" controls>
            <source src={props.media.video()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <a href={props.media.image} target="_blank">
            See more at {editLink(props.media.image)}
          </a>
        )}
      </div>
      <div className="metadata">
        <p className="comments">{props.comments}</p>
        <p className="votes">{props.upVotes}</p>
      </div>
    </article>
  );
};

export default Card;
