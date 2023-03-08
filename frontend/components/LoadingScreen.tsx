// @ts-nocheck comment
import React from 'react';
import Image from "next/legacy/image";

const LoadingScreen = () => {
  return (
    <div id="loadingBackground">
      <Image
        id="loadingWillow"
        src="/walkingWillow.gif"
        alt="Walking Willow the wombat"
        height="300"
        width="300"
        priority="true"
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
