import React from "react";
import Page from "../../components/Page/Page";
import Style from "./Home.module.scss";
import Heading from "../../components/Heading/Heading";

const propsHome = { setHeader: { setClass: "gap" } };

class Home extends React.Component {
  render() {
    return (
      <Page {...propsHome}>
        <section className={Style.Home__challenge}>
          <div className="G__content">
            <div className={Style.heading}>
              <Heading text="BIKIN GAYA JADI NYATA" setClass="large center" />
            </div>
            <div className={Style.subtitle}>
              Bikin Barang Pilihan Lo Jadi Timeless!
            </div>
          </div>
        </section>
        <section className={Style.Home__inspirasi}>Home Inspirasi</section>
      </Page>
    );
  }
}

export default Home;
