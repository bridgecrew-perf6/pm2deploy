import React from "react";
import Style from "./Video.module.scss";

class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      is15: false,
      is50: false,
      is75: false,
      isFinish: false,
      curTime: 0,
    };
    this.refVideo = React.createRef();
  }

  componentDidMount() {
    const video = this.refVideo;
    if (video) video.addEventListener("timeupdate", () => this.trackTime());
  }

  componentDidUpdate(prevProps) {
    const { forcedplay: prevForcedplay, src: prevSrc } = prevProps;
    const { forcedplay, src } = this.props;
    if (forcedplay !== prevForcedplay) {
      if (forcedplay === "true") this.doPlay();
      else {
        this.reset();
        this.pause();
      }
    }
    if (prevSrc !== src) {
      this.resetState();
      this.pause();
      this.refVideo.load();
      if (forcedplay === "true") this.doPlay();
    }
  }

  componentWillUnmount() {
    this.refVideo = null;
  }

  resetState = () => {
    this.setState({
      isPlay: false,
      is15: false,
      is50: false,
      is75: false,
      isFinish: false,
    });
  };

  returnProgress = (evLabel) => {
    const { progress } = this.props;
    if (progress && typeof progress === "function") progress(evLabel);
  };

  trackTime = () => {
    const video = this.refVideo;
    if (video) {
      this.setState({ curTime: video.currentTime });
      const { is15, is50, is75, isFinish } = this.state;
      const { looping, onfinish } = this.props;

      const curTime = video.currentTime;
      const durTime = video.duration;
      const time15 = curTime >= durTime * 0.25;
      const timeHalf = curTime >= durTime * 0.5;
      const time75 = curTime >= durTime * 0.75;
      const timeEnd = curTime >= durTime * 1;

      const doTime = (state, evLabel) => {
        this.setState({ [state]: true });
        this.returnProgress(evLabel);
        if (state === "isFinish" && onfinish) onfinish();
      };

      if (!is15 && time15) doTime("is15", "25%");
      else if (!is50 && timeHalf) doTime("is50", "50%");
      else if (!is75 && time75) doTime("is75", "75%");
      else if (!isFinish && timeEnd) doTime("isFinish", "completed");

      if (timeEnd) {
        if (looping === "true") this.loop();
        this.setState({ isPlay: false });
      }
    }
  };

  reset = () => {
    const video = this.refVideo;
    video.currentTime = 0;
    this.setState({ curTime: 0 });
  };

  pause = () => this.refVideo.pause();

  doPlay = () => {
    const player = this.refVideo;
    const isPause = player && player.paused;
    if (isPause) {
      player.play();
      this.returnProgress("play");
    } else player.pause();
    this.setState({ isPlay: isPause });
  };

  loop = () => {
    this.reset();
    this.doPlay();
  };

  getPlayBtn = () => {
    const { noplaybtn } = this.props;
    const props = { className: Style.playBtn, onClick: this.doPlay };
    return noplaybtn === "true" ? "" : <button {...props}>play</button>;
  };

  filterVideoProps = () => {
    const { props } = this;
    const { controls, src, loop, muted, poster, preload, title } = props;
    const copyProps = { controls, src, loop, muted, poster, preload, title };
    return copyProps;
  };

  viewTime = () => {
    const { curTime } = this.state;
    const duration = this.refVideo && this.refVideo.duration;
    const showTime = parseInt(duration - curTime, 10) || 0;
    let timeView = showTime;
    if (showTime > 60) timeView = `1:${showTime - 60}`;
    return <div className={Style.duration}>{timeView}</div>;
  };

  render() {
    const { src, type, preload, nocurtain, controls: conProps } = this.props;
    const { forcedPause } = this.props;
    const { isPlay } = this.state;

    const clsMod = !isPlay ? Style.disabled : "";
    const clsCurtain = nocurtain === "true" ? Style.nocurtain : "";

    const isLocal = process.env.REACT_APP_ENVIRONMENT === "local";
    // const isStaging = process.env.REACT_APP_ENVIRONMENT === "staging";
    // const isProd = process.env.REACT_APP_ENVIRONMENT === "production";
    const classNoTimeline = !isLocal ? Style.noTimeline : "";

    const clsVideo = `${Style.Video} ${clsCurtain} ${clsMod} ${classNoTimeline}`;

    // const controls = isPlay && conProps;
    const controls = false || conProps;
    const controlsList = "nodownload";
    const baseProps = { controlsList, controls, playsInline: true };
    const refProps = (v) => (this.refVideo = v);
    const filteredProps = this.filterVideoProps();
    const propsVideo = { ref: refProps, ...filteredProps, ...baseProps };

    if (forcedPause) this.pause();

    return (
      <div className={clsVideo}>
        <video preload={preload} {...propsVideo}>
          <source src={src} type={type} />
        </video>
        {this.viewTime()}
        {this.getPlayBtn()}
      </div>
    );
  }
}

Video.defaultProps = {
  preload: "none",
  title: "Video Title",
  controls: false,
  nocurtain: "true",
  muted: false,
  loop: false,
  forcedPause: false,
};

export default Video;
