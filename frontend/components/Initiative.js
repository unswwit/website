import React, { Component } from "react";
import styles from "../styles/Marketing.module.css";
import Image from "next/image";
import Link from "next/link";

class Initiative extends Component {
  render() {
    return (
      <li>
        <Link href={this.props.fb}>
          <a
            className={styles.darken}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={this.props.imgUrl}
              alt={this.props.alt}
              layout={"fill"}
            />
            <div className={styles.message}>{this.props.date}</div>
          </a>
        </Link>
      </li>
    );
  }
}
export default Initiative;
