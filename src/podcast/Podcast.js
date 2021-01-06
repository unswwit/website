import React from "react";
import PageHeader from "../header";
import styles from "./Podcast.module.css";
import EpisodeTemplate from "./EpisodeTemplate";

const Podcast = () => {
  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/podcast-header.jpg" title="Podcast" />
      <div id={styles.podcastIntroduction}>
        <div className={styles.logoContainer}>
          <img className={styles.podcastLogo} src="/podcast-logos/talk-WIT-us-logo.png" alt="Talk WIT Us logo" />
        </div>
        <div id={styles.introDescription} >
          <h2>
            Talk WIT Us
          </h2>
          <p>
            Join us every Monday as we talk all about tech, uni, and life, featuring our wonderful WIT team and some special guests!
          </p>
        </div>         
      </div>    
      <div id={styles.episodes}>
        <EpisodeTemplate title="Welcome" cover="podcast-covers/episode-1-cover.png" date="September 19 2020" description="Wit is thrilled" />
      </div>    
    </>
  );
};
export default Podcast;