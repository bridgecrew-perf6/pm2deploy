import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// eslint-disable-next-line import/prefer-default-export
const usePlayer = ({ src, controls, autoplay, poster }) => {
  const options = {
    fill: true,
    fluid: true,
    preload: "auto",
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  };
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls,
      autoplay,
      sources: [src, poster],
    });
    setPlayer(vjsPlayer);

    return () => player !== null && player.dispose();
  }, []);

  useEffect(() => {
    if (player !== null) player.src({ src });
  }, [src]);

  return videoRef;
};

const UseVideoJS = ({ src, poster, controls, autoplay }) => {
  const playerRef = usePlayer({ src, poster, controls, autoplay });

  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js" />
    </div>
  );
};

UseVideoJS.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
};

UseVideoJS.defaultProps = {
  controls: true,
  autoplay: false,
};

export default UseVideoJS;
