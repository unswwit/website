import React, { useState } from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowRight';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import styles from "./events.module.css";
import UpcomingEvent from "./UpcomingEvent.js";

const EventMenu = (events) => {

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

    return (
        <div className={styles.gridContainer}>
        <ScrollMenu
            data={events}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
        />
        </div>
    );
}

export default EventMenu;