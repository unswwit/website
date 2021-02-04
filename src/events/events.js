import React, { useEffect, useState } from "react";
import styles from "./events.module.css";
import PageHeader from ".././header";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Timeline from "../Timeline";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Events = () => {
  const [expanded, setExpanded] = useState(false);
  const [events, setEvents] = useState([]);
  const [year, setYear] = useState("2021");
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const marks = [
    {
      value: 100,
      scaledValue: 2021,
      label: "2021"
    },
    {
      value: 0,
      scaledValue: 2020,
      label: "2020"
    },
  ];

  const valueToYear = {
    0: "2020",
    100: "2021"
  }

  const handleYear = (newYear) => {
    setYear(newYear);
  };

  //start webpage at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);

    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        setLoading(false);
        const allEvents = googleData["past-events"]["elements"].filter((event) => event.year === year);
        setEvents(allEvents.reverse());
        setUpcomingEvents(googleData["upcoming-events"]["elements"]);
      },
      simpleSheet: false
    })
   
  }, [year]);
  
  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/events-header.jfif" title="Events" />
      {/* Main Title, and Subtitle Area */}
      <div className={styles.eventsBody}>
        <h2>UPCOMING EVENTS</h2>
        <div id={styles.eventsLoadingContainer}>
          {loading && <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.eventsLoading}
          />}
        </div>
        {!loading && (!upcomingEvents.length ? 
          (<p className={styles.lookout}>Keep a lookout here for our upcoming events!</p>)
          :
          (<div className={styles.gridContainer}>          
            {upcomingEvents.map((upcomingEvent, index) => {
              return <div key={index} className={styles.upcoming}>
                <img
                  className={styles.eventImages}
                  src={
                    process.env.PUBLIC_URL +
                      `/event-covers/2021/${upcomingEvent.img}`
                  }
                  alt={upcomingEvent.label}
                />
                <div className={styles.eventDescription}>
                  <p className={styles.eventName}>{upcomingEvent.title}</p>
                  {/* The date should be in the format of the following example: 24th January 2020 */}
                  <p className={styles.eventDate}>{upcomingEvent.date}</p>
                  <p className={styles.eventSummary}>
                    {upcomingEvent.description}              
                  </p>
                  <ul id={styles.links}>
                    <li className={styles.eventLink}>
                      <a
                        href={upcomingEvent.registerLink}
                        className={styles.event}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          Register
                      </a>
                    </li>
                    <li className={styles.eventLink}>
                      <a
                        href={upcomingEvent.facebookLink}
                        className={styles.event}                      
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            })}
          </div>)
        )}
        <h2>PAST EVENTS</h2>
        <Accordion expanded={expanded} onChange={() => {setExpanded(!expanded)}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
          >
            <Typography id={styles.eventResources}>Event Resources</Typography>
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

        <div id={styles.eventsLoadingContainer}>
          {loading && <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.eventsLoading}
          />}
        </div>

        <div id={styles.pastEvents} className={styles.gridContainer}>
          {!loading && events.map((event, index) => {
            let eventLabel = event.img.split(".")[0].split("-");
            eventLabel.shift();
            return <div key={index} className={styles.gridItem}>
              <img
                className={styles.eventImages}
                src={`${process.env.PUBLIC_URL}/event-covers/${year}/${event.img}`}
                alt={eventLabel.join(" ")}
              />
            </div>
          })} 
        </div>  
      </div>
    </>
  );
}

export default Events;
