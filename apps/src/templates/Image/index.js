/* stylelint-disable declaration-block-trailing-semicolon */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const generateWebP = src => {
  if (typeof src === "string")
    return `
      ${src
        .split(".")
        .slice(0, -1)
        .join(".")}.webp
    `;

  return "";
};

const Image = ({ alt, title, webpSrc, src, ...props }) => {
  const imageWebp = webpSrc !== undefined ? webpSrc : generateWebP(src);
  const [errorWebp, setErrorWebp] = useState(false);

  useEffect(() => {
    setErrorWebp(false);
  }, [src, webpSrc]);

  return (
    <picture onError={() => setErrorWebp(true)} {...props}>
      {errorWebp || <source srcSet={imageWebp} type="image/webp" />}
      <source srcSet={src} />
      <img src={src} title={title} alt={alt} {...props} />
    </picture>
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  webpSrc: PropTypes.string
};

Image.defaultProps = {
  webpSrc: undefined
};

export default Image;
