import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styles from "./ScrollUpBtn.module.css"

export default function ScrollUpBtn() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    const coverPhoto = document.getElementsByClassName("coverPhoto")[0].clientHeight;
    if (window.pageYOffset >= coverPhoto) {
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
    window.addEventListener("scroll", toggleVisibility,  { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility, { passive: true });
  }, []);

  return (
    <div>
      <button 
        aria-label="scroll to top"
        className={isVisible ? [styles.scrollUp,styles.showBtn].join(" "): [styles.scrollUp,styles.hideBtn].join(" ")} 
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </button>
    </div>
    
  )
}