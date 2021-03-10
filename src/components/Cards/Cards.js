import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import { useFetchAll } from '../../Actions';
import './Cards.css';

const pagination = (pageNum, nextPageId, pages, setPages) => {
  if (pages.includes(nextPageId)) return;

  if (pages.length < pageNum + 2) {
    setPages((prevArray) => [...prevArray, nextPageId]);
  }

  if (pageNum === 0) setPages(['', nextPageId]);
};

const Cards = ({ query, onClick }) => {
  // eslint-disable-next-line object-curly-newline
  const { subReddit, filterReddit, pageNum, searchReddit } = query;
  const [pages, setPages] = useState(['']);
  const { redditData, loading, nextPage } = useFetchAll({
    tabs: `https://www.reddit.com/r/${subReddit}/${filterReddit}.json?after=${pages[pageNum]}`,
    search: `https://www.reddit.com/search.json?q=${searchReddit}&sort=${filterReddit}.json?after=${pages[pageNum]}`,
    searchTrue: searchReddit,
  });

  // check page id does not already exist in state. Update to correct page
  pagination(pageNum, nextPage, pages, setPages);
  if (!loading) {
    return (
      <div className="cards">
        {redditData.map((item, idx) => (
          <Card
            onClick={onClick}
            key={idx.toString()}
            hide={item.data.over_18}
            subreddit={item.data.subreddit_name_prefixed}
            title={item.data.title}
            url={item.data.url}
            video={item.data.media?.reddit_video?.fallback_url}
            comments={item.data.num_comments}
            upVotes={item.data.ups}
          />
        ))}
      </div>
    );
  }
  return (
    <div>
      <p>loading...</p>
    </div>
  );
};

Cards.propTypes = {
  query: PropTypes.shape({
    subReddit: PropTypes.string.isRequired,
    filterReddit: PropTypes.string.isRequired,
    pageNum: PropTypes.number.isRequired,
    searchReddit: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

Cards.defaultProps = {
  onClick: () => {},
};

export default Cards;
