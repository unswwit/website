import React, { useEffect, useState } from "react";
import "./events.css";
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
        setEvents(googleData["past-events"]["elements"].filter((event) => event.year === year));
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
      <div className="events-body">
        <h2>UPCOMING EVENTS</h2>
        <div id="eventsLoadingContainer">
          {loading && <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id="eventsLoading"
          />}
        </div>
        {!loading && (!upcomingEvents.length ? 
          (<p className="lookout">Keep a lookout here for our upcoming events!</p>)
          :
          (<div className="grid-container">          
            {upcomingEvents.map((upcomingEvent, index) => {
              return <div key={index} className="upcoming">
                <img
                  className="event-images"
                  src={
                    process.env.PUBLIC_URL +
                      `/event-covers/2021/${upcomingEvent.img}`
                  }
                  alt={upcomingEvent.label}
                />
                <div className="event-description">
                  <p className="event-name">{upcomingEvent.title}</p>
                  {/* The date should be in the format of the following example: 24th January 2020 */}
                  <p className="event-date">{upcomingEvent.date}</p>
                  <p className="event-summary">
                    {upcomingEvent.description}              
                  </p>
                  <ul id="links">
                    <li className="event-link">
                      <a
                        href={upcomingEvent.registerLink}
                        className="event"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          Register
                      </a>
                    </li>
                    <li className="event-link">
                      <a
                        href={upcomingEvent.facebookLink}
                        className="event"                       
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
            <Typography id="eventResources">Event Resources</Typography>
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

        <div id="eventsLoadingContainer">
          {loading && <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id="eventsLoading"
          />}
        </div>

        <div id="past-events" className="grid-container">
          {!loading && events.map((event, index) => {
            let eventLabel = event.img.split(".")[0].split("-");
            eventLabel.shift();
            return <div key={index} className="grid-item">
              <img
                className="event-images"
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
