import React from "react";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div id="loadingBackground">
      <Image
        id="loadingWillow"
        src={`${process.env.PUBLIC_URL}/walkingWillow.gif`}
        alt="Walking Willow the wombat"
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
