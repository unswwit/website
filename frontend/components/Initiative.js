import React, { Component } from "react";
import styles from "../styles/Marketing.module.css";
import Image from "next/image";

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
          <Image
            src={"/../public" + this.props.imgUrl}
            alt={this.props.alt}
            layout={"fill"}
          />
          <div className={styles.message}>{this.props.date}</div>
        </a>
      </li>
    );
  }
}
export default Initiative;
