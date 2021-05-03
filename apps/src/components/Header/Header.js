/* eslint linebreak-style: ["error", "unix"] */

import React from "react";
import { withRouter, Link } from "react-router-dom";
import Style from "./Header.module.scss";
// import HeaderBase from "./HeaderBase";

class Header extends React.PureComponent {
  state = { burgerOpen: false };

  clickBurger = () => {
    const { burgerOpen } = this.state;
    this.setState({ burgerOpen: !burgerOpen });
  };

  render() {
    const { burgerOpen } = this.state;

    if (burgerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const clsShow = burgerOpen ? "show" : "";
    const clickBurger = this.clickBurger;
    const propsBase = { burgerOpen, clsShow, clickBurger, ...this.props };
    return (
      <>
        <nav className={Style.nav}>
          <Link
            to="#"
            className={Style.nav__logo}
          >
            Beranda
          </Link>

          <button 
            type="button"
            className={Style.nav__burger} 
          >
            <div className={Style.stripe} />
            <div className={Style.stripe} />
            <div className={Style.stripe} />
          </button>
        </nav>
      </>
    );
  }
}

export default withRouter(Header);
