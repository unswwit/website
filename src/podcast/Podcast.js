import React, { useState, useEffect } from "react";
import PageHeader from "../header";
import styles from "./Podcast.module.css";
import EpisodeTemplate from "./EpisodeTemplate";
import database from "../config/firebase";
import { Link } from "react-router-dom";

const Podcast = () => {
  const db = database.firestore();
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    // set podcast episodes
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
      });
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
      <div id={styles.episodes}>
        {episodes.map((episode) => {
          return <Link
            key={episode.id} 
            to={{
              pathname: "/podcast/" + episode.episode,
              title: episode.title,
              date: episode.date,
              overview: episode.description,
            }}
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