import React from "react";
import { withRouter, Link } from "react-router-dom";
import Style from "./Page.module.scss";
import Header from "../Header/Header";

class Page extends React.PureComponent {
  getCls = (def, mod) => {
    const defCls = Style[def];
    let ret = defCls;
    if (mod) {
      const modCls = mod.split(" ").map(c => Style[c]);
      ret = `${ret} ${modCls.join(" ")}`;
    }
    return ret;
  };

  getContent = () => {
    const { children: element } = this.props;
    return (
      <section className={this.getCls("content__inner")}>{element}</section>
    );
  };

  getHeader = () => {
    const { setHeader } = this.props;
    return <Header {...setHeader} />;
  };

  render() {
    const { mode } = this.props;
    return (
      <section className={Style.page}>
        <div className={this.getCls("wrapper", mode)}>
          <div className={this.getCls("content__outer")}>
            {this.getHeader()}
            {this.getContent()}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Page);
