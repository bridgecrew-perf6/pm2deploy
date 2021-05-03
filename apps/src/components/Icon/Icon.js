/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import "./Icon.css";

import * as IconCollection from "./assets/build";

const getClass = (icon, size) => {
  const list = ["icon"];
  list[list.length] = `icon--${size}`;
  list[list.length] = icon ? "" : "icon--not-found";

  return list.join(" ");
};

const Icon = ({ type, size, ...props }) => {
  const Element = IconCollection[type];
  return (
    <span className={getClass(size)} {...props}>
      <Element />
    </span>
  );
};

Icon.defaultProps = {
  type: "unknown",
  size: "m",
  position: ""
};

Icon.propTypes = {
  /** Type of the Icon based on the svg name */
  type: PropTypes.string,
  /** Size for the icon defined from the css, such as s, m, l, xl */
  size: PropTypes.string,
  /** Position to set margin */
  position: PropTypes.string
};

export default Icon;
