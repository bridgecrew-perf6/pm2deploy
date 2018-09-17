import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

import Icon from '../Icon/Icon';

const renderIcon = (icon, size) => {
  if (icon !== "")
    return (<Icon type={icon} size={size} />);

  return null;
}

const renderText = (background, text) => {
  if (background === "default")
    return (<span className={"obutton__text"}>{text}</span>)
}

//Default Button
const getDefaultClass = (background) => {
  let list = ["obutton"];
  list[list.length] = `obutton--${background}`;

  return list.join(" ");
}

const ButtonOval = ({
  tag,
  type,
  to,
  href,
  target,
  background,
  text,
  icon,
  disabled,
  children
}) => {
  return (
    <button className={getDefaultClass(background)} disabled={disabled}>
      {
        children ?
          children
          :
          <React.Fragment>
            {renderIcon(icon, "s")}
            {renderText(background, text)}
          </React.Fragment>
      }
    </button>
  )
}

ButtonOval.defaultProps = {
  tag: "button",
  type: "button",
  to: "/",
  href: "#",
  target: "_top",
  background: "default",
  icon: "",
  text: "",
  disabled: false
}

ButtonOval.propTypes = {
  /** Tag determining the elements of the button, "button", "a", "Link (React)" */
  tag: PropTypes.string,

  /** Type of the button, used if tag is "button", can be "button" or "submit" */
  type: PropTypes.string,

  /** to of the button, used if tag is "Link" */
  to: PropTypes.string,

  /** href of the button, used if tag is "a" */
  href: PropTypes.string,

  /** target of the button, used if tag is "a" */
  target: PropTypes.string,

  /** Icon to be shown on the button */
  icon: PropTypes.string,

  /** Boolean determining disabled button */
  disabled: PropTypes.bool,

  /** String to be shown on the button */
  text: PropTypes.string,
}

export default ButtonOval;