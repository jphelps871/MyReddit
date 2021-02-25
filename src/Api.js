import React, { useEffect } from "react";

// bellow are HTTP requests, they require query params and other
// querys to fully function

// /r/[subreddit] => many need a subredit to search popular, new, hot for example

// subreddit to begin with can be popular

const Search = () => {
  // https://www.reddit.com/search.json?=
  // needs a query string
};

const Popular = () => {
  // https://www.reddit.com/r/popular.json
};

const All = () => {
  // https://www.reddit.com/r/all.json
};

const New = () => {
  // https://www.reddit.com/r/all/new.json
};

const Hot = () => {
  // https://www.reddit.com/r/all/hot.json
};

const Top = () => {
  // https://www.reddit.com/r/all/top.json
};

const Rising = () => {
  // https://www.reddit.com/r/all/rising.json
};

const Location = () => {
  // https://www.reddit.com/r/popular.json?geo_filter=GB
  // GB is Great Britain
};
