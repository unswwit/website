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
import EpisodeTemplate from "./EpisodeTemplate.js";
import ShareBtns from "../blog-post/ShareBtns";
import LoadingScreen from "../LoadingScreen";

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
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState({});
  const [sourceLoading, setSourceLoading] = React.useState(true);
  const [episodeNumber, setEpisodeNumber] = useState("0");
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
        .then((response) => response.text())
        .then((response) => setTranscript(response));
    } catch {
      setTranscript("");
    }

    // importing podcast episode
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        // redirect to 404 page if visiting an invalid podcast episode number in the url
        const allEpisodes = googleData["podcast-episodes"]["elements"];
        const podcastNo = parseInt(props.match.params.episode);
        if (podcastNo < 0 || podcastNo > allEpisodes.length - 1) {
          props.history.push("/404");
        }

        // load the page content for the current podcast episode
        var episodeIndex = 0;
        const currEpisode = allEpisodes.filter((episode, index) => {
          if (episode.episodeNo === currEpisodeNo) {
            episodeIndex = index;
            return true;
          } else {
            return false;
          }
        })[0];
        setEpisode(currEpisode);

        // load podcast episode previews
        if (episodeIndex < 3) {
          let sortedEpisodes = allEpisodes.slice(0, episodeIndex).reverse();
          const additionalEpisodes = allEpisodes.slice(
            episodeIndex + 1,
            episodeIndex + 4 - sortedEpisodes.length
          );
          sortedEpisodes = [...additionalEpisodes, ...sortedEpisodes];
          setEpisodes(sortedEpisodes);
        } else {
          let sortedEpisodes = allEpisodes
            .slice(episodeIndex - 3, episodeIndex)
            .reverse();
          setEpisodes(sortedEpisodes);
        }

        // hide the loading sign
        setLoading(false);
      },
      simpleSheet: false,
    });
  }, [episodeNumber, props.history, props.match.params.episode]);

  // control when to stop loading
  useEffect(() => {
    setTimeout(() => {
      setSourceLoading(false);
    }, 1000);
  }, []) 


  return (
  <div>
    {sourceLoading ? ( <LoadingScreen /> ) : ( <>
        <PageHeader
          imgUrl="/headers/podcast-header.jpg"
          title={`Podcast Episode #${episodeNumber}`}
        />

        {loading && (
          <div id={styles.podcastLoadingContainer}>
            <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id={styles.podcastLoading}
            />
          </div>
        )}

        {!loading && (
          <div id={styles.episodeContainer}>
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
              {platforms.map((platform, index) => {
                return (
                  <a
                    key={index}
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
                );
              })}
            </div>

            <h2>Overview</h2>
            <p id={styles.overview}>{episode.description}</p>

            {/* Podcast Episode Transcript */}
            {false && (
              <>
                <h2>Transcript</h2>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      View Transcript
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ReactMarkdown children={`${transcript}`} />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            )}

            {/* Share buttons */}
            <p className={styles.subHeading}>Share this episode</p>
            <div className={styles.shareButtons}>
              <span>
                <ShareBtns />
              </span>
            </div>

            {/* See more episodes */}
            <p className={styles.subHeading}>More From WIT</p>
            <div className={styles.previews}>
              {episodes.map((episode, index) => {
                return (
                  <div key={index} className={styles.podcastContainer}>
                    <EpisodeTemplate
                      className={styles.podcastContainer}
                      key={index}
                      episodeNo={episode.episodeNo}
                      title={episode.title}
                      cover={`podcast-covers/${episode.img}`}
                      date={episode.date}
                      description={episode.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
      )}
    </div>
  );
};

export default EpisodePage;
