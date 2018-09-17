import React from 'react';
import PropTypes from 'prop-types';
import './Radio.css';

const renderLabel = (label) => {
  if (label)
    return <span className="radio__label">{label}</span>

  return null;
}

const Radio = (props) => {
  const {
    id,
    name,
    label,
    value,
    disabled,
    checked,
    onChange
  } = props;

  return (
    <div className={"radio__wrapper"}>
      <label className="radio">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span className="radio__bullet"></span>{renderLabel(label)}
      </label>
    </div>
  )
}

Radio.defaultProps = {
  disabled: false,
  checked: false
}

Radio.propTypes = {
  /** id for the current radio input */
  id: PropTypes.string,

  /** name for the current radio input, it must be the same as the other input radio */
  name: PropTypes.string.isRequired,

  /** Label located on the right of the radio */
  label: PropTypes.string,

  /** Value for the radio button */
  value: PropTypes.string.isRequired,

  /** Boolean for the disabled input */
  disabled: PropTypes.bool,

  /** Boolean determining if the input is checked */
  checked: PropTypes.bool,

  /** onChange Event fired when the radio is changed */
  onChange: PropTypes.func
}

export default Radio;