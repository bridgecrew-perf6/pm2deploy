import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

import Icon from '../Icon/Icon';

const renderIcon = (icon, size) => {
  if (icon !== "")
    return (<Icon type={icon} size={size} />);

  return null;
}

const getClass = (type) => {
  let list = ["rbutton"];
  list[list.length] = `rbutton--${type}`;

  return list.join(" ");
}

const ButtonRound = ({
  tag,
  type,
  to,
  href,
  target,
  icon,
  disabled,
  children
}) => {
  const ButtonTag = tag;

  return (
    <ButtonTag type={type} to={to} href={href} target={target} className={getClass()} disabled={disabled} >
      {
        children ?
          children
          :
          <React.Fragment>
            {renderIcon(icon, "s")}
          </React.Fragment >
      }
    </ButtonTag>
  )
}

ButtonRound.defaultProps = {
  tag: "button",
  type: "button",
  to: "/",
  href: "#",
  target: "_top",
  icon: "",
  disabled: false,
}

ButtonRound.propTypes = {
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
  disabled: PropTypes.bool
}

export default ButtonRound;