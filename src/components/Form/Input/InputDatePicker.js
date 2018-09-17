import React from "react";
import PropTypes from "prop-types";
import Icon from '../../Icon/Icon';
import "./Input.css";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

const renderIcon = (icon, size) => {
  if (icon)
    return (<Icon type={icon} size={size} onClick={() => icon.onClick()} />);

  return null;
}

const renderLabel = (label, id) => {
  if (label)
    return <label className={`input__label`} htmlFor={id}>{label}</label>;

  return null;
}

const getClass = (state, iconPosition) => {
  let list = ["input"];
  list[list.length] = `input--${state}`;

  if (iconPosition)
    list[list.length] = `input--icon_${iconPosition}`;

  return list.join(" ");
}

const handleDayChange = (event) => {
  console.log(event);
}

function checkValue(str, max) {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
};

const handleChange = (event) => {
  let input = event.target.value
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  let values = input.split('/').map(function (v) {
    return v.replace(/\D/g, '')
  });
  if (values[0]) values[0] = checkValue(values[0], 31);
  if (values[1]) values[1] = checkValue(values[1], 12);
  let output = values.map(function (v, i) {
    return v.length == 2 && i < 2 ? v + '/' : v;
  });
  const endValue = output.join('').substr(0, 14);

  event.target.value = endValue;
}

const Input = props => {
  const {
    id,
    name,
    state,
    disabled,
    label,
    placeholder,
    value,
    icon,
    locale,
    onChange
  } = props;

  const actualId = id !== "" ? id : name;

  return (
    <div>
      {renderLabel(label, actualId)}
      <div className="input__wrapper">
        <DayPickerInput
          format="DD/MM/YYYY"
          className={getClass(state, icon.position)}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={placeholder}
          disabled={disabled}
          dayPickerProps={{
            locale: locale,
            localeUtils: MomentLocaleUtils,
          }}
          inputProps={{ onChange: (event) => handleChange(event) }}
          onDayChange={(event) => handleDayChange(event)}
          classNames={{
            container: 'input--datepicker',
            overlayWrapper: 'DayPickerInput-OverlayWrapper',
            overlay: 'DayPickerInput-Overlay',
          }}
          value=""
        />
        {renderIcon("date", "m")}
      </div>
    </div>
  );
};

Input.defaultProps = {
  locale: "en",
  state: "normal",
  type: "text",
  disabled: false,
  icon: {},
  placeholder: ""
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