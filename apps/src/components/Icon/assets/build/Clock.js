import React from "react";

function SvgClock(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
      <g fill="none">
        <path d="M-1-1h20v20H-1z" />
        <path
          fill="#0071DC"
          d="M9 1.636a7.364 7.364 0 110 14.728A7.364 7.364 0 019 1.636zM9 0a9 9 0 100 18A9 9 0 009 0z"
        />
        <path
          fill="#0071DC"
          d="M12.273 10.636H9a.818.818 0 01-.818-.818V4.91a.818.818 0 011.636 0v3.682a.41.41 0 00.41.409h2.045a.818.818 0 010 1.636z"
        />
      </g>
    </svg>
  );
}

export default SvgClock;
