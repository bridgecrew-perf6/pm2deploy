/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import Style from "./Loading.module.scss";

const Loading = ({ align }) => {
  const defClass = Style.Loading;
  const alignClass = align ? Style[align] : "";
  const fullClass = `${defClass} ${alignClass}`;
  return (
    <div className={fullClass}>
      <div className={Style.inner} />
    </div>
  );
};

export default Loading;
