import React from "react";
import PropTypes from "prop-types";

const Li = (props) => {
  let active;
  if (props.toggleStyle) {
    active = {
      color: "white",
      backgroundColor: "#f74302",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.3)",
      backgroundImage: `url(${props.icon})`,
      backgroundPosition: "2px center",
      padding: "12px 12px 12px 26px",
    };
  } else {
    active = {
      // set color to default
      color: "",
    };
  }

  return (
    <li>
      <button style={active} onClick={props.onChange} name={props.children}>
        {props.children}
      </button>
    </li>
  );
};

Li.propTypes = {
  toggleStyle: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Li;
