import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import image from "./ghw.jpg";
import style from "./GHW.module.scss";

const GHW = ({ secondaryStyle, isFixed }) => (
  <div
    className={`${style.ghw__wrapper} ${
      secondaryStyle ? style["ghw--secondary"] : ""
    } 
    ${isFixed ? style["ghw--fixed"] : ""}
    `}
  >
    <img className={style.ghw__img} src={image} alt="ghw" />
    <div className={style.ghw__text}>
      <b>PERINGATAN:</b>
      <br />
      <div className={style.ghw__textin}>
        KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN.&nbsp;
      </div>
      <div className={style.ghw__textin}>
        LAYANAN BERHENTI MEROKOK
        <span className={style.ghw__nostyle}>(0800-177-6565)</span>
      </div>
    </div>
    <div className={style.ghw__18} />
  </div>
);

const GHWBody = () =>
  ReactDOM.createPortal(
    <div style={{ opacity: 0 }}>
      <GHW />
    </div>,
    document.body
  );

const GHWWrapper = ({ secondaryStyle, isFixed }) => (
  <>
    {isFixed ? <GHWBody /> : null}
    <GHW secondaryStyle={secondaryStyle} isFixed={isFixed} />
  </>
);

GHWWrapper.defaultProps = {
  secondaryStyle: false,
  isFixed: false
};

GHWWrapper.propTypes = {
  secondaryStyle: PropTypes.bool,
  isFixed: PropTypes.bool
};

export default GHWWrapper;
