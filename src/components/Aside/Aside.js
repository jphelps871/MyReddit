import React from "react";
import TrendingSub from "./TrendingSub/TrendingSub";
import "./Aside.css";

const Aside = (props) => {
  return (
    <aside>
      <TrendingSub onClick={props.onChange} />
    </aside>
  );
};

export default Aside;
