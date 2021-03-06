import React from "react";
import SnooImg from "../../../assets/icons/aside-images/snooIcon.svg";

const Icon = (props) => {
  return (
    <div className="imgIcon">
      {props.srcIcon ? (
        <img src={props.srcIcon} alt="subreddit icon" />
      ) : (
        <img src={SnooImg} alt="subreddit icon" />
      )}
    </div>
  );
};

export default Icon;
