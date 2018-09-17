import React from "react";

const HamburgerOpen = props => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M3 7a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
      fill="#d8d8d8"
    />
    <path fill="#536be6" d="M21 12l-3 2v-4l3 2z" />
  </svg>
);

export default HamburgerOpen;
