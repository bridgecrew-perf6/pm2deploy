import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';
import * as IconCollection from './assets';

const getClass = (icon, size, position) => {
  let list = ["icon"];
  list[list.length] = `icon--${size}`;
  list[list.length] = icon ? "" : "icon--not-found";

  switch (position) {
    case "right": list[list.length] = "icon--ml"; break;
    case "left": list[list.length] = "icon--mr"; break;
    default: break;
  }

  return list.join(" ");
}

const Icon = ({
  type,
  size,
  position,
  ...props
}) => {
  //Change the icon name to component name 
  //e.g notification-active -> NotificationActive

  const iconType = type.replace(/([-|][0-9a-z])/g, function (match) {
    return match[1].toUpperCase();
  }).replace(/(^[a-z])/g, function (match) {
    return match[0].toUpperCase();
  });
  const icon = IconCollection[iconType];

  return (
    <span className={getClass(icon, size, position)} {...props}>
      {
        icon && icon()
      }
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