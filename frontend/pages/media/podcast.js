import React, { useState, useEffect } from "react";
import PageHeader from "../../components/Header";
import styles from "../../styles/Podcast.module.css";
import EpisodeTemplate from "../../components/EpisodeTemplate";
import CircularProgress from "@mui/material/CircularProgress";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios";
import humps from "humps";
import { links } from "../../data/podcastData";
import Image from "next/image";

// TO UNCOMMENT WHEN REACH > 9 PODCASTS
// import PaginationComp from "../components/Pagination";

const Podcast = () => {
  // const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);
  // set how many posts to view per page
  // const postsPerPage = 9;
  // the posts displayed on the current page
  const [currentPosts, setCurrentPosts] = useState([]);

  // get podcasts
  // input: podcasts data from google sheets
  // output: array of dictionaries containing podcasts data
  const fetchPodcastEpisodes = async () => {
    const res = await axios.get(
      "https://wit-database.herokuapp.com/podcast-episodes"
    );
    const unsorted = humps.camelizeKeys(res.data);
    const sortedEpisodes = unsorted.reverse();
    // setEpisodes(sortedEpisodes);
    setCurrentPosts(sortedEpisodes);
    setLoading(false);
    setSourceLoading(false);
  };

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);

    // load podcast episode previews
    fetchPodcastEpisodes().catch((error) =>
      // error handling
      console.error(error)
    );
  }, []);

  
  // called when pagination item clicked to slice the correct amount of posts for viewing
  // const paginate = (pageNumber) => {
  //   setCurrentPosts(episodes.slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage));
  // }

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            headerLoading={setHeaderLoading}
            imgUrl="/headers/podcast-header.jpg"
            title="Podcast"
          />
          <div id={styles.podcastIntroduction}>
            <div className={styles.logoContainer}>
              <Image
                className={styles.podcastLogo}
                src="/../public/podcast-logos/talk-WIT-us-logo.png"
                alt="Talk WIT Us logo"
                height={250}
                width={250}
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
                      <Image
                        className={styles.platformLogos}
                        src={`/../public/podcast-logos/${links[link][0]}`}
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
          {/* <PaginationComp 
          totalPages={Math.ceil(currentPosts.length/postsPerPage)} 
          paginate={paginate}
        /> */}

          <ScrollUpBtn />
        </>
      )}
    </div>
  );
};
export default Podcast;
