/* stylelint-disable declaration-block-trailing-semicolon */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import style from "./LazyImage.module.scss";

const LazyImageInside = ({
  alt,
  title,
  src,
  onLoad,
  imageRatioWidth,
  imageRatioHeight,
  placeholder
}) => {
  const placeholderSrc = img => {
    const { width, height } = img;
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
  };

  const [loadState, setLoadState] = useState({
    src: placeholderSrc({ width: imageRatioWidth, height: imageRatioHeight }),
    loaded: false
  });

  useEffect(() => {
    setLoadState({
      src: placeholderSrc({ width: imageRatioWidth, height: imageRatioHeight }),
      loaded: false
    });
  }, [src]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoadState({
        src: img.src,
        loaded: true
      });
      onLoad();
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <img
        alt={alt}
        title={title}
        src={loadState.src}
        className={loadState.loaded ? style.isloaded : ""}
      />
      {!loadState.loaded ? placeholder : null}
    </>
  );
};

const LazyImage = ({
  alt,
  title,
  src,
  placeholder,
  imageRatioWidth,
  imageRatioHeight,
  onLoad
}) => {
  const paddingStyle = {
    paddingTop: `${(imageRatioHeight / imageRatioWidth) * 100}%`
  };
  return (
    <div className={style.lazy}>
      {imageRatioHeight / imageRatioWidth !== 0 ? (
        <div className={style.dummy} style={paddingStyle} />
      ) : null}
      <LazyLoad offset={150} placeholder={placeholder}>
        <LazyImageInside
          alt={alt}
          title={title}
          src={src}
          onLoad={onLoad}
          imageRatioWidth={imageRatioWidth}
          imageRatioHeight={imageRatioHeight}
          placeholder={placeholder}
        />
      </LazyLoad>
    </div>
  );
};

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  imageRatioWidth: PropTypes.number,
  imageRatioHeight: PropTypes.number,
  placeholder: PropTypes.element,
  onLoad: PropTypes.func
};

LazyImage.defaultProps = {
  imageRatioWidth: 0,
  imageRatioHeight: 0,
  placeholder: <div className={style.lazy__loading}> Loading...</div>,
  onLoad: () => {}
};

export default LazyImage;
