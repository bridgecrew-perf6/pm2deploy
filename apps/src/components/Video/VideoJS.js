import React from "react";
import videojs from "video.js";
import eventTracking from "videojs-event-tracking";
import "video.js/dist/video-js.css";
import { isFunction } from "../../helpers/util";
import "./SkinVideoJS.scss";

class VideoJS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const node = this.videoNode;
    const options = { ...this.props };
    const obj = { ...options, plugins: { eventTracking } };
    this.player = videojs(node, obj, this.onReady);
  }

  componentWillUnmount() {
    if (this.player) this.player.dispose();
  }

  progress = (step) => {
    const { onProgress } = this.props;
    const hasProgress = onProgress && isFunction(onProgress);
    if (hasProgress) onProgress(step);
  };

  onReady = () => {
    const { progress } = this;
    this.player.on("tracking:firstplay", () => progress("0"));
    this.player.on("tracking:pause", () => progress("pause"));
    this.player.on("tracking:first-quarter", () => progress("25"));
    this.player.on("tracking:second-quarter", () => progress("50"));
    this.player.on("tracking:third-quarter", () => progress("75"));
    this.player.on("tracking:fourth-quarter", () => progress("100"));

    // i don't know what is this, but i found note about this --- Jojo
    this.player.on("tracking:performance", (e, data) =>
      console.log("PERFORMANCE TRACKED !!!", { e }, { data })
    );
  };

  element = () => {
    const ref = (node) => (this.videoNode = node);
    const className = "video-js vjs-marlboro-skin";
    return { ref, className };
  };

  render() {
    const { title } = this.props;
    return (
      <div data-vjs-player title={title}>
        <video {...this.element()} title={title}>
          <source src={this.props.src} type="video/mp4" />
        </video>
      </div>
    );
  }
}

// configuration on default props for securely component
VideoJS.defaultProps = {
  aspectRatio: "19:9",
  fill: true,
  preload: "auto",
  controls: true,
  type: "video/mp4",
  html5: {
    hls: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true,
    },
  },
};

export default VideoJS;
