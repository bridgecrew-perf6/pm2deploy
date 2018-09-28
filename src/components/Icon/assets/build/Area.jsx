import React from "react";

const Area = props => (
  <svg viewBox="0 0 20 20" width="1em" height="1em" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <g
        stroke="#ADBFD0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M10.623 2.315l5.6 2.8A1.4 1.4 0 0 1 17 6.368v6.671a1.4 1.4 0 0 1-.777 1.253l-5.6 2.8a1.4 1.4 0 0 1-1.253 0l-5.6-2.8a1.4 1.4 0 0 1-.77-1.26V6.368a1.4 1.4 0 0 1 .777-1.253l5.6-2.8a1.4 1.4 0 0 1 1.246 0z" />
        <path d="M3.224 5.612L10 9l6.776-3.388M10 17.232V9" />
      </g>
    </g>
  </svg>
);

export default Area;
