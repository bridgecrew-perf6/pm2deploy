import React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";

const getClass = (icon, size) => {
  const list = ["icon"];
  list[list.length] = `icon--${size}`;
  list[list.length] = icon ? "" : "icon--not-found";

  return list.join(" ");
};

const Icon = ({ icon, type, size, ...props }) => (
  <span className={getClass(icon, size)} {...props}>
    {/* {
        type ? 
          
      } */}
  </span>
);

Icon.defaultProps = {
  type: "unknown",
  size: "m",
  position: ""
};

Icon.propTypes = {
  /** Icon to be shown */
  type: PropTypes.string,

  /** Icon size */
  size: PropTypes.string,

  /** Position to set margin */
  position: PropTypes.string
};

export default Icon;
