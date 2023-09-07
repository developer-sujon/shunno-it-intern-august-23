import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import loadingGIF from "/public/loading.json"

const Loading = () => {
  return (
    <Player
      autoplay
      loop
      src={loadingGIF}
      style={{ height: "300px", width: "300px" }}
    >
    </Player>
  );
};

export default Loading;
