import React from "react";
import Media from "react-media";
import "./Filter.css";
import List from "./FilterButtons/List";
import rocketIcon from "./icons/shuttleIcon.svg";
import flameIcon from "./icons/flameIcon.svg";
import newIcon from "./icons/newIcon.svg";
import topIcon from "./icons/topIcon.svg";
import risingIcon from "./icons/risingIcon.svg";

const Filter = (props) => {
  return (
    <ul className="filter">
      <List
        onChange={props.handleClick}
        icon={rocketIcon}
        toggleStyle={props.findName === "best" ? true : false}
      >
        Best
      </List>
      <List
        onChange={props.handleClick}
        icon={flameIcon}
        toggleStyle={props.findName === "hot" ? true : false}
      >
        Hot
      </List>
      <List
        onChange={props.handleClick}
        icon={newIcon}
        toggleStyle={props.findName === "new" ? true : false}
      >
        New
      </List>
      <List
        onChange={props.handleClick}
        icon={topIcon}
        toggleStyle={props.findName === "top" ? true : false}
      >
        Top
      </List>

      <Media
        query="(min-width: 760px)"
        render={() => (
          <List
            onChange={props.handleClick}
            icon={risingIcon}
            toggleStyle={props.findName === "rising" ? true : false}
          >
            Rising
          </List>
        )}
      />
    </ul>
  );
};

export default Filter;
