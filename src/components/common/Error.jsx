import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import errorGIF from "/public/error.json"

const Error = () => {
  return (
    <Player
      autoplay
      loop
      src={errorGIF}
      style={{ height: "300px", width: "300px" }}
    >
    </Player>
  );
};

export default Error;