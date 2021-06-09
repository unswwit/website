import React, { useState, useEffect } from "react";
import PageHeader from "../../header";
import Tabletop from "tabletop";
import styles from "./event-recap.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const EventRecapPage = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasResources, setHasResources] = useState(false);
  const [hasEmbeddedVideo, setHasEmbeddedVideo] = useState(false);

  useEffect(() => {
    setLoading(true);
    const currEventNumber = props.match.params.eventNumber;

    // Importing Event Details
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        // Redirect to 404 page if visiting an invalid event number in the url
        const allEvents = googleData["past-events"]["elements"].filter(
          (event) => event.year === props.match.params.year
        );

        if (allEvents.length <= 0 || currEventNumber > allEvents.length) {
          props.history.push("/404");
          return;
        }

        // load the page content for the current event
        const currEvent = allEvents.filter((event) => {
          return event.eventNumber === currEventNumber;
        })[0];
        setEvent(currEvent);

        // hide the loading sign
        setLoading(false);

        if (currEvent.resourcesFolderID) {
          setHasResources(true);
        }

        if (currEvent.youtubeVideoID) {
          setHasEmbeddedVideo(true);
        }
      },
      simpleSheet: false,
    });
  }, [props.match.params.eventNumber, props.match.params.year, props.history]);

  console.log(event);

  return (
    <>
      <PageHeader imgUrl="/headers/events-header.jfif" title={`Events`} />

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
          <h2>{event.title}</h2>
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
                <button className={styles.facebookLinkButton}>facebook</button>
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
                src={`https://youtube.com/embed/${event.youtubeVideoID}?autoplay=0`}
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

          {/* Cover Image */}
          <img
            src={
              process.env.PUBLIC_URL +
              `/event-covers/${event.year}/${event.img}`
            }
            alt="header"
            className={styles.eventCoverImage}
          />
          <div className = {styles.imageGalleryWrapper} >

          <AwesomeSlider cssModule={styles}>
            <div data-src={process.env.PUBLIC_URL + `/event-recap/2021/WIT-x-MCIC-accessory-atelier/148375941_433119531235874_2109725046962908161_n.jpg`} />
            <div data-src={process.env.PUBLIC_URL + `/event-recap/2021/WIT-x-MCIC-accessory-atelier/148455294_239533420984121_6282169266328595510_n.jpg`} />
            <div data-src={process.env.PUBLIC_URL + `/event-recap/2021/WIT-x-MCIC-accessory-atelier/148879770_218695266664323_6391444865867957757_n.jpg`} />
            <div data-src={process.env.PUBLIC_URL + `/event-recap/2020/T3/analytics-comp/626c7bb3-e8b1-44fc-91c4-42e64fe222ef.png`} />
          </AwesomeSlider>
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
                  src={`https://drive.google.com/a/unswwit.com/embeddedfolderview?id=${event.resourcesFolderID}`}
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
