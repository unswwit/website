import React from "react";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div id="loadingBackground">
      <Image
        id="loadingWillow"
        src={`/walkingWillow.gif`}
        alt="Walking Willow the wombat"
        layout="fill"
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
