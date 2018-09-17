import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const renderLabel = (label) => {
  if (label)
    return <span className="checkbox__label">{label}</span>

  return null;
}

const Checkbox = (props) => {
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
      <label className="checkbox">
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
        <span className="checkbox__check"></span>{renderLabel(label)}
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  disabled: false,
  checked: false
}

Checkbox.propTypes = {
  /** id for the current checkbox input */
  id: PropTypes.string,

  /** name for the current checkbox input */
  name: PropTypes.string.isRequired,

  /** Label located on the right of the checkbox */
  label: PropTypes.string,

  /** Value for the checkbox button */
  value: PropTypes.string.isRequired,

  /** Boolean for the disabled input */
  disabled: PropTypes.bool,

  /** Boolean determining if the input is checked */
  checked: PropTypes.bool
}

export default Checkbox;