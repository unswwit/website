import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from '../styles/ScrollUpBtn.module.css';

export default function ScrollUpBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    const coverPhoto =
      document.getElementsByClassName('coverPhoto')[0].clientHeight;
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (window.pageYOffset >= coverPhoto && !bottom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scrolls the page to the top
  const scrollToTop = () => {
    const coverPhoto =
      document.getElementsByClassName('coverPhoto')[0].clientHeight;
    window.scrollTo({ top: coverPhoto - 15, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () =>
      window.removeEventListener('scroll', toggleVisibility, {
        passive: true,
      });
  }, []);

  return (
    <div>
      <button
        className={
          isVisible
            ? [styles.scrollUp, styles.showBtn].join(' ')
            : [styles.scrollUp, styles.hideBtn].join(' ')
        }
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </button>
    </div>
  );
}
