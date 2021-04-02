import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "./ScrollUpBtn.module.css"

export default function ScrollUpBtn() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset >= 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({top: 750, behavior: "smooth"});
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible &&
        <button className={styles.scrollUp} onClick={() => scrollToTop()}>
        <KeyboardArrowUpIcon fontSize="large" color="#ffffff" />
      </button>
      }
    </div>
    
  )
}