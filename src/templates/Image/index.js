/* stylelint-disable declaration-block-trailing-semicolon */

import React from "react";
import PropTypes from "prop-types";

class Image extends React.PureComponent {
  state = {
    webpSrc: ""
  };

  componentDidMount() {
    const { src } = this.props;

    this.setState({
      webpSrc: this.generateWebP(src)
    });
  }

  generateWebP = src => {
    if (typeof src === "string")
      return `
        ${src
          .split(".")
          .slice(0, -1)
          .join(".")}.webp
      `;

    return "";
  };

  render() {
    const { alt, title, src } = this.props;
    const { webpSrc } = this.state;
    let imageWebp;
    return (
      <picture onError={() => imageWebp.remove()}>
        <source
          srcSet={webpSrc}
          type="image/webp"
          ref={el => {
            imageWebp = el;
          }}
        />
        <source srcSet={src} />
        <img src={src} title={title} alt={alt} />
      </picture>
    );
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
