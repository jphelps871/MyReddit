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
        toggleStyle={props.findName.Best}
      >
        Best
      </List>
      <List
        onChange={props.handleClick}
        icon={flameIcon}
        toggleStyle={props.findName.Hot}
      >
        Hot
      </List>
      <List
        onChange={props.handleClick}
        icon={newIcon}
        toggleStyle={props.findName.New}
      >
        New
      </List>
      <List
        onChange={props.handleClick}
        icon={topIcon}
        toggleStyle={props.findName.Top}
      >
        Top
      </List>

      <Media
        query="(min-width: 760px)"
        render={() => (
          <List
            onClick={props.handleClick}
            icon={risingIcon}
            toggleStyle={props.findName.Rising}
          >
            Rising
          </List>
        )}
      />
    </ul>
  );
};

export default Filter;
