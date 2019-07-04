/* stylelint-disable declaration-block-trailing-semicolon */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import style from "./LazyImage.module.scss";

// Generate Webp URL if no webp is provided
const generateWebP = src => {
  if (typeof src === "string")
    return `${src
      .split(".")
      .slice(0, -1)
      .join(".")}.webp`;

  return "";
};

// Generate Placeholder to make sure ratio is stay the same
const placeholderSrc = img => {
  const { width, height } = img;
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
};

const LazyImageInside = ({
  alt,
  title,
  src,
  webpSrc,
  onLoad,
  imageRatioWidth,
  imageRatioHeight,
  placeholder,
  className,
  ...props
}) => {
  const imageWebp = webpSrc !== undefined ? webpSrc : generateWebP(src);
  const [errorWebp, setErrorWebp] = useState(false);

  const [loadState, setLoadState] = useState({
    src: placeholderSrc({ width: imageRatioWidth, height: imageRatioHeight }),
    loaded: false
  });

  useEffect(() => {
    setLoadState({
      src: placeholderSrc({ width: imageRatioWidth, height: imageRatioHeight }),
      loaded: false
    });
    setErrorWebp(false);
  }, [src, webpSrc]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoadState({
        src: !errorWebp ? imageWebp : src,
        loaded: true
      });
      onLoad();
    };
    img.onerror = () => {
      setErrorWebp(true);
    };
    img.src = !errorWebp ? imageWebp : src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, webpSrc, errorWebp]);

  return (
    <>
      {/* {!loadState.loaded ? placeholder : null} */}
      {placeholder}
      <picture {...props}>
        <img
          alt={alt}
          title={title}
          src={loadState.src}
          className={`${className} ${loadState.loaded ? style.isloaded : ""}`}
          {...props}
        />
      </picture>
    </>
  );
};

const LazyImage = ({
  alt,
  title,
  src,
  webpSrc,
  placeholder,
  imageRatioWidth,
  imageRatioHeight,
  onLoad,
  ...props
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
          webpSrc={webpSrc}
          onLoad={onLoad}
          imageRatioWidth={imageRatioWidth}
          imageRatioHeight={imageRatioHeight}
          placeholder={placeholder}
          {...props}
        />
      </LazyLoad>
    </div>
  );
};

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  webpSrc: PropTypes.string,
  imageRatioWidth: PropTypes.number,
  imageRatioHeight: PropTypes.number,
  placeholder: PropTypes.element,
  onLoad: PropTypes.func
};

LazyImage.defaultProps = {
  imageRatioWidth: 0,
  imageRatioHeight: 0,
  placeholder: <div className={style.lazy__loading}> Loading...</div>,
  webpSrc: undefined,
  onLoad: () => {}
};

export default LazyImage;
