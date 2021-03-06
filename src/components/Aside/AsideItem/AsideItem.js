import React from "react";
import Icon from "./AsideBody/Icon";
import Subreddit from "./AsideBody/Subreddit";
import "./AsideItem.css";

const organiseData = (text, img) => {
  const allSubreddits = [];

  for (let i = 0; i < text.length; i++) {
    let subreddit = [];
    subreddit.push(img[i]);
    subreddit.push(text[i]);
    allSubreddits.push(subreddit);
  }

  return allSubreddits;
};

const TrendingSub = (props) => {
  const subredditData = organiseData(props.names, props.icons);

  return (
    <article className="aside-item-container">
      <div
        style={{
          backgroundImage: `linear-gradient(
            rgba(217, 217, 217, 0.6),
            rgba(217, 217, 217, 0.6)
            ), url("${props.image}")`,
        }}
        className="aside-header"
      >
        <h4>{props.heading}</h4>
      </div>
      {subredditData.map((data, idx) => (
        <section className="subreddit-container" key={idx}>
          <Icon srcIcon={data[0]} key={data[0]} />
          <Subreddit
            onClick={props.onClick}
            subredditName={data[1]}
            key={data[1]}
          />
        </section>
      ))}
    </article>
  );
};

export default TrendingSub;

// `linear-gradient(rgba(217, 217, 217, 0.7), rgba(217, 217, 217, 0.7)) no-repeat center center / cover, url(${props.image}) no-repeat center center / cover`;
