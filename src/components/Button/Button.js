import React from "react";
import style from "./Button.module.scss";

const getClass = background => {
  const list = [style.button];
  list[list.length] = style[`button--${background}`];

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
    type={type}
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
