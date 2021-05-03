import React, { useRef } from "react";
import "./CardSlider.scss";
import { Link } from "react-router-dom";
import { CardOne } from "../../components/Card/Card"
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

const CardSliderOne = ({
    data,
    isMobile
}) => {
    const optionMobile = {
        slidesPerView: 'auto',
        // slidesPerView: 1.35,
        spaceBetween: 12,
        centeredSlides: false,
        rebuildOnUpdate: true,
        // noSwiping: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
    };
    const optionDesktop = {
        slidesPerView: 1.3,
        spaceBetween: 10,
        centeredSlides: true,
        rebuildOnUpdate: true,
        noSwiping: false,
    };
    // const option = isMobile ? optionMobile : optionDesktop;
    const option = optionMobile;
    return (
        <>
            <Swiper 
                {...option}
            >
                {data.map((item, index) => (
                    <div key={index} className="sliderCardOne">
                        <CardOne
                            link={item.link}
                            type={item.type}
                            img={item.img}
                            subtitle={item.subtitle}
                            title={item.title}
                        />
                    </div>
                ))}
                <div className="ghostCard"></div>
            </Swiper>
        </>
    )
}

export {
    CardSliderOne,
}