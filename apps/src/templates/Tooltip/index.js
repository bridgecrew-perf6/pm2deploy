import React from "react";
import PropTypes from "prop-types";
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

Tooltip.propTypes = {
  setting: PropTypes.shape({
    animation: PropTypes.string,
    arrow: PropTypes.bool,
    size: PropTypes.string,
    duration: PropTypes.number,
    theme: PropTypes.string
  })
};

Tooltip.defaultProps = {
  setting: {
    animation: "shift-toward",
    arrow: true,
    size: "large",
    duration: 150,
    theme: "black"
    // theme: "custom"
  }
};

export default Tooltip;
