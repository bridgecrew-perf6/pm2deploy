import React from "react";
import "./Button.css";

const getClass = background => {
  const list = ["button"];
  list[list.length] = `button--${background}`;

  return list.join(" ");
};

/** Button component description */
const Button = ({
  background,
  disabled,
  children,
  onClick,
  type,
  ...props
}) => (
  <button
    type="button"
    className={getClass(background)}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: "button",
  background: "default",
  disabled: false
};

export default Button;
