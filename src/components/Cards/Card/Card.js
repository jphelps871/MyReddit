import React from "react";

const Card = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <p>{props.subreddit}</p>
      <h3>{props.title}</h3>
      <img
        style={{ height: "50%", width: "50%" }}
        src={props.image}
        alt="reddit img"
      />
      <p>{props.comments}</p>
      <p>{props.upVotes}</p>
    </div>
  );
};

export default Card;
