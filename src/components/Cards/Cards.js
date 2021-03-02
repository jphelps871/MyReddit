import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
const axios = require("axios");

const Cards = (props) => {
  const [reddit, setReddit] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async (input) => {
      const response = await axios.get(
        `https://www.reddit.com/r/${input.searchReddit}/${input.findName}.json`
      );
      setReddit(response.data.data.children);
      console.log(response.data.data.after);
      setLoading(true);
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
