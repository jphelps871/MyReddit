import React from "react";

const Subreddit = (props) => {
  return (
    <button
      onClick={props.onClick}
      value={props.subredditName}
      className="anchor-subreddit"
    >
      {props.subredditName}
    </button>
  );
};
export default Subreddit;
