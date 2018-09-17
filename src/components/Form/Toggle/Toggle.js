import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

const renderLabel = (label) => {
  if (label)
    return <span className="checkbox__label">{label}</span>

  return null;
}

const Toggle = (props) => {
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
    <div>
      <label className="toggle__wrapper">
        <div className="toggle">
          <input
            id={id}
            type="checkbox"
            name={name}
            value={value}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            {...props}
          />
          <div className="toggle__slider"></div>
        </div>
        {renderLabel(label)}
      </label>
    </div >
  )
}

Toggle.defaultProps = {
  disabled: false,
  checked: false
}

Toggle.propTypes = {
  /** id for the current toggle input */
  id: PropTypes.string,

  /** name for the current toggle input */
  name: PropTypes.string.isRequired,

  /** Label located on the right of the toggle */
  label: PropTypes.string,

  /** Value for the toggle button */
  value: PropTypes.string.isRequired,

  /** Boolean for the disabled input */
  disabled: PropTypes.bool,

  /** Boolean determining if the input is checked */
  checked: PropTypes.bool
}

export default Toggle;