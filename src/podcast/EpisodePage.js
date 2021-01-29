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

  // retrieve current episode content
  const handleEpisodeNumber = () => {
    let url = window.location.href.split("/");
    setEpisodeNumber(url[url.length - 1]);
    return url[url.length - 1];
  };
  
  useEffect(() => {
    const currEpisodeNo = handleEpisodeNumber();
    setTranscript(import(`./transcripts/podcast-episode-${currEpisodeNo}.md`));
    
    fetch(require(`./transcripts/podcast-episode-${currEpisodeNo}.md`))
      .then(response => response.text())
      .then(response => setTranscript(response))

    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        const currEpisode = googleData["podcast-episodes"]["elements"].filter((episode) => {
          return episode.episodeNo === currEpisodeNo;
        })[0];
        setEpisode(currEpisode);
        console.log(currEpisode);
      },
      simpleSheet: false
    })
    /*
    db
      .collection("podcast-previews")
      .where("episode", "==", currEpisode)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          setEpisode(doc.data());       
        });           
      });
    
    db
      .collection("podcast-previews")
      .where("episode", "==", currEpisode - 1)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          setEpisodeNav({ ...episodeNav, prev: doc.data()["title"] });  
        });           
      });

    db
      .collection("podcast-previews")
      .where("episode", "==", currEpisode + 1)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          setEpisodeNav({ ...episodeNav, next: doc.data()["title"] });  
        });           
      });  */
  }, [episodeNumber]);

  return (
    <>
      <PageHeader imgUrl="/headers/podcast-header.jpg" title={`Podcast Episode #${episodeNumber}`} />
      
      <div id={styles.episodeContainer}>
        {/* Episode Navigation */}
        {/* <div>
          {episodeNav.prev && <Link to={`/podcast/${episodeNumber - 1}`} onClick={() => handleEpisodeNumber()}>Previous Episode:{episodeNav.prev}</Link>}
          {episodeNav.next && <Link to={`/podcast/${episodeNumber + 1}`} onClick={() => handleEpisodeNumber()}>Next Episode:{episodeNav.next}</Link>}        
        </div> */} 

        {/* Episode content */}
        <h2>{episode.title}</h2>
        <p id={styles.episodeDate}>{episode.date}</p>
        <iframe title={episode.title} src={episode.link} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <h2>Overview</h2>
        <p>{episode.description}</p>

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
      </div>
    </>
  );
}

export default EpisodePage;