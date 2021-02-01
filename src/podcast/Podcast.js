import React, { useState, useEffect } from "react";
import PageHeader from "../header";
import styles from "./Podcast.module.css";
import EpisodeTemplate from "./EpisodeTemplate";
import database from "../config/firebase";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabletop from "tabletop";

const Podcast = () => {
  const db = database.firestore();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        setEpisodes(googleData["podcast-episodes"]["elements"]);
        setLoading(false);
      },
      simpleSheet: false
    })
    /*
    db
      .collection("podcast-previews")  
      .orderBy("episode", "desc")
      .get()
      .then(querySnapshot => {
        let tempEpisodes = [];
        querySnapshot.forEach(doc => {          
          let episode = doc.data();
          episode["id"] = doc.id;
          tempEpisodes.push(episode);
        });
        setEpisodes(tempEpisodes);
      });*/
  }, [db]);

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/podcast-header.jpg" title="Podcast" />
      <div id={styles.podcastIntroduction}>
        <div className={styles.logoContainer}>
          <img className={styles.podcastLogo} src="/podcast-logos/talk-WIT-us-logo.png" alt="Talk WIT Us logo" />
        </div>
        <div id={styles.introDescription} >
          <h2 id={styles.heading}>
            Talk WIT Us
          </h2>
          <p>
            Join us each month as we talk all about tech, uni, and life, featuring our wonderful WIT team and some special guests!
          </p>
        </div>         
      </div>  
        
      <div id={styles.podcastLoadingContainer}>
        {loading && <CircularProgress
          variant="indeterminate"
          size={50}
          thickness={5}
          id={styles.podcastLoading}
        />}
      </div>

      <div id={styles.episodes}>
        {episodes.map((episode, index) => {
          return <Link
            key={index} 
            to={`/podcast/${episode.episodeNo}`}
            style={{ textDecoration: "none" }}
          >
            <EpisodeTemplate 
              title={episode.title} 
              cover={`podcast-covers/${episode.img}`} 
              date={episode.date} 
              description={episode.description} 
            />
          </Link>
        })}
      
      </div>    
    </>
  );
};
export default Podcast;