import React, { useState } from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styles from "./events.module.css";
import UpcomingEvent from "./UpcomingEvent.js";

const EventMenu = (events) => {

    
    // All items component
    const MenuItem = ({text, selected}) => {
        return <div
          className={`menu-item ${selected ? 'active' : ''}`}
          >{text}</div>;
      };
      
      // All items component
      // Important! add unique key
      export const Menu = (events, selected) =>
        list.map(el => {
          const {name} = el;
      
          return <MenuItem text={name} key={name} selected={selected} />;
        });

    const Menu = () =>   
        events.map((upcomingEvent, index) => {
        return(
            <UpcomingEvent
                upcomingEvent={upcomingEvent}
                index={index}
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

    /*const [state, setState] = useState({ selected: 0 });

    onSelect = key => {
        setState({ selected: key });
    }
    
    const { selected } = state;*/

        // Create menu from items
    const menu = Menu();
    
        return (
          <div className={styles.gridContainer}>
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
            />
          </div>
        );
}

export default EventMenu;