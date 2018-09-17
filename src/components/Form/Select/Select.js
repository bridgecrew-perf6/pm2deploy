import React from "react";
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';
import "./Select.css";

const renderIcon = (icon, size) => {
  if (!!icon)
    return (<Icon type={icon} size={size} />);

  return null;
}

const renderLabel = (label, id) => {
  if (label !== "") return <label className={`select__label`} for={id}>{label}</label>;
  return null;
}

const renderOption = (placeholder, option) => {
  let optionArray = [];
  if (placeholder !== "")
    optionArray.push(<option disabled={true} key={-1} value={""}>{placeholder}</option>);

  option.map((item, index) =>
    optionArray.push(<option value={item.value} key={index}>{item.text}</option>)
  );

  return optionArray;
}

const getClass = (state, icon) => {
  let list = ["select"];
  list[list.length] = `select--${state}`;

  if (!!icon)
    list[list.length] = `select--icon_left`;

  return list.join(" ");
}

const Select = props => {
  const {
    id,
    name,
    state,
    disabled,
    placeholder,
    label,
    option,
    value,
    icon,
    onChange
  } = props;

  const actualId = id !== "" ? id : name;

  return (
    <div>
      {renderLabel(label, actualId)}
      <div className="select__wrapper">
        <select
          id={actualId}
          className={getClass(state, icon)}
          defaultValue={""}
          disabled={disabled}
          value={value}
          onChange={(event) => { onChange(event) }}
        >
          {renderOption(placeholder, option)}
        </select>
        {renderIcon(icon, "m")}
        {renderIcon("dropdown", "s")}
      </div>
    </div>
  );
};

Select.defaultProps = {
  state: "normal",
  disabled: false,
  placeholder: "",
  label: "",
  icon: "",
  onChange: () => { }
}

Select.propTypes = {
  /** id used for the input, default to the same as prop "name" */
  id: PropTypes.string,

  /** Name used for the input */
  name: PropTypes.string.isRequired,

  /** State used for the input, "normal", "error" */
  state: PropTypes.string,

  /** Boolean determining disabled for the input */
  disabled: PropTypes.bool,

  /** Options for the dropdown */
  option: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,

  /** Basic placeholder */
  placeholder: PropTypes.string,

  /** Upper label located on the input */
  label: PropTypes.string,

  /** Icon to be add at the left side */
  icon: PropTypes.string,

  /** Value for the input, defaultValue props is set to "" to make the placeholder possible*/
  value: PropTypes.string.isRequired,

  /** onChange event function for the input */
  onChange: PropTypes.func
}

export default Select;