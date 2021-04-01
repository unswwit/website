import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from "./modules.css"

export default function ScrollUpBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [intervalId, setintervalId] = useState(0);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset >= 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollStep = (props) => {
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  }
  
  const scrollToTop = (props) => {
    let intervalId = setInterval(scrollStep.bind(ScrollUpBtn), props.delayInMs);
    setintervalId(intervalId);
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button title='Scroll to top' className={styles.scrolUp}
     onClick={scrollToTop}>
    <KeyboardArrowUpIcon color="#ffffff" ></KeyboardArrowUpIcon>
    </button>
  )
}