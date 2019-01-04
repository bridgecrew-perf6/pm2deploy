import React from "react";
import image from "./ghw.jpg";
import style from "./GHW.module.scss";

const GHW = ({ secondaryStyle }) => (
  <div
    className={`${style.ghw__wrapper} ${
      secondaryStyle ? style["ghw--secondary"] : ""
    }`}
  >
    <img className={style.ghw__img} src={image} alt="ghw" />
    <div className={style.ghw__text}>
      <b>PERINGATAN:</b>
      <br />
      <div className={style.ghw__textin}>
        KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN.
      </div>{" "}
      <div className={style.ghw__textin}>
        LAYANAN BERHENTI MEROKOK (0800-177-6565)
      </div>
    </div>
    <div className={style.ghw__18} />
  </div>
);

export default GHW;
