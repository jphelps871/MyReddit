import React from "react";
import AsideItem from "./AsideItem/AsideItem";
import { useFetchSubreddits } from "../../Actions";
import { staticSubreddits } from "../../MyData";
import trendingHeaderImage from "../../assets/icons/aside-images/trending-header.png";
import myRedditHeaderImage from "../../assets/icons/aside-images/my-reddit-header.jpg";
import "./Aside.css";

const Aside = (props) => {
  const { names, icons } = useFetchSubreddits(
    "https://www.reddit.com/r/trendingsubreddits.json"
  );

  const { staticNames, staticIcons } = staticSubreddits();

  return (
    <aside>
      <AsideItem
        heading={"Todays trending subreddits"}
        image={trendingHeaderImage}
        onClick={props.onChange}
        names={names}
        icons={icons}
      />
      <AsideItem
        heading={"My Reddits"}
        image={myRedditHeaderImage}
        onClick={props.onChange}
        names={staticNames}
        icons={staticIcons}
      />
    </aside>
  );
};

export default Aside;
