import React from 'react';

const getClass = (position) => {
  let list = [];
  list[list.length] = "button-group";
  list[list.length] = `button-group--${position}`;

  return list.join(" ");
}

const ButtonGroup = ({ position, children }) =>
  <div className={getClass(position)}>{children}</div>

export default ButtonGroup;