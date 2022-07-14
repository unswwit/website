import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/Header";
import styles from "../../../styles/event-recap.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import axios from "axios";
import humps from "humps";
import Image from "next/image";

const EventRecapPage = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasResources, setHasResources] = useState(false);
  const [hasPhotos, setHasPhotos] = useState(false);
  const [hasFBLink, setHasFBLink] = useState(false);
  const [imageGalleryFilenames, setImageGalleryFilenames] = useState([]);
  const [hasEmbeddedVideo, setHasEmbeddedVideo] = useState(false);
  const [enableGalleryArrows, setEnableGalleryArrows] = useState(true);
  const [eventNumber, setEventNumber] = useState("0");

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    setLoading(true);

    let url = window.location.href.split("/");
    setEventNumber(url[url.length - 1]);
    let currEventNumber = url[url.length - 1];

    const fetchPastEvents = async () => {
      const res = await axios.get(
        "https://wit-database.herokuapp.com/past-events"
      );
      const allEvents = humps
        .camelizeKeys(res.data)
        .filter((event) => event.year.toString() === url[url.length - 2]);

      if (allEvents.length <= 0 || currEventNumber > allEvents.length) {
        props.history.push("/404");
        return;
      }

      // load the page content for the current event
      const currEvent = allEvents.filter((event) => {
        return event.eventNumber.toString() === currEventNumber;
      })[0];
      setEvent(currEvent);

      // hide the loading sign
      setLoading(false);

      setPhotos(currEvent);

      if (currEvent.resourcesFolderId) {
        setHasResources(true);
      }

      if (currEvent.youtubeVideoId) {
        setHasEmbeddedVideo(true);
      }

      if (currEvent.facebookLink) {
        setHasFBLink(true);
      }
    };

    // Importing Event Details
    fetchPastEvents();
  }, [eventNumber, props.history]);

  const setPhotos = (currEvent) => {
    if (currEvent.imagePaths) {
      setHasPhotos(true);
      var tempArray = [];
      currEvent.imagePaths.split(",").forEach((filename) => {
        tempArray.push({
          source: `/event-recap/${currEvent.year}/T${currEvent.term}/${currEvent.imageFolder}/${filename}`,
        });
      });
      // If at least two images dont exist, disable gallery arrows
      if (tempArray.length < 2) {
        setEnableGalleryArrows(false);
      }

      setImageGalleryFilenames(tempArray);
    }
  };

  return (
    <>
      <PageHeader imgUrl="/headers/events-header.jfif" title={"Events"} />

      {loading && (
        <div id={styles.eventLoadingContainer}>
          <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.eventLoading}
          />
        </div>
      )}

      {!loading && (
        <div id={styles.eventContainer}>
          {/* Event Recap content */}
          <h2 id={styles.eventTitle}>{event.title}</h2>
          <div className={styles.eventDetails}>
            <span className={styles.date}>
              {/* Location and time */}
              {event.location}, {event.dateTime}
            </span>
            <span>
              {/* facebook link button */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={event.facebookLink}
              >
                <button
                  className={styles.facebookLinkButton}
                  style={hasFBLink ? {} : { display: "none" }}
                >
                  Facebook
                </button>
              </a>
            </span>
          </div>

          {/* YouTube Embedded Video */}
          <div
            className={styles.iframeWrapper}
            style={hasEmbeddedVideo ? {} : { display: "none" }}
          >
            <div className={styles.responsiveIframe}>
              <iframe
                src={`https://youtube.com/embed/${event.youtubeVideoId}?autoplay=0`}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen="true"
                title="video"
                className={styles.embeddedVideo}
              />
            </div>
          </div>

          {/* Event Description */}
          <p className={styles.description}>{event.description}</p>

          {/* Image Gallery / Cover Image Section */}
          {/* Display Image gallery if images exist, otherwise display cover image */}

          <div
            className={styles.imageWrapper}
            style={!hasPhotos ? {} : { display: "none" }}
          >
            <Image
              src={`/event-covers/${event.year}/${event.img}`}
              alt="header"
              width="1200px"
              height="630px"
            />
          </div>
          <div
            className={styles.imageGalleryWrapper}
            style={hasPhotos ? {} : { display: "none" }}
          >
            <AwesomeSlider
              cssModule={styles}
              media={imageGalleryFilenames}
              buttons={enableGalleryArrows}
              mobileTouch={enableGalleryArrows}
            />
          </div>

          {/* Event Resources Accordion */}
          <div
            className={styles.accordionWrapper}
            style={hasResources ? {} : { display: "none" }}
          >
            <Accordion
              expanded={expanded}
              onChange={() => {
                setExpanded(!expanded);
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
              >
                <Typography id={styles.eventResources}>
                  Event Resources
                </Typography>
                <Typography id={styles.resourcesDescription}>
                  Learning materials used
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <iframe
                  title="event-resources"
                  src={`https://drive.google.com/a/unswwit.com/embeddedfolderview?id=${event.resourcesFolderId}#grid`}
                  style={{ width: "100%", height: "280px", border: "0" }}
                ></iframe>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
};

export default EventRecapPage;
