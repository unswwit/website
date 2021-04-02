import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "./ScrollUpBtn.module.css"

export default function ScrollUpBtn() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset >= 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  // Scrolls the page to the top
  const scrollToTop = () => {
    const coverPhoto = document.getElementsByClassName("coverPhoto")[0].clientHeight;
    window.scrollTo({top: coverPhoto - 15, behavior: "smooth"});
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible &&
      <button className={styles.scrollUp} onClick={scrollToTop}>
        <KeyboardArrowUpIcon fontSize="large" color="#ffffff" />
      </button>
      }
    </div>
    
  )
}