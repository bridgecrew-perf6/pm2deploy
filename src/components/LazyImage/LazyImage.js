import React from "react";
import PropTypes from "prop-types";

import LazyLoad from "react-lazyload";

import style from "./LazyImage.module.scss";

const LazyImage = ({ alt, title, src }) => (
  <div className={style.lazy}>
    <LazyLoad
      offset={150}
      placeholder={<div className={style.lazy__loading}>Loading...</div>}
    >
      <img alt={alt} title={title} src={src} />
    </LazyLoad>
  </div>
);

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default LazyImage;
