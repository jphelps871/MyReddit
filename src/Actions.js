import { useEffect, useState } from 'react';

const axios = require('axios');

export const useFetchAll = (url) => {
  let dataToCollect;

  if (url.searchTrue) {
    dataToCollect = url.search;
  } else {
    dataToCollect = url.tabs;
  }

  const [response, setResponse] = useState({
    loading: true,
    redditData: null,
    nextPage: null,
  });

  useEffect(() => {
    setResponse({ loading: true, redditData: null, nextPage: null });

    axios.get(dataToCollect).then((redditResponse) => {
      setResponse({
        loading: false,
        redditData: redditResponse.data.data.children,
        nextPage: redditResponse.data.data.after,
      });
    });
  }, [url.tabs, dataToCollect]);
  return response;
};

export const useFetchSubreddits = (url) => {
  const [names, setNames] = useState([]);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      const allTrending = response.data.data.children[0].data.title;
      const regex = /\w\/\w+/gi;
      setNames(allTrending.match(regex));
    });
  }, [url]);

  useEffect(() => {
    const promises = [];
    names.forEach((name) => {
      promises.push(
        axios
          .get(`https://www.reddit.com/${name}/about.json`)
          .then((response) => response.data.data.icon_img),
      );
    });

    Promise.all(promises).then((responseIcon) => setIcons(responseIcon));
  }, [names]);

  return { names, icons };
};
