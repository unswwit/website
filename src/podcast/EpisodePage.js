import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PageHeader from "../header";
// import database from "../config/firebase";
import ReactMarkdown from "react-markdown";
import Tabletop from "tabletop";
// import { Link } from "react-router-dom";
import styles from "./Podcast.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: "uppercase",
    color: "#e85f5c",		
  },
}));

const EpisodePage = (props) => {
  const classes = useStyles();
  // const db = database.firestore();
  const [episode, setEpisode] = useState({});
  const [episodeNumber, setEpisodeNumber] = useState("0");
  /* const [episodeNav, setEpisodeNav] = useState({
    next: "",
    prev: ""
  })*/
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(true);
  const platforms = ["anchor", "radioRepublic", "google", "spotify", "breaker"];
  const links = { 
    anchor: "podcast-anchor.png",
    radioRepublic: "podcast-radio-republic.png",
    google: "podcast-google-podcasts.png",
    spotify: "podcast-spotify.png",
    breaker: "podcast-breaker.png",
  };


  // retrieve current episode content
  const handleEpisodeNumber = () => {
    let url = window.location.href.split("/");
    setEpisodeNumber(url[url.length - 1]);
    return url[url.length - 1];
  };
  
  useEffect(() => {
    setLoading(true);
    const currEpisodeNo = handleEpisodeNumber();
    
    // importing transcript
    let tempTranscript = "";
    try {
      tempTranscript = require(`./transcripts/podcast-episode-${currEpisodeNo}.md`);
      fetch(tempTranscript)
        .then(response => response.text())
        .then(response => setTranscript(response))
    } catch {
      setTranscript("");
    }

    // importing podcast episode
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        const currEpisode = googleData["podcast-episodes"]["elements"].filter((episode) => {
          return episode.episodeNo === currEpisodeNo;
        })[0];
        setEpisode(currEpisode);
        setLoading(false);
      },
      simpleSheet: false
    })
  }, [episodeNumber]);

  return (
    <>
      <PageHeader imgUrl="/headers/podcast-header.jpg" title={`Podcast Episode #${episodeNumber}`} />
      
      {loading && <div id={styles.podcastLoadingContainer}>
        <CircularProgress
          variant="indeterminate"
          size={50}
          thickness={5}
          id={styles.podcastLoading}
        />
      </div>}
    
      {!loading && <div id={styles.episodeContainer}>
        {/* Episode Navigation */}
        {/* <div>
          {episodeNav.prev && <Link to={`/podcast/${episodeNumber - 1}`} onClick={() => handleEpisodeNumber()}>Previous Episode:{episodeNav.prev}</Link>}
          {episodeNav.next && <Link to={`/podcast/${episodeNumber + 1}`} onClick={() => handleEpisodeNumber()}>Next Episode:{episodeNav.next}</Link>}        
        </div> */} 

        {/* Episode content */}
        <h2>{episode.title}</h2>
        <p id={styles.episodeDate}>{episode.date}</p>
        
        {/* Podcast Episode Audio Player */}
        <iframe 
          title={episode.title} 
          src={episode.link} 
          width="100%" 
          height="232" 
          frameBorder="0" 
          allowtransparency="true" 
          allow="encrypted-media"
        ></iframe>

        {/* Podcast Episode Links */}
        <div className={styles.platforms}>
          {platforms.map((platform) => {
            return <a
              href={episode[platform]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                className={styles.sourceLogos}
                src={`${process.env.PUBLIC_URL}/podcast-logos/${links[platform]}`} 
                alt={platform} 
                width="25px" 
                height="25px" 
              />
            </a>
          })}
        </div>
      
        <h2>Overview</h2>
        <p id={styles.overview}>{episode.description}</p>
             
        {/* Podcast Episode Transcript */}
        {false && 
        <>
          <h2>Transcript</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>View Transcript</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ReactMarkdown children={`${transcript}`} />
              </Typography>
            </AccordionDetails>
          </Accordion>    
          <div class="sharethis-inline-share-buttons"></div>     
        </>}       
      </div>}
    </>
  );
}

export default EpisodePage;