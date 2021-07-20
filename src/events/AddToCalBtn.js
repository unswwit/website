import React from "react";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import Dropdown from "./Dropdown.js";
import Button from "./Button.js";
import styles from "./AddToCal.module.css";

const AddToCalBtn = (props) => {
  const start =  new Date();
  let end = new Date();
  end.setHours(start.getHours() + 1);
  const startDefaultString = start.toLocaleString("sv").split(".")[0].replaceAll(/[Z:-]/g, "").replaceAll(" ", "T");
  const endDefaultString = end.toLocaleString("sv").split(".")[0].replaceAll(/[Z:-]/g, "").replaceAll(" ", "T");
  
  let event = {
    title: props.title,
    description: props.description,
    location: props.location,
    duration: props.duration ? props.duration: "0100",
    timezone: "Australia/Sydney",
    startDatetime: props.startDate ? props.startDate: startDefaultString,
    endDatetime: props.endDate ? props.endDate: endDefaultString,
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
