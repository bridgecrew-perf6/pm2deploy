import React from "react";

const HamburgerClose = props => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M21 17a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h11a1 1 0 0 1 1 1zm0-5a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h11a1 1 0 0 1 1 1zm0-5a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h11a1 1 0 0 1 1 1z"
      fill="#d8d8d8"
    />
    <path fill="#536be6" d="M3 12l3-2v4l-3-2z" />
  </svg>
);

export default HamburgerClose;
