import React, { useState } from "react";
import AccessibleIcon from "@material-ui/icons/Accessible";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import InvertColorsOffIcon from "@material-ui/icons/InvertColorsOff";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import DescriptionIcon from "@material-ui/icons/Description";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import OpacityIcon from "@material-ui/icons/Opacity";
import styles from "./AccessibilityButton.module.css";

const AccessibilityButton = () => {
  const options = ["Bigger Text", "Bigger Cursor", "Invert Colours", "Contrast", "Brightness", "Grayscale", "Readable line", "Underline Links", "Text to Speech"];
  const icons = [<ZoomInIcon />, <TouchAppIcon />, <InvertColorsIcon />, <OpacityIcon />, <BrightnessHighIcon />, <InvertColorsOffIcon />, <DescriptionIcon />, <FormatUnderlinedIcon />, <RecordVoiceOverIcon />];
  const [isOpen, setIsOpen] = useState(false);
  return <>
    <button
      id={styles.accessibilityButton}
      aria-label="accessibility tool"
      onClick={() => setIsOpen(true)}
      color="primary"
    >
      <AccessibleIcon fontSize="large" />
    </button>
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <List id={styles.menu}>
        <ListItem button>
          Accessibility Options
        </ListItem>
        {options.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{icons[index]}</ListItemIcon>
            <ListItemText className={styles.listText} primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  </>
}

export default AccessibilityButton;