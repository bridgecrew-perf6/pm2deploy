import React from "react";
import Style from "./Card.module.scss";
import { Link } from "react-router-dom";

const CardOne = ({
    link,
    type,
    img,
    subtitle,
    title,
}) => {
    const classType = type === "video" ? `${Style.cardOne__figure} ${Style.video}` : Style.cardOne__figure;

    return (
        <div className={Style.cardOne}>
            <Link to={link} className={Style.cardOneLink}>
                <div className={classType}>
                    <img src={img} className={Style.figureImg} alt={title} />
                </div>
                <div className={Style.cardOne__item}>
                    <span className={Style.itemSub}>{subtitle}</span>
                    <span className={Style.itemTitle}>{title}</span>
                </div>
            </Link>
        </div>
    )
}

const CardTwo = ({
    link,
    type,
    img,
    subtitle,
    title,
}) => (
    <Link to={link} className={Style.cardOneLink}>
        <div className={Style.cardOne}>
            <div className={Style.cardOne__figure}>
                <img src={img} className={Style.figureImg} alt={title} />
            </div>
            <div className={Style.cardOne__item}>
                <span className={Style.itemSub}>{subtitle}</span>
            </div>
        </div>
    </Link>
);

export { 
    CardOne,
    CardTwo
}
