import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import './Button.css';

const renderIcon = (icon, size, loading) => {
  if (icon !== "" && loading === false)
    return (<Icon type={icon} size={size} position={"left"} />);

  return null;
}
const renderText = (text) => (<span className={"button__text"}>{text}</span>)
const renderLoading = (loading) => {
  if (loading) return (<span className={"button__loading"}></span>);

  return null;
}
const getClass = (background) => {
  let list = ["button"];
  list[list.length] = `button--${background}`;

  return list.join(" ");
}

/** Button component description */
const Button = ({
  tag,
  type,
  to,
  href,
  target,
  background,
  text,
  icon,
  disabled,
  loading,
  children,
  onClick,
  ...props
}) => {
  const ButtonTag = tag;
  return (
    <ButtonTag to={to} type={type} href={href} target={target} className={getClass(background)} disabled={disabled} onClick={onClick} {...props}>
      {
        children ?
          children
          :
          <React.Fragment>
            {renderIcon(icon, "s", loading)}{renderLoading(loading)}{renderText(text)}
          </React.Fragment>
      }
    </ButtonTag>
  )
}

Button.defaultProps = {
  tag: "button",
  type: "button",
  to: "/",
  href: "#",
  target: "_top",
  background: "default",
  text: "Default Text",
  icon: "",
  disabled: false,
  loading: false
}

Button.propTypes = {
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

  /** Boolean determining the type of button, "default", "primary", "secondary", "red", "plain" */
  background: PropTypes.string,

  /** String to be shown on the button */
  text: PropTypes.string,

  /** Icon to be shown on the button */
  icon: PropTypes.string,

  /** Boolean determining disabled button */
  disabled: PropTypes.bool,

  /** Boolean determining loading state */
  loading: PropTypes.bool,

  /** Function fired when the button is clicked */
  onClick: PropTypes.func
}

export default Button;