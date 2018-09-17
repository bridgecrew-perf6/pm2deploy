import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import './PaginationButton.css';
import * as util from '../../helpers/util';
import TooltipTrigger from '../Tooltip/TooltipTrigger';

const renderIcon = (icon, size, loading) => {
  if (icon !== "" && loading === false)
    return (<Icon type={icon} size={size} />);

  return null;
}
const renderText = (text) => {
  if (text.length > 4)
    text = util.ellipsis(text, 1, 1);
  return (<span className={"pagination__button__text"}>{text}</span>)
}
const renderLoading = (loading) => {
  if (loading) return (<span className={"pagination__button__loading"}></span>);

  return null;
}
const getClass = (background, active) => {
  let list = ["pagination__button"];
  list[list.length] = `pagination__button--${background}`;
  list[list.length] = active ? "pagination__button--active" : "";

  return list.join(" ");
}

/** PaginationButton component description */
const PaginationButton = ({
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
  tooltip,
  children,
  onClick,
  active,
  ...props
}) => {
  const PaginationButtonTag = tag;
  console.log(tooltip)
  return (
    <TooltipTrigger id={util.randomString(5)} placement="top" tooltip={tooltip}>
      <PaginationButtonTag to={to} type={type} href={href} target={target} className={getClass(background, active)} disabled={disabled} onClick={onClick} {...props}>
        {
          children ?
            children
            :
            <React.Fragment>
              {renderIcon(icon, "s", loading)}{renderLoading(loading)}{renderText(text)}
            </React.Fragment>
        }
      </PaginationButtonTag>
    </TooltipTrigger>
  )
}

PaginationButton.defaultProps = {
  tag: "button",
  type: "button",
  to: "/",
  href: "#",
  target: "_top",
  background: "default",
  text: "Default Text",
  icon: "",
  disabled: false,
  loading: false,
  tooltip: null,
  active: false
}

PaginationButton.propTypes = {
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

  /** String to be shown as tooltip */
  tooltip: PropTypes.string,

  /** Function fired when the button is clicked */
  onClick: PropTypes.func,

  /** Active state of the button */
  active: PropTypes.bool
}

export default PaginationButton;