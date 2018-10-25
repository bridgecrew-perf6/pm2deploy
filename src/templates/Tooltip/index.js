import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

/*
Theme to be chosen from tippy
// import "tippy.js/dist/themes/light.css";
// import "tippy.js/dist/themes/translucent.css";
*/
// Source https://atomiks.github.io/tippyjs/

/*
to Use Custom Theme
import "./Tooltip.scss";
*/

const Tooltip = ({ content, children, setting }) => (
  <Tippy {...setting} content={content}>
    {children}
  </Tippy>
);

Tooltip.defaultProps = {
  setting: {
    animation: "shift-toward",
    arrow: true,
    size: "large",
    duration: 150,
    theme: "translucent"
    // theme: "custom"
  }
};

export default Tooltip;
