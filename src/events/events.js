import React, { useEffect, useState } from "react";
import styles from "./events.module.css";
import PageHeader from ".././header";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Timeline from "../components/Timeline";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ScrollUpBtn from "../components/ScrollUpBtn"
import UpcomingEvent from "./UpcomingEvent.js";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import EventMenu from "./EventMenu"
import { render } from "@testing-library/react";

const Events = () => {
  const [expanded, setExpanded] = useState(false);
  const [events, setEvents] = useState([]);
  const [year, setYear] = useState("2021");
  const [loadingPast, setLoadingPast] = useState(true);
  const [loadingTerm1, setLoadingTerm1] = useState(true);
  const [loadingTerm2, setLoadingTerm2] = useState(true);
  const [loadingTerm3, setLoadingTerm3] = useState(true);
  const [term1, setTerm1] = useState([]);
  const [term2, setTerm2] = useState([]);
  const [term3, setTerm3] = useState([]);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);

  const marks = [
    {
      value: 100,
      scaledValue: 2021,
      label: "2021",
    },
    {
      value: 0,
      scaledValue: 2020,
      label: "2020",
    },
  ];

  const valueToYear = {
    0: "2020",
    100: "2021",
  };

  // set the year for the events timeline
  const handleYear = (newYear) => {
    setYear(newYear);
  };

  const setTerms = (allEvents) => {
    setTerm1(allEvents.filter(event => event.term === 1))
    setTerm2(allEvents.filter(event => event.term === 2))
    setTerm3(allEvents.filter(event => event.term === 3))
    
    // Set loading wheels for term events to false
    setLoadingTerm1(false);
    setLoadingTerm2(false);
    setLoadingTerm3(false);
    setLoadingPast(false);
  }

  // start webpage at the top
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  // load events
  useEffect(() => {
    setLoadingPast(true);

    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        const allEvents = googleData["past-events"]["elements"].filter(
          (event) => event.year === year
        );
        setEvents(allEvents.reverse());    
        setTerms(allEvents.reverse());
        setLoadingPast(false);
      },
      simpleSheet: false,
    });

  }, [year]);

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/events-header.jfif" title="Events" />
      {/* Main Title, and Subtitle Area */}
      <div className={styles.eventsBody}>
        <h2>UPCOMING EVENTS</h2>
        <div id={styles.eventsLoadingContainer}>
          {loadingUpcoming && (
            <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id={styles.eventsLoading}
            />
          )}
        </div>
        {/*!loadingUpcoming && (!upcomingEvents.length ? 
          (<p className={styles.lookout}>Keep a lookout here for our upcoming events!</p>)
        :*/}
        <EventMenu/>
        {/*)}*/}
        <h2>PAST EVENTS</h2>
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
            <Typography id={styles.eventResources}>Event Resources</Typography>
            <Typography id={styles.resourcesDescription}>
              Learning material used in past events
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <iframe
              title="event-resources"
              src="https://drive.google.com/a/unswwit.com/embeddedfolderview?id=1zgocvaYesg7IBRYLvehAXb4Auu0Pl4Ef#grid"
              style={{ width: "100%", height: "280px", border: "0" }}
            ></iframe>
          </AccordionDetails>
        </Accordion>

        {/* Timeline */}
        <Timeline
          margin={"3%"}
          page={"events"}
          step={100}
          valueToYear={valueToYear}
          marks={marks}
          updateYear={handleYear}
        />
        {/* TERM 1 */}
        <Typography id={styles.termHeading}>Term 1</Typography>
        <div id={styles.eventsLoadingContainer}>
          {loadingTerm1 && (
            <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id={styles.eventsLoading}
            />
          )}
        </div>
        <div id={styles.pastEvents} className={styles.gridContainer}>
          {!loadingTerm1 &&
              term1.map((filteredEvent, index) => {
                let eventLabel = filteredEvent.img.split(".")[0].split("-");
                eventLabel.shift();
                return (
                  <div key={index} className={styles.gridItem}>
                    <img
                      className={styles.eventImages}
                      src={`${process.env.PUBLIC_URL}/event-covers/${year}/${termEvent.img}`}
                      alt={eventLabel.join(" ")}
                    />
                  </div>
                );
              })}
        </div>

        {/* TERM 2 */}
        <Typography id={styles.termHeading}>Term 2</Typography>
        <div id={styles.eventsLoadingContainer}>
          {loadingTerm2 && (
            <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id={styles.eventsLoading}
            />
          )}
        </div>
        <div id={styles.pastEvents} className={styles.gridContainer}>
          {!loadingTerm2 &&
              term2.map((filteredEvent, index) => {
                let eventLabel = filteredEvent.img.split(".")[0].split("-");
                eventLabel.shift();
                return (
                  <div key={index} className={styles.gridItem}>
                    <img
                      className={styles.eventImages}
                      src={`${process.env.PUBLIC_URL}/event-covers/${year}/${filteredEvent.img}`}
                      alt={eventLabel.join(" ")}
                    />
                  </div>
                );
              })}
        </div>

        {/* TERM 3 */}
        <Typography id={styles.termHeading}>Term 3</Typography>
        <div id={styles.eventsLoadingContainer}>
          {loadingTerm3 && (
            <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id={styles.eventsLoading}
            />
          )}
        </div>
        <div id={styles.pastEvents} className={styles.gridContainer}>
          {!loadingTerm3 &&
              term3.map((filteredEvent, index) => {
                let eventLabel = filteredEvent.img.split(".")[0].split("-");
                eventLabel.shift();
                return (
                  <div key={index} className={styles.gridItem}>
                    <img
                      className={styles.eventImages}
                      src={`${process.env.PUBLIC_URL}/event-covers/${year}/${filteredEvent.img}`}
                      alt={eventLabel.join(" ")}
                    />
                  </div>
                );
              })}
        </div>

      </div>
    </>
  );
};

export default Events;
