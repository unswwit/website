import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageHeader from "./Header";
import ReactMarkdown from "react-markdown";
import styles from "../styles/Podcast.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import EpisodeTemplate from "./EpisodeTemplate.js";
import ShareBtns from "./ShareBtns";
import LoadingScreen from "./LoadingScreen";
import axios from "axios";
import humps from "humps";
import { platforms, logos } from "../data/podcastData";

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
    const fetchPodcastEpisodes = async () => {
      const res = await axios.get(
        "https://wit-database.herokuapp.com/podcast-episodes"
      );
      const allEpisodes = humps.camelizeKeys(res.data);

      // redirect to 404 page if visiting an invalid podcast episode number in the url
      const podcastNo = parseInt(props.match.params.episode);
      if (podcastNo < 0 || podcastNo > allEpisodes.length - 1) {
        props.history.push("/404");
      }

      // load the page content for the current podcast episode
      var episodeIndex = 0;
      const currEpisode = allEpisodes.filter((episode, index) => {
        if (episode.episodeNo === Number(currEpisodeNo)) {
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
    };

    fetchPodcastEpisodes();
  }, [episodeNumber, props.history, props.match.params.episode]);

  // control when to stop loading
  useEffect(() => {
    setTimeout(() => {
      setSourceLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {sourceLoading ? (
        <LoadingScreen />
      ) : (
        <>
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
                        src={`${process.env.PUBLIC_URL}/podcast-logos/${logos[platform]}`}
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
              {true && (
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
