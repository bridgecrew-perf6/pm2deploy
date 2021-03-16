import React from "react";
import Style from "./Button.module.scss";

const getClassName = cls => {
  const defCls = Style.button;
  let ret = defCls;
  if (cls) {
    const modCls = cls.split(" ").map(c => Style[c]);
    ret = `${ret} ${modCls.join(" ")}`;
  }
  return ret;
};

const Button = ({
  setclass,
  disabled,
  children,
  onClick,
  type,
  ...props
}) => (
  <button
    type={type}
    className={getClassName(setclass)}
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