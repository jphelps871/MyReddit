// const axios = require("axios");

// const headerData = async (userInput) => {
//   if (!userInput) userInput = "popular";

//   const response = await axios.get(
//     `https://www.reddit.com/r/${userInput}.json`
//   );

//   return response;
// };

// export { headerData };

// bellow are HTTP requests, they require query params and other

// querys to fully function

// /r/[subreddit] => many need a subredit to search popular, new, hot for example

// subreddit to begin with can be popular

// export const Search = () => {
//   // https://www.reddit.com/search.json?=
//   // needs a query string
// };

// export const New = () => {
//   // https://www.reddit.com/r/all/new.json
// };

// export const Hot = () => {
//   // https://www.reddit.com/r/all/hot.json
// };

// export const Top = () => {
//   // https://www.reddit.com/r/all/top.json
// };

// export const Rising = () => {
//   // https://www.reddit.com/r/all/rising.json
// };

// export const Location = () => {
//   // https://www.reddit.com/r/popular.json?geo_filter=GB
//   // GB is Great Britain
// };
