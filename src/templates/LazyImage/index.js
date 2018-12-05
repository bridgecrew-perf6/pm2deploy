import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import style from "./LazyImage.module.scss";

// const sampleImage = {
//   url:
//     "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=1a6782be5cdb94b780ed9d4a79de7041",
//   width: 600,
//   height: 400,
//   alt: "sample image"
// };

// class LazyLoad extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//       src: this.placeholderSrc(props.img)
//     };
//     this.loadImage = this.loadImage.bind(this);
//   }

//   loadImage(e) {
//     this.setState({
//       src: this.props.img.url,
//       loaded: true
//     });
//   }

//   placeholderSrc(img) {
//     let { width, height } = img;
//     return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
//   }

//   render() {
//     const { url, alt } = this.props.img;
//     const { src } = this.state;
//     return (
//       <React.Fragment>
//         <img src={src} data-src={url} alt={alt} />
//         {!this.state.loaded && (
//           <button onClick={this.loadImage} type="button">
//             Load Image
//           </button>
//         )}
//       </React.Fragment>
//     );
//   }
// }

const LazyImage = ({ alt, title, src, placeholder }) => (
  <div className={style.lazy}>
    <LazyLoad offset={150} placeholder={placeholder}>
      <img alt={alt} title={title} src={src} />
    </LazyLoad>
  </div>
);

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.element
};

LazyImage.defaultProps = {
  placeholder: <div className={style.lazy__loading}> Loading...</div>
};

export default LazyImage;
