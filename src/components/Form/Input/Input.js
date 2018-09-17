import React from "react";
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';
import "./Input.css";

const renderIcon = (icon, size) => {
  if (!!icon.type)
    return (<Icon type={icon.type} size={size} onClick={() => icon.onClick()} />);

  return null;
}

const renderLabel = (label, id) => {
  if (label !== "") return <label className={`input__label`} htmlFor={id}>{label}</label>;
  return null;
}

const getClass = (state, type, iconPosition) => {
  let list = ["input"];
  list[list.length] = `input--${state}`;
  list[list.length] = `input--${type}`;

  if (iconPosition)
    list[list.length] = `input--icon_${iconPosition}`;

  return list.join(" ");
}

const Input = props => {
  const {
    id,
    name,
    state,
    type,
    disabled,
    placeholder,
    label,
    value,
    icon,
    onChange
  } = props;

  const InputTag = type === "textarea" ? "textarea" : "input";
  const actualId = id !== "" ? id : name;
  return (
    <div>
      {renderLabel(label, actualId)}
      <div className="input__wrapper">
        <InputTag
          id={actualId}
          className={getClass(state, type, icon.position)}
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
        {renderIcon(icon, "m")}
      </div>
    </div>
  );
};

Input.defaultProps = {
  state: "normal",
  type: "text",
  disabled: false,
  placeholder: "",
  label: "",
  icon: {}
}

Input.propTypes = {
  /** id used for the input, default to the same as prop "name" */
  id: PropTypes.string,

  /** Name used for the input */
  name: PropTypes.string.isRequired,

  /** State used for the input, "normal", "error" */
  state: PropTypes.string,

  /** Type for the input, "text", "textarea", "number", or any of type in html input */
  type: PropTypes.string,

  /** Boolean determining disabled for the input */
  disabled: PropTypes.bool,

  /** Basic placeholder */
  placeholder: PropTypes.string,

  /** Upper label located on the input */
  label: PropTypes.string,

  /** Icon and Position for the icon ("left" or "right") */
  icon: PropTypes.shape({
    type: PropTypes.string,
    position: PropTypes.string
  }),

  /** Value for the input */
  value: PropTypes.string.isRequired,

  /** onChange event function for the input */
  onChange: PropTypes.func
}

export default Input;