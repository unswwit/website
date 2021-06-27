<<<<<<< HEAD
import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import UpcomingEvent from './UpcomingEvent';
=======
import React, { useEffect, useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import UpcomingEvent from "./UpcomingEvent";
>>>>>>> 80cedd172ecec60555fc84d73dd731abe755b916
import Tabletop from "tabletop";
import styles from "./events.module.css";
import "./EventMenu.css"

// One item component
// selected prop will be passed
const MenuItem = ({ event, index }) => {
  console.log(index)
  return (
    <UpcomingEvent
<<<<<<< HEAD
        upcomingEvent={event}
        index={index}
=======
      upcomingEvent={event}
      index={index}
>>>>>>> 80cedd172ecec60555fc84d73dd731abe755b916
    >
    </UpcomingEvent>
  );
};

// All items component
// Important! add unique key
export const Menu = (events) => events.map(el => {
  return (
    <div className={styles.menuItem}>
    <UpcomingEvent
      event={el.event}
      index={el.index}
      key={el.key}
    ></UpcomingEvent>
    </div>
  );
});

const buttonStyles = {
  backgroundColor: "#e85f5c",
  color: "#ffffff",
  width: "44px",
  height: "44px",
  borderRadius: "100%",
  boxShadow: "1px 1px 5px 0 rgba(0, 0, 0, 0.3)",
}

const Left = () => {
  return (
    <KeyboardArrowLeftIcon
      style={buttonStyles}
    ></KeyboardArrowLeftIcon>
  );
};

<<<<<<< HEAD
const Right = () => {
    return (
      <KeyboardArrowRightIcon
        style={buttonStyles}
      ></KeyboardArrowRightIcon>
    );
  };

const ArrowLeft = Left();
const ArrowRight = Right();
=======
const Right = ({ className }) => {
  return (
    <KeyboardArrowRightIcon
      className={className}
      style={buttonStyles}
    ></KeyboardArrowRightIcon>
  );
};

const ArrowLeft = Left({ className: "arrow-prev" });
const ArrowRight = Right({ className: "arrow-next" });
>>>>>>> 80cedd172ecec60555fc84d73dd731abe755b916

const EventMenu = () => {

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  //const [events, setEvents] = useState([]);

<<<<<<< HEAD
    Tabletop.init({
        key: process.env.REACT_APP_GOOGLE_SHEETS,
        callback: (googleData) => {
        setUpcomingEvents(googleData["upcoming-events-test"]["elements"]);
        },
        simpleSheet: false,
    });
    
    const events = []

    upcomingEvents.forEach((upcomingEvent, index) => {
        events.push({
            event: upcomingEvent,
            index: index,
            key: upcomingEvent.img,
        })
=======
  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setUpcomingEvents(googleData["upcoming-events-test"]["elements"]);
      },
      simpleSheet: false,
    });

  }, [upcomingEvents]);

  const events = []
  upcomingEvents.forEach((upcomingEvent, index) => {
    events.push({
      event: upcomingEvent,
      index: index,
>>>>>>> 80cedd172ecec60555fc84d73dd731abe755b916
    })
  })

  // Create menu from items
  const menu = Menu(events);

<<<<<<< HEAD
    // Create menu from items
    const menu = Menu(events);
    /*console.log(menu.length)*/
    return (
      <div className={styles.eventsBody}>
        <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            wheel={false}
            alignCenter={true}
        />
        </div>
    );
=======
  return (
    <ScrollMenu
      data={menu}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
    />
  );
>>>>>>> 80cedd172ecec60555fc84d73dd731abe755b916

}

export default EventMenu;