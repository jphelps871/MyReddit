import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
const axios = require("axios");

const Cards = (props) => {
  const [reddit, setReddit] = useState(null);
  useEffect(() => {
    const getData = async (input) => {
      const response = await axios.get(
        `https://www.reddit.com/r/${input}.json`
      );
      setReddit(response.data.data.children);
    };
    getData(props.searchReddit);
  }, [props.searchReddit]);

  if (reddit) {
    return (
      <div className="cards">
        {reddit.map((item, idx) => (
          <div key={idx.toString()} className="card">
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
