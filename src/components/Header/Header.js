import React from "react";
import { Link } from "react-router-dom";
import Style from "./Header.module.scss";

const Logo = () => (
  <div className={Style.Header__logo}>
    <img
      alt="Logo Go A Head"
      title="Logo Go A Head"
      src="/assets/image/element/logo-go-a-head.svg"
    />
  </div>
);

const Login = () => (
  <div className={Style.Header__login}>
    <div className={Style.HL__icon}></div>
    <div className={Style.HL__text}>
      <Link to="/login">LOGIN</Link>
    </div>
  </div>
);

class Header extends React.PureComponent {
  getCls = (def, cls) => {
    const defCls = Style[def];
    let ret = defCls;
    if (cls) {
      const modCls = cls.split(" ").map(c => Style[c]);
      ret = `${ret} ${modCls.join(" ")}`;
    }
    return ret;
  };

  render() {
    const { setClass } = this.props;
    return (
      <header className={this.getCls("Header", setClass)}>
        <div className={this.getCls("Header__wrapper")}>
          <Logo></Logo>
          <Login></Login>
        </div>
      </header>
    );
  }
}

export default Header;
