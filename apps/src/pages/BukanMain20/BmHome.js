import React from "react";
import Page from "../../components/Page/Page";
import { Link } from "react-router-dom";
import Style from "./BmHome.module.scss";
import Button from "../../components/Button/Button";
import { CardOne } from "../../components/Card/Card"
import { CardSliderOne } from "../../components/CardSlider/CardSlider";

class BmHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page
      
      >
          <section className={Style.bmContainer}>
            <div className={Style.top}>
                <img src={"./assets/image/BukanMain20/bg-illustration-M.png"}  className={Style.topHeading__people} />
                
                {/* Button Back */}
                <div className={Style.topBtn}>
                    <Button
                        setclass="btnBack"
                    >
                        <img src="/assets/image/BaseElement/Chevron/Rectangle 25.png" alt="Back Arrow" />
                        <span>back</span>
                    </Button>
                </div>

                <div className={Style.topHeading}>
                    <h1 className={Style.topHeading__title}>
                        Bukan Main <span>2.0</span>
                    </h1>
                    <p className={Style.topHeading__subtitle}>
                        Temukan cerita absurd
                        sehari-hari dan dapetin
                        kesempatan keren kalau
                        lo submit cerita lo!
                    </p>
                </div>

                <div className={Style.topContent}>
                    <span className={Style.topContent__title}>
                        <span className={Style.one}>KUMPULAN CERITA</span> 
                        <span className={Style.two}>BUKAN MAIN</span>
                    </span>
                    <div id="bmSlider" className={Style.bmSlider}>
                        <CardOne
                            link="#"
                            type="video"
                            img="/assets/image/BaseElement/sample-card.png"
                            subtitle="CERITA #1"
                            title="Kesana Kemari Bikin Hepi Jadi Keki"
                        />
                        <CardSliderOne 
                            link="#"
                            type="video"
                            img="/assets/image/BaseElement/sample-card.png"
                            subtitle="CERITA #1"
                            title="Kesana Kemari Bikin Hepi Jadi Keki"
                        />
                    </div>
                </div>

            </div>
            <div className={Style.bottom}>
                <span className={Style.bottom__heading}>
                    Galeri Gimana<span>2</span>
                </span>

                <div className={Style.bottom__title}>
                    <span className={Style.titleLeft}>
                        KIRIMAN BUKAN MAIN
                    </span>
                    <span className={Style.titleRight}>
                        Dosis konten-konten <i> absurd </i> mingguan lo
                    </span>
                </div>

                {/* FOR UNBRANDED */}
                <div className={Style.bottom__unbranded}>
                    <span className={Style.unbrandedText}>
                        <strong>Tonton dan Bercerita </strong> buat dapetin sesuatu yang waw!
                    </span>
                    <Link
                        to="#"
                        className={Style.unbrandedLink}
                    >
                        <span>LOGIN DISINI</span>
                    </Link>
                </div>
            </div>
          </section>
      </Page>
  )
  }
}

export default BmHome;
