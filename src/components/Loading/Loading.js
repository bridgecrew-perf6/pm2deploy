import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({
  size,
  text
}) => {
  return (
    <span className="loading" {...props}></span>
  )
}

Loading.defaultProps = {
  type: "unknown",
  size: "m",
  position: ""
}

Loading.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string
}

export default Loading;