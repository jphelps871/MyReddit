import React, { useState } from "react";
import Media from "react-media";
import "./Filter.css";
import List from "./FilterButtons/List";
import rocketIcon from "./icons/shuttleIcon.svg";
import flameIcon from "./icons/flameIcon.svg";
import newIcon from "./icons/newIcon.svg";
import topIcon from "./icons/topIcon.svg";
import risingIcon from "./icons/risingIcon.svg";

const Filter = () => {
  const [findName, setFindName] = useState({
    Best: true,
    Hot: false,
    New: false,
    Top: false,
    Rising: false,
  });

  const handleClick = (event) => {
    // loop through and turn all to false
    for (var i in findName) findName[i] = false;
    // Switch one to true
    setFindName({ ...findName, [event.target.name]: true });
  };

  return (
    <ul className="filter">
      <List onClick={handleClick} icon={rocketIcon} toggleStyle={findName.Best}>
        Best
      </List>
      <List onClick={handleClick} icon={flameIcon} toggleStyle={findName.Hot}>
        Hot
      </List>
      <List onClick={handleClick} icon={newIcon} toggleStyle={findName.New}>
        New
      </List>
      <List onClick={handleClick} icon={topIcon} toggleStyle={findName.Top}>
        Top
      </List>

      <Media
        query="(min-width: 760px)"
        render={() => (
          <List
            onClick={handleClick}
            icon={risingIcon}
            toggleStyle={findName.Rising}
          >
            Rising
          </List>
        )}
      />
    </ul>
  );
};

export default Filter;
