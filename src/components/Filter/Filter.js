import React, { useState } from "react";
import "./Filter.css";
import rocketIcon from "../../assets/icons/shuttleIcon.svg";
import flameIcon from "../../assets/icons/flameIcon.svg";
import newIcon from "../../assets/icons/newIcon.svg";
import topIcon from "../../assets/icons/topIcon.svg";

const Filter = () => {
  const [findName, setFindName] = useState({
    best: true,
    hot: false,
    new: false,
    top: false,
  });

  const testFuntion = (event) => {
    // loop through and turn all to false, then switch one to true
    for (var i in findName) findName[i] = false;
    setFindName({ ...findName, [event.target.name]: true });
  };

  let best;
  let hot;
  let newInfo;
  let top;

  if (findName.best)
    best = {
      color: "white",
      backgroundColor: "#f74302",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.3)",
      backgroundImage: `url(${rocketIcon})`,
      backgroundPosition: "2px center",
      padding: "10px 10px 10px 24px",
    };
  if (findName.hot)
    hot = {
      color: "white",
      backgroundColor: "#f74302",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.3)",
      backgroundImage: `url(${flameIcon})`,
      backgroundPosition: "5px center",
      padding: "10px 10px 10px 24px",
    };
  if (findName.new)
    newInfo = {
      color: "white",
      backgroundColor: "#f74302",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.3)",
      backgroundImage: `url(${newIcon})`,
      backgroundPosition: "3px center",
      padding: "10px 10px 10px 24px",
    };
  if (findName.top)
    top = {
      color: "white",
      backgroundColor: "#f74302",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.3)",
      backgroundImage: `url(${topIcon})`,
      backgroundPosition: "3px center",
      padding: "10px 10px 10px 24px",
    };

  return (
    <ul className="filter">
      <li>
        <button onClick={testFuntion} style={best} name="best">
          Best
        </button>
      </li>
      <li>
        <button onClick={testFuntion} style={hot} name="hot">
          Hot
        </button>
      </li>
      <li>
        <button onClick={testFuntion} style={newInfo} name="new">
          New
        </button>
      </li>
      <li>
        <button onClick={testFuntion} style={top} name="top">
          Top
        </button>
      </li>
    </ul>
  );
};

export default Filter;
