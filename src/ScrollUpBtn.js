import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "./ScrollUpBtn.module.css"

export default function ScrollUpBtn(props) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset >= 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button className={styles.scrollUp} onClick={() => scrollToTop()}>
      <KeyboardArrowUpIcon fontSize="large" color="#ffffff" />
    </button>
  )
}