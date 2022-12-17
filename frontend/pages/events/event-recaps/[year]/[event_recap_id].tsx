import { useState, useEffect } from "react";
import PageHeader from "../../../../components/Header";
import styles from "../../../../styles/EventRecap.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Image from "next/image";
import { loadPastEvents } from "../../../../lib/api";

const EventRecapPage = ({ selectedEvent }: any) => {
  const [expanded, setExpanded] = useState(false);
  const [event, setEvent] = useState(selectedEvent);
  const [loading, setLoading] = useState(true);
  const [hasResources, setHasResources] = useState(false);
  const [hasPhotos, setHasPhotos] = useState(false);
  const [hasFBLink, setHasFBLink] = useState(false);
  const [imageGalleryFilenames, setImageGalleryFilenames] = useState([]);
  const [hasEmbeddedVideo, setHasEmbeddedVideo] = useState(false);
  const [enableGalleryArrows, setEnableGalleryArrows] = useState(true);

  const fetchPastEvent = (event: any) => {
    setLoading(false);
    setPhotos(event);

    if (event.fields.resourcesFolderId) {
      setHasResources(true);
    }

    if (event.fields.youtubeVideoId) {
      setHasEmbeddedVideo(true);
    }

    if (event.fields.facebookLink) {
      setHasFBLink(true);
    }
  };

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);

    // load event recap
    fetchPastEvent(event);
  }, []);

  const setPhotos = (currEvent: any) => {
    if (currEvent.fields.imagePaths) {
      setHasPhotos(true);
      var tempArray: any = [];
      currEvent.fields.imagePaths.split(",").forEach((filename: string) => {
        tempArray.push({
          source: `/event-recap/${currEvent.fields.year}/T${currEvent.fields.term}/${currEvent.fields.imageFolder}/${filename}`,
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
          <h2 id={styles.eventTitle}>{event.fields.title}</h2>
          <div className={styles.eventDetails}>
            <span className={styles.date}>
              {/* Location and time */}
              {event.fields.location}, {event.fields.dateTime}
            </span>
            <span>
              {/* facebook link button */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={event.fields.facebookLink}
              >
                {hasFBLink && (
                  <button className={styles.facebookLinkButton}>
                    Facebook
                  </button>
                )}
              </a>
            </span>
          </div>

          {/* YouTube Embedded Video */}
          {hasEmbeddedVideo && (
            <div className={styles.iframeWrapper}>
              <div className={styles.responsiveIframe}>
                <iframe
                  src={`https://youtube.com/embed/${event.fields.youtubeVideoId}?autoplay=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media fullscreen"
                  title="video"
                  className={styles.embeddedVideo}
                />
              </div>
            </div>
          )}

          {/* Event Description */}
          <p className={styles.description}>{event.fields.description}</p>

          {/* Image Gallery / Cover Image Section */}
          {/* Display Image gallery if images exist, otherwise display cover image */}
          {!hasPhotos && (
            <div className={styles.imageWrapper}>
              <Image
                src={"http:" + event.fields.img.fields.file.url}
                alt="header"
                width="1200px"
                height="630px"
              />
            </div>
          )}

          {hasPhotos && (
            <div className={styles.imageGalleryWrapper}>
              <AwesomeSlider
                cssModule={styles}
                media={imageGalleryFilenames}
                buttons={enableGalleryArrows}
                mobileTouch={enableGalleryArrows}
              />
            </div>
          )}

          {/* Event Resources Accordion */}
          {hasResources && (
            <div className={styles.accordionWrapper}>
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
                    src={`https://drive.google.com/a/unswwit.com/embeddedfolderview?id=${event.fields.resourcesFolderId}#grid`}
                    style={{
                      // eslint-disable-next-line no-inline-styles/no-inline-styles
                      width: "100%",
                      // eslint-disable-next-line no-inline-styles/no-inline-styles
                      height: "280px",
                      // eslint-disable-next-line no-inline-styles/no-inline-styles
                      border: "0",
                    }}
                  ></iframe>
                </AccordionDetails>
              </Accordion>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const pastEvents = await loadPastEvents();
  const paths = pastEvents.map((event: any) => ({
    params: {
      year: event.fields.year.toString(),
      event_recap_id: event.fields.eventNumber.toString(),
    },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const pastEvents = await loadPastEvents();
  let selectedEvent = pastEvents.filter((event: any) => {
    if (
      event.fields.eventNumber.toString() === params.event_recap_id &&
      event.fields.year.toString() === params.year
    ) {
      return true;
    }
    return false;
  });
  selectedEvent = selectedEvent[0];
  return {
    props: { selectedEvent },
  };
}

export default EventRecapPage;
