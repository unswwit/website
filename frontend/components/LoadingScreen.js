import React from "react";

const LoadingScreen = () => {
  return (
    <div id="loadingBackground">
      <img
        id="loadingWillow"
        src={`${process.env.PUBLIC_URL}/walkingWillow.gif`}
        alt="Walking Willow the wombat"
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
