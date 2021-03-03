import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
const axios = require("axios");

const Cards = (props) => {
  const [reddit, setReddit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([""]);

  const pagination = (pageNum, nextPageId) => {
    if (!pages.includes(nextPageId)) {
      if (pages.length < pageNum + 2) {
        setPages((prevArray) => [...prevArray, nextPageId]);
      }

      if (pageNum === 0) setPages(["", nextPageId]);
    }
  };

  useEffect(() => {
    const getData = async (input) => {
      if (!input.searchReddit) {
        const response = await axios.get(
          `https://www.reddit.com/r/${input.subReddit}/${
            input.filterReddit
          }.json?after=${pages[input.pageNum]}`
        );
        setReddit(response.data.data.children);
        setLoading(true);

        pagination(props.query.pageNum, response.data.data.after);
      } else {
        const response = await axios.get(
          `http://www.reddit.com/search.json?q=${input.searchReddit}&sort=${
            input.filterReddit
          }.json?after=${pages[input.pageNum]}`
        );
        setReddit(response.data.data.children);
        setLoading(true);
      }
    };

    setLoading(false);
    getData(props.query);
  }, [props.query]);

  if (loading) {
    return (
      <div className="cards">
        {reddit.map((item, idx) => (
          <div key={idx.toString()} className="card" style={{ marginTop: 32 }}>
            <Card
              subreddit={item.data.subreddit}
              title={item.data.title}
              image={item.data.url}
              comments={item.data.num_comments}
              upVotes={item.data.ups}
            />
          </div>
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
