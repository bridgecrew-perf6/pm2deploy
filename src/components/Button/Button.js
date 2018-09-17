import React from 'react';
import './Button.css';

const getClass = (background) => {
  let list = ["button"];
  list[list.length] = `button--${background}`;

  return list.join(" ");
}

/** Button component description */
const Button = ({
  background,
  disabled,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={getClass(background)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  background: "default",
  disabled: false
}

export default Button;