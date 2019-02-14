import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import style from "./LazyImage.module.scss";

/* eslint-disable declaration-block-trailing-semicolon */

const LazyImageInside = ({ alt, title, src, onLoad, placeholder }) => {
  const placeholderSrc = img => {
    const { width, height } = img;
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
  };

  const [loadState, setLoadState] = useState({
    src: placeholderSrc({ width: 2, height: 1 }),
    loaded: false
  });

  useEffect(() => {
    setLoadState({
      src: placeholderSrc({ width: 2, height: 1 }),
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

const LazyImage = ({ alt, title, src, placeholder, imageRatio, onLoad }) => {
  const paddingStyle = {
    paddingTop: `${imageRatio * 100}%`
  };
  return (
    <div className={style.lazy}>
      {imageRatio !== 0 ? (
        <div className={style.dummy} style={paddingStyle} />
      ) : null}
      <LazyLoad offset={150} placeholder={placeholder}>
        <LazyImageInside
          alt={alt}
          title={title}
          src={src}
          onLoad={onLoad}
          imageRatio={imageRatio}
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
  imageRatio: PropTypes.number,
  placeholder: PropTypes.element,
  onLoad: PropTypes.func
};

LazyImage.defaultProps = {
  imageRatio: 0,
  placeholder: <div className={style.lazy__loading}> Loading...</div>,
  onLoad: () => {}
};

export default LazyImage;
