import React from "react";
import { useFetchSubreddits } from "../../../Actions";
import Icon from "./Icon";
import Subreddit from "./Subreddit";
import "./TrendingSub.css";

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

const TrendingSub = () => {
  const { names, icons } = useFetchSubreddits(
    "https://www.reddit.com/r/trendingsubreddits.json"
  );

  const subredditData = organiseData(names, icons);

  return (
    <article>
      <div className="articles-header">
        <h4>Todays trending subreddits</h4>
      </div>
      {subredditData.map((data, idx) => (
        <section key={idx}>
          <Icon srcIcon={data[0]} key={data[0]} />
          <Subreddit subredditName={data[1]} key={data[1]} />
        </section>
      ))}
    </article>
  );
};

export default TrendingSub;
