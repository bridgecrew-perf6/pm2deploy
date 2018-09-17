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
const renderArrowIcon = (icon, size) => {
  if (icon !== "")
    return (<Icon type={icon} size={size} />);

  return null;
}
const renderDropdown = (items) => {
  return items.map((item, index) => {
    const ButtonTag = item.tag;
    return (
      <ButtonTag
        className={"dbutton"}
        href={item.href}
        target={item.target}
        to={item.to}
        onClick={item.onClick}
        key={index}
      >
        {item.text}
      </ButtonTag>
    )
  });
}

const getClass = (background) => {
  let list = ["button"];
  list[list.length] = `button--${background}`;
  list[list.length] = `sbutton`;

  return list.join(" ");
}
const getArrowClass = (background) => {
  let list = ["button"];
  list[list.length] = `button--${background}`;
  list[list.length] = `sbutton__arrow`;

  return list.join(" ");
}

class ButtonSplit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownShow: false
    }
  }

  onToggleOverlay = (event, show) => {
    const { isDropdownShow } = this.state;
    if (show !== undefined)
      this.setState({ isDropdownShow: show });
    else
      this.setState({ isDropdownShow: !isDropdownShow });
  }

  onKeyDownArrow = (event) => {
    const keyCode = event.keyCode;
    if ((!/(38|40|27|32)/.test(keyCode))) return;

    event.preventDefault();
    event.stopPropagation();

    const { isDropdownShow } = this.state;

    if (!isDropdownShow && keyCode !== 27 || isDropdownShow && keyCode === 27) {
      if (keyCode === 27) event.target.focus();
      return event.target.click();
    }

    event.target.nextElementSibling.children[0].focus();
  }

  onkeyDownItems = (event) => {
    const keyCode = event.keyCode;
    if ((!/(38|40|27|32)/.test(keyCode))) return;

    event.preventDefault();
    event.stopPropagation();

    const { isDropdownShow } = this.state;
    const $this = event.target;
    const $parent = $this.parentNode;
    const $arrow = $parent.previousElementSibling;

    if (!isDropdownShow && keyCode !== 27 || isDropdownShow && keyCode === 27) {
      if (keyCode === 27) $arrow.focus();
      return $arrow.click();
    }

    const parentArray = Array.prototype.slice.call($this.parentNode.children);
    let index = parentArray.indexOf($this);

    if (keyCode == 38 && index > 0) index--;
    if (keyCode == 40 && index < this.props.items.length - 1) index++;
    if (!~index) index = 0;

    $parent.children[index].focus();
  }

  render() {
    const {
      tag,
      type,
      to,
      target,
      href,
      background,
      text,
      icon,
      disabled,
      loading,
      children,
      onClick,
      items,
    } = this.props;

    const {
      isDropdownShow
    } = this.state;

    const ButtonTag = tag;

    return (
      <div className={"sbutton__dropdownc"} >
        <ButtonTag to={to} type={type} href={href} target={target} className={getClass(background)} disabled={disabled} onClick={onClick}>
          {
            children ?
              children
              :
              <React.Fragment>
                {renderIcon(icon, "s", loading)}{renderLoading(loading)}{renderText(text)}
              </React.Fragment>
          }
        </ButtonTag>
        <div className={`sbutton__doverlay ${isDropdownShow ? "sbutton__doverlay--in" : null}`} onClick={this.onToggleOverlay}></div>
        <button className={getArrowClass(background)} disabled={disabled} onClick={this.onToggleOverlay} onKeyDown={this.onKeyDownArrow}>
          {renderArrowIcon("arrow-down", "xs")}
        </button>
        <div className={`sbutton__dropdown ${isDropdownShow ? "sbutton__dropdown--in" : null}`} tabIndex="-1" onKeyDown={this.onkeyDownItems}>
          {renderDropdown(items)}
        </div>
      </div>
    );
  }
}

ButtonSplit.defaultProps = {
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

ButtonSplit.propTypes = {
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
  onClick: PropTypes.func,

  /** Items for dropdown, it is the same as usual Button component, "button", "a", "Link (React)" */
  items: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  })).isRequired
}

export default ButtonSplit;