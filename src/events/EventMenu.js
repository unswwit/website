import React, { useState } from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styles from "./events.module.css";
import UpcomingEvent from "./UpcomingEvent.js";

const EventMenu = (events) => {

    // One item component
    const MenuItem = ({upcomingEvent, selected}) => {
        return (
            <UpcomingEvent
                upcomingEvent={upcomingEvent}
                index={index}
            />)
    };

    // All items component
    export const Menu = (events) =>   
        events.map((upcomingEvent, index) => {
        return(
            <UpcomingEvent
            upcomingEvent={upcomingEvent}
            index={index}
            selected={selected}
        />)  
    });

    const ArrowLeft = () => {
        return (
            <KeyboardArrowLeftIcon className={styles.arrowButton}> </KeyboardArrowLeftIcon>
        );
    };

    const ArrowRight = () => {
        return (
            <KeyboardArrowRightIcon className={styles.arrowButton}> </KeyboardArrowRightIcon>
        );
    };

    const [state, setState] = useState({ selected: 0 });

    onSelect = key => {
        setState({ selected: key });
    }
    
    const { selected } = state;

        // Create menu from items
    const menu = Menu(events, selected);
    
        return (
          <div className={styles.gridContainer}>
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
          </div>
        );
}

export default EventMenu;