import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

const marginList = {
  "top": "marginBottom",
  "right": "marginLeft",
  "bottom": "marginTop",
  "left": "marginRight",
}

const getClass = (placement, className) => {
  let list = ["tooltip"];
  list[list.length] = `tooltip--${placement}`;
  if (className) list[list.length] = className;

  return list.join(" ");
}

/** Tooltip component description */
const Tooltip = ({
  placement,
  className,
  children,
  gap
}) => {
  let gapStyle;
  if (gap) {
    const m = marginList[placement];
    gap = gap + 10;
    gapStyle = { [m]: gap };
  }

  return (
    <div className={getClass(placement, className)} style={gapStyle}>{children}</div>
  );
}

Tooltip.defaultProps = {
  placement: "top",
  className: null,
  gap: 5
}

Tooltip.propTypes = {
  placement: PropTypes.string,
  className: PropTypes.string,
  gap: PropTypes.number
}

export default Tooltip;