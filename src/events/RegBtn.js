import React from 'react';
import styles from "./dropbutton.module.css";

const RegBtn = (props) => {
  const link = props.link

  const openLink = () => {
    window.open(link)
  }

  return (
    <div>
      <button type="button" onClick={openLink} className={styles.regButton}>REGISTER
      </button>
      </div>
  )
};

export default RegBtn;