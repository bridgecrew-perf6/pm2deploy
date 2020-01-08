import React from "react";
import Style from "./Heading.module.scss";

class Heading extends React.PureComponent {
  state = {};

  getCls = def => {
    const defCls = Style[def];
    const { setClass: mod } = this.props;
    let ret = defCls;
    if (mod) {
      const modCls = mod.split(" ").map(c => Style[c]);
      ret = `${ret} ${modCls.join(" ")}`;
    }
    console.log(ret);
    return ret;
  };

  render() {
    const { text } = this.props;
    return <div className={this.getCls("Heading")}>{text}</div>;
  }
}

export default Heading;
