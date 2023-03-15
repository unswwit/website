// @ts-nocheck comment
import React from 'react';

const LoadingScreen = () => {
  return (
    <div id="loadingBackground">
      <img
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
