import React, { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import menuStyles from './EventMenu.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import UpcomingEvent from './UpcomingEvent';
import Tabletop from "tabletop";
import styles from "./events.module.css";

// One item component
// selected prop will be passed
const MenuItem = ({ name, index }) => {
  return (
    <div className={styles.MenuItem}>
    <UpcomingEvent
        upcomingEvent={name}
        index={index}
    >
    </UpcomingEvent>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (events) => events.map(el => {
  const { name, index } = el;
  console.log({index})
  return (
    <MenuItem
      name={name}
      index={index}
    />
  );
});

const buttonStyles = {
    backgroundColor: '#e85f5c',
    color: "#ffffff",
    width: "44px",
	height: "44px",
    borderRadius: "100%",
    boxShadow: "1px 1px 5px 0 rgba(0, 0, 0, 0.3)",
}

const Left = ({ className }) => {
  return (
    <KeyboardArrowLeftIcon
      className={className}
      style={buttonStyles}
    ></KeyboardArrowLeftIcon>
  );
};

const Right = ({ className }) => {
    return (
        <KeyboardArrowRightIcon
        className={className}
        style={buttonStyles}
        ></KeyboardArrowRightIcon>
    );
  };

const ArrowLeft = Left({ className: 'arrow-prev' });
const ArrowRight = Right({ className: 'arow-next' });

const EventMenu = () => {

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    //const [events, setEvents] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: process.env.REACT_APP_GOOGLE_SHEETS,
            callback: (googleData) => {
                setUpcomingEvents(googleData["upcoming-events-test"]["elements"]);
            },
            simpleSheet: false,
        });
    });
    
    const events = []
    upcomingEvents.map((upcomingEvent, index) => {
        events.push({
            name: upcomingEvent,
            index: index,
        })
    })

    // Create menu from items
    const menu = Menu(events);
    
    return (
        <div className={menuStyles}>
        <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
        />
        </div>
    );

}

export default EventMenu;