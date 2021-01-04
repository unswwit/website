import React from "react";
import PageHeader from "../header";
import styles from "./Podcast.module.css";

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
        <div id={styles.episodes}>
          
        </div>    
      </div>
    
    </>
  );
};
export default Podcast;