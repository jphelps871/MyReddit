import React from "react";
import { useFetchSubreddits } from "../../Actions";
import "./Aside.css";

const Aside = () => {
  const { names, icons } = useFetchSubreddits(
    "https://www.reddit.com/r/trendingsubreddits.json"
  );

  return (
    <aside>
      <div className="trending-header">
        <h3>Todays trending subreddits</h3>
      </div>
      <div>
        {/* map through the length of state array */}
        {/* <Subreddits data={{icon: icon, name: name}}/> */}
      </div>
    </aside>
  );
};

export default Aside;
