import React, { useState } from "react";
import useVisibility from "react-use-visibility";
import { useHistory } from "react-router-dom";
import Style from "./ThumbnailSeries.module.scss";
import { pushDataLayer, getFormattedDate } from "../../helpers/util";

// to={`/webseries/${target}`}

function ThumbnailSeries(props) {
  const { target, cover, time, episode, title, date } = props;
  const { description, published, index, isBranded, id } = props;
  const { usedBy, throwDatalayer, dayNow } = props;
  // const isNew = (props && props.isNew) || false;
  const history = useHistory();

  let onClick = target;
  let cont = "Episode Selanjutnya";
  if (usedBy) cont = "Web Series in Trailer Page";
  const creative = `/webseries/${target}`;
  const position = `${index + 1} - ${cont}`;
  const promotions = [{ id, name: title, creative, position }];

  const thumbRef = React.useRef();
  const isVisible = useVisibility(thumbRef.current);
  const [hasSeen, setSeen] = useState(false);

  const newDate = new Date(date);
  const convDate = newDate.getDate();
  const convMonth = newDate.getMonth() + 1;
  const convPubDate = `${convDate} ${convMonth}`;
  // console.log({ dayNow }, { convPubDate }, { date });

  const isNew = convPubDate === dayNow && published === "Published";
  // console.log({ convPubDate }, { dayNow });

  // React.useEffect(() => {
  //   console.log(thumbRef.current);
  // }, [thumbRef]);

  React.useEffect(() => {
    if (isVisible && !hasSeen && typeof throwDatalayer === "function") {
      throwDatalayer({ promotions });
      setSeen(true);
    }
  }, [isVisible]);

  const openWebSeries = () => {
    pushDataLayer({
      event: "promotionClick",
      contentType: "video",
      contentCategory: "Webseries - Global",
      contentBrand: isBranded && isBranded !== "" ? "Branded" : "Unbranded",
      ecommerce: {
        promoClick: { promotions },
      },
    });
    history.push(`/webseries/${target}`);
  };

  if (typeof target === "string") onClick = openWebSeries;
  const dateFormatted = getFormattedDate(date.slice(0, 10));
  let dateView = "COMING SOON";

  const convertTime = new Date(time * 1000).toISOString().substr(14, 5);
  let classThumb = `${Style.videoThumb} ${Style.videoGray}`;

  let clickThumb = () => false;

  if (published === "Published") {
    classThumb = Style.videoThumb;
    clickThumb = onClick;
    dateView = `Publish on ${dateFormatted}`;
  }

  return (
    <div className={Style.videoContent} onClick={clickThumb} ref={thumbRef}>
      <div className={Style.videoWrapper}>
        <img alt={`Cover ${title}`} className={classThumb} src={cover} />
        <div className={Style.videoTime}>{convertTime}</div>
        <div className={Style.videoDate}>{dateView}</div>
        {isNew && <div className={Style.videoNew}>NEW EPISODE</div>}
        <img
          alt="Play Button"
          className={Style.playBtn}
          src="/assets/play-border-filled@3x.png"
        />
        <div className={Style.videoMeta}>
          <div className={Style.videoEpisode}>
            EP {episode < 10 && "0"}
            {episode}
          </div>
          <div className={Style.videoTitle}>{title}</div>
          <div
            className={Style.videoDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}

export default ThumbnailSeries;
