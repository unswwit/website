import React, { useState, useEffect } from "react";
import PageHeader from "../components/header";
import styles from "./Podcast.module.css";
import EpisodeTemplate from "./EpisodeTemplate";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabletop from "tabletop";
import ScrollUpBtn from "../components/ScrollUpBtn";
import LoadingScreen from "../components/LoadingScreen";
// TO UNCOMMENT WHEN REACH > 9 PODCASTS
// import PaginationComp from "../components/Pagination";

const Podcast = () => {
  //const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);
  // set how many posts to view per page
  //const postsPerPage = 9;
  // the posts displayed on the current page
  const [currentPosts, setCurrentPosts] = useState([]);

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

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);

    // load podcast episode previews
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        const unsorted = googleData["podcast-episodes"]["elements"];
        const sortedEpisodes = unsorted.reverse();
        //setEpisodes(sortedEpisodes);
        setCurrentPosts(sortedEpisodes);
        setLoading(false);
        setSourceLoading(false);
      },
      simpleSheet: false,
    });
  }, []);

  /*
  // called when pagination item clicked to slice the correct amount of posts for viewing
  const paginate = (pageNumber) => {
    setCurrentPosts(episodes.slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage));
  }
  */

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader headerLoading={setHeaderLoading} imgUrl="/headers/podcast-header.jpg" title="Podcast" />
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
            {currentPosts.map((episode, index) => {
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
          {/* TO UNCOMMENT WHEN REACH > 9 PODCASTS */}
          {/*<PaginationComp 
          totalPages={Math.ceil(currentPosts.length/postsPerPage)} 
          paginate={paginate}
        />*/}

          <ScrollUpBtn />
        </>
      )}
    </div>
  );
};
export default Podcast;
