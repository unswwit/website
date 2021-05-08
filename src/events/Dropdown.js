import React from "react";
import styles from "./dropbutton.module.css";

export default function Dropdown({ children }) {
  return (
    <div className={styles.dropItems}>
      {children}
    </div>
  );
}