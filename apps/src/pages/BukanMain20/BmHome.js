import React from "react";
import Page from "../../components/Page/Page";
import { Link } from "react-router-dom";
import Style from "./BmHome.module.scss";
import Button from "../../components/Button/Button";
import { CardOne } from "../../components/Card/Card"
import { CardSliderOne } from "../../components/CardSlider/CardSlider";
import "../../scss/vendor.scss";

class BmHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  unbranded = () => {

    return (
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
    )
  }

  branded = () => {

    return (
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

            <div className={Style.bottom__article}>
                <div className={`${Style.article} ${Style.podcast}`}>
                    <div className={Style.podcast__top}>
                        <div className={Style.topImage}>
                            <img src="" alt="Avatar"/>
                        </div>
                        <span className={Style.topAuthor}>
                            Weekly Podcast by Soleh Solihun
                        </span>
                    </div>
                    <div className={Style.podcast__middle}>

                    </div>
                    <div className={Style.podcast__bottom}>
                        <span>
                            Janjian jam 9 tapi dateng jam 10? Bilang otw tapi masih di kasur?? 
                            Tonton Soleh Solihun bacain cerita lengkapnya di sini
                        </span>
                    </div>
                    <img src="" alt="Sticker" className={Style.sticker}/>
                </div>

                <div className={`${Style.article} ${Style.story}`}>
                    <div className={Style.story__top}>
                        <div className={Style.topImage}>
                            <img src="" alt="Avatar"/>
                        </div>
                        <span className={Style.title}>
                            Anak Baru Jakarta
                        </span>
                        <span className={Style.by}>
                            by Mamet, Bekasi
                        </span>
                    </div>
                    <div className={Style.story__bottom}>
                        <span className={Style.category}>
                            CERITA BUKAN MAIN
                        </span>
                        <span className={Style.content}>
                            Jadi kemarin temen gue ngajak meet up. Karena udah lama gak ketemu, gue pun setuju untuk nyamperin dia.
                            <br/>
                            Temen: “Ayo meet up, gue lagi di Jakarta nih. Daerah Rahmawati, Jaksel.”
                            <br/>
                            Gue: “ Fatmawati kali maksud lo?”
                            <br/>
                            Temen: “ Nah iya itu, maklum baru sehari gue di Jakarta.”
                        </span>
                    </div>
                    <img src="" alt="Sticker" className={Style.sticker}/>
                </div>
            </div>
        </div>
    )
  }

  render() {
    const dummyData = [
        {
            link:"#",
            type:"video",
            img:"/assets/image/BaseElement/sample-card.png",
            subtitle:"CERITA #1",
            title:"Kesana Kemari Bikin Hepi Jadi Keki",
        },
        {
            link:"#",
            type:"video",
            img:"/assets/image/BaseElement/sample-card.png",
            subtitle:"CERITA #1",
            title:"Kesana Kemari Bikin Hepi Jadi Keki",
        },
        {
            link:"#",
            type:"video",
            img:"/assets/image/BaseElement/sample-card.png",
            subtitle:"CERITA #1",
            title:"Kesana Kemari Bikin Hepi Jadi Keki",
        },
        {
            link:"#",
            type:"video",
            img:"/assets/image/BaseElement/sample-card.png",
            subtitle:"CERITA #1",
            title:"Kesana Kemari Bikin Hepi Jadi Keki",
        },
        {
            link:"#",
            type:"video",
            img:"/assets/image/BaseElement/sample-card.png",
            subtitle:"CERITA #1",
            title:"Kesana Kemari Bikin Hepi Jadi Keki",
        },
        {
            link:"#",
            type:"video",
            img:"/assets/image/BaseElement/sample-card.png",
            subtitle:"CERITA #1",
            title:"Kesana Kemari Bikin Hepi Jadi Keki",
        },
    ]
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
                        {/* <CardOne
                            link="#"
                            type="video"
                            img="/assets/image/BaseElement/sample-card.png"
                            subtitle="CERITA #1"
                            title="Kesana Kemari Bikin Hepi Jadi Keki"
                        /> */}
                        <CardSliderOne 
                            data={dummyData}
                            isMobile={true}
                        />
                    </div>
                </div>

            </div>

            {this.unbranded()}
          </section>
      </Page>
  )
  }
}

export default BmHome;
