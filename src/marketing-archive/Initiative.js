import React, { Component } from "react";
import styles from "./content.module.css";

class Initiative extends Component {
  render() {
    return (
      <li>
        <a
          href={this.props.fb}
          className={styles.darken}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + this.props.imgUrl}
            alt={this.props.alt}
          />
          <div className={styles.message}>{this.props.date}</div>
        </a>
      </li>
    );
  }
}
export default Initiative;
