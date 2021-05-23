import React from "react";
import styles from "./events.module.css";
import AddToCalBtn from "./AddToCalBtn.js";
import RegBtn from "./RegBtn.js";

/* Renders the upcoming event tile on the events page for the given event */

const UpcomingEvent = (props) => {
  const upcomingEvent = props.upcomingEvent
  const index = props.index
  
  // Link upcoming event tile to the facebook page
  const openLink = () => {
    window.open(upcomingEvent.facebookLink)
  }

  return (
    <div key={index} onClick={openLink} className={styles.upcoming}>
        <img
        className={styles.eventImages}
        src={
            process.env.PUBLIC_URL +
            `/event-covers/2021/${upcomingEvent.img}`
        }
        alt={upcomingEvent.title}
        />
        <div className={styles.eventDescription}>
        <p className={styles.eventDate}>{upcomingEvent.date}</p>
        <p className={styles.eventName}>{upcomingEvent.title}</p>
        <p className={styles.eventDate}>{upcomingEvent.location}</p>
        <p className={styles.eventSummary}>
        {upcomingEvent.description}              
        </p>
        <ul id={styles.links}>                     
            <li className={styles.eventLink}>
            <RegBtn
                link={upcomingEvent.registerLink}
            ></RegBtn>
            </li>
            <li className={styles.eventButton}>
            <AddToCalBtn 
                title={upcomingEvent.title} 
                description={upcomingEvent.description}
                location={upcomingEvent.location}
                startDate={upcomingEvent.start}
                endDate={upcomingEvent.end}
                duration={upcomingEvent.duration}
            />
            </li>                     
        </ul>
        </div>
    </div>
  )
};

export default UpcomingEvent;