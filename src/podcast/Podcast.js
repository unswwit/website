import React, { useState, useEffect } from "react";
import PageHeader from "../header";
import styles from "./Podcast.module.css";
import EpisodeTemplate from "./EpisodeTemplate";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabletop from "tabletop";
import ScrollUpBtn from "../components/ScrollUpBtn";
import LoadingScreen from "../LoadingScreen";

const Podcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const links = {
    anchor: ["podcast-anchor.png", "https://anchor.fm/unswwit"],
    radioRepublic: [
      "podcast-radio-republic.png",
      "https://radiopublic.com/talk-wit-us-Ww3A3m",
    ],
    google: [
      "podcast-google-podcasts.png",
      "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zNTQxM2JkMC9wb2RjYXN0L3Jzcw==",
    ],
    spotify: [
      "podcast-spotify.png",
      "https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P",
    ],
    pocketCasts: ["podcast-pocket-casts.png", "https://pca.st/kzc50ug6"],
    breaker: ["podcast-breaker.png", "https://www.breaker.audio/talk-wit-us"],
  };
  const [initialLoading, setinitialLoading] = React.useState(true);
  const [sourceLoading, setSourceLoading] = React.useState(true);
  const [coverPhoto, setCoverPhoto] = React.useState(null);

  // control when to stop loading
  useEffect(() => {
    const img = new Image();
      img.src = "/headers/header-1.jpg";
      img.onload = () => {     
        setCoverPhoto(img.src);
        setTimeout(() => {
          setSourceLoading(false);
        }, 1000);
      }
  }, [])  

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0,0);

    // load podcast episode previews
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        const unsorted = googleData["podcast-episodes"]["elements"];
        const sortedEpisodes = unsorted.reverse();
        setEpisodes(sortedEpisodes);
        setLoading(false);
      },
      simpleSheet: false
    })
  }, []);

  return (
    <div>
    {sourceLoading ? (
      <LoadingScreen />
    )
      :
      (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/podcast-header.jpg" title="Podcast" />
      <div id={styles.podcastIntroduction}>
        <div className={styles.logoContainer}>
          <img
            className={styles.podcastLogo}
            src="/podcast-logos/talk-WIT-us-logo.png"
            alt="Talk WIT Us logo"
          />
        </div>
        <div id={styles.introDescription}>
          <h2 id={styles.heading}>Talk WIT Us</h2>
          <p>
            Join us each month as we talk all about tech, uni, and life,
            featuring our wonderful WIT team and some special guests!
          </p>
          <div id={styles.platformContainer}>
            {Object.keys(links).map((link, index) => {
              return (
                <a
                  key={index}
                  href={links[link][1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.platformLogos}
                    src={`${process.env.PUBLIC_URL}/podcast-logos/${links[link][0]}`}
                    alt={link}
                    width="25px"
                    height="25px"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div id={styles.podcastLoadingContainer}>
        {loading && (
          <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.podcastLoading}
          />
        )}
      </div>

      <div id={styles.episodes}>
        {episodes.map((episode, index) => {
          return (
            <EpisodeTemplate
              key={index}
              episodeNo={episode.episodeNo}
              title={episode.title}
              cover={`podcast-covers/${episode.img}`}
              date={episode.date}
              description={episode.description}
            />
          );
        })}
    
      </div>    
      <ScrollUpBtn/>
    </>
  )}</div>
  );
};
export default Podcast;
