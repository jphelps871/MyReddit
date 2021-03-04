import { useEffect, useState } from "react";
const axios = require("axios");

export const useFetch = (url) => {
  let dataToCollect;

  if (url.searchTrue) {
    dataToCollect = url.search;
  } else {
    dataToCollect = url.tabs;
  }

  const [response, setResponse] = useState({
    loading: true,
    reddit: null,
    nextPage: null,
  });
  useEffect(() => {
    setResponse({ loading: true, reddit: null, nextPage: null });

    axios.get(dataToCollect).then((redditResponse) => {
      setResponse({
        loading: false,
        reddit: redditResponse.data.data.children,
        nextPage: redditResponse.data.data.after,
      });
    });
  }, [url.tabs, dataToCollect]);
  return response;
};
