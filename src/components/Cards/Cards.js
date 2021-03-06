import React, { useState } from "react";
import Card from "./Card/Card";
import { useFetchAll } from "../../Actions";
import "./Cards.css";

const pagination = (pageNum, nextPageId, pages, setPages) => {
  if (pages.includes(nextPageId)) return;

  if (pages.length < pageNum + 2) {
    setPages((prevArray) => [...prevArray, nextPageId]);
  }

  if (pageNum === 0) setPages(["", nextPageId]);
};

const Cards = (props) => {
  const { subReddit, filterReddit, pageNum, searchReddit } = props.query;
  const [pages, setPages] = useState([""]);
  const { reddit, loading, nextPage } = useFetchAll({
    tabs: `https://www.reddit.com/r/${subReddit}/${filterReddit}.json?after=${pages[pageNum]}`,
    search: `http://www.reddit.com/search.json?q=${searchReddit}&sort=${filterReddit}.json?after=${pages[pageNum]}`,
    searchTrue: searchReddit,
  });

  // check page id does not already exist in state. Update to correct page
  pagination(pageNum, nextPage, pages, setPages);
  if (!loading) {
    return (
      <div className="cards">
        {reddit.map((item, idx) => (
          <Card
            key={idx.toString()}
            subreddit={item.data.subreddit_name_prefixed}
            title={item.data.title}
            media={{
              url: item.data.url,
              video: function () {
                try {
                  return item.data.media.reddit_video.fallback_url;
                } catch (err) {
                  return "";
                }
              },
            }}
            comments={item.data.num_comments}
            upVotes={item.data.ups}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
};

export default Cards;
