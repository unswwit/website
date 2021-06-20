import React from "react";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import Dropdown from "./Dropdown.js";
import Button from "./Button.js";
import styles from "./AddToCal.module.css";

const AddToCalBtn = (props) => {
  const event = {
    title: props.title,
    description: props.description,
    location: props.location,
    startDatetime: props.startDate,
    endDatetime: props.endDate,
    duration: props.duration,
    timezone: "Australia/Sydney",
  };

  const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);

  return (
    <AddToCalendarDropdown
      className={styles.componentStyles}
      buttonText="ADD TO CALENDAR"
      event={event}
      linkProps={{
        className: styles.link,
      }}
    />
  );
};

export default AddToCalBtn;
