import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
const axios = require("axios");

const Cards = (props) => {
  const [reddit, setReddit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([""]);

  console.log(page);
  console.log(props.query.pages);

  useEffect(() => {
    const getData = async (input) => {
      if (!input.searchReddit) {
        const response = await axios.get(
          `https://www.reddit.com/r/${input.subReddit}/${
            input.filterReddit
          }.json?after=${page[input.pages]}`
        );
        setReddit(response.data.data.children);
        setLoading(true);
        //  page.length < props.query.pages + 2

        if (!page.includes(response.data.data.after)) {
          if (page.length < props.query.pages + 2) {
            setPage((prevArray) => [...prevArray, response.data.data.after]);
          }

          if (props.query.pages === 0) setPage(["", response.data.data.after]);
        }
      } else {
        const response = await axios.get(
          `http://www.reddit.com/search.json?q=${input.searchReddit}&sort=${input.filterReddit}`
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
