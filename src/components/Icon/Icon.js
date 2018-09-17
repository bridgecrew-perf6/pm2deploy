import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const getClass = (icon, size) => {
  let list = ["icon"];
  list[list.length] = `icon--${size}`;
  list[list.length] = icon ? "" : "icon--not-found";

  return list.join(" ");
}

const Icon = ({
  type,
  size,
  ...props
}) => {
  return (
    <span className={getClass(icon, size)} {...props}>

    </span >
  )
}

Icon.defaultProps = {
  type: "unknown",
  size: "m",
  position: ""
}

Icon.propTypes = {
  /** Icon to be shown */
  type: PropTypes.string.isRequired,

  /** Icon size */
  size: PropTypes.string.isRequired,

  /** Position to set margin */
  position: PropTypes.string
}

export default Icon;