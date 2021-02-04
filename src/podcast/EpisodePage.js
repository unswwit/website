import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PageHeader from "../header";
import ReactMarkdown from "react-markdown";
import Tabletop from "tabletop";
import styles from "./Podcast.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { InlineShareButtons } from "sharethis-reactjs";

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
        {/*
        <InlineReactionButtons
          config={{
            alignment: "left",  // alignment of buttons (left, center, right)
            enabled: true,        // show/hide buttons (true, false)
            language: "en",       // which language to use (see LANGUAGES)
            // eslint-disable-next-line camelcase
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            padding: 12,          // padding within buttons (INTEGER)
            reactions: [          // which reactions to include (see REACTIONS)
              "slight_smile",
              "heart_eyes",
              "laughing",
              "astonished",
              "sob",
              "rage"
            ],
            size: 48,             // the size of each button (INTEGER)
            spacing: 8,           // the spacing between buttons (INTEGER)

            // OPTIONAL PARAMETERS
            url: `unswwit.com/#/podcast/${episodeNumber}` // (defaults to current url)
          }}
        />*/}
        <span>
          
        </span>
        <InlineShareButtons        
          config={{
            alignment: "left",  // alignment of buttons (left, center, right)
            color: "social",      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            // eslint-disable-next-line camelcase
            font_size: 16,        // font size for the buttons
            labels: "null",        // button labels (cta, counts, null)
            language: "en",       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              "linkedin",
              "facebook",
              "twitter"
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            // eslint-disable-next-line camelcase
            show_total: true,
            size: 40,             // the size of each button (INTEGER)

            url: `unswwit.com/#/podcast/${episodeNumber}`, // (defaults to current url) 
          }}
        />     

        {/* Podcast Episode Links */}
        <span className={styles.platforms}>
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
        </span>
      
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