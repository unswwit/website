import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import UpcomingEvent from "./UpcomingEvent";
import styles from "./events.module.css";
import "./EventMenu.css"


// One item component
// selected prop will be passed
const MenuItem = ({ event, index }) => {
  console.log(index)
  return (
    <div className={styles.menuItem}>
      <UpcomingEvent
        upcomingEvent={event}
        index={index}
      ></UpcomingEvent>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (events) => events.map(el => {
  return (
    <div className={styles.menuItem}>
      <MenuItem
        event={el.event}
        index={el.index}
        key={el.index}
      ></MenuItem>
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
      className='arrow-prev'
    ></KeyboardArrowLeftIcon>
  );
};

const Right = () => {
  return (
    <KeyboardArrowRightIcon
      style={buttonStyles}
    ></KeyboardArrowRightIcon>
  );
};

const ArrowLeft = Left();
const ArrowRight = Right();

const EventMenu = ({ events }) => {

  return (

      <ScrollMenu
        data={Menu(events)}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        wheel={false}
      ></ScrollMenu>
  )
}

export default EventMenu;