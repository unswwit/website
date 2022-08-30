import React, { Component } from "react";
import styles from "../styles/publications.module.css";
import Image from "next/image";
import Link from "next/link";

class PubArticle extends Component {
  render() {
    return (
      <div className={styles.article}>
        {/*Start of publications article*/}
        <div className={styles.dark} />
        <div className={styles.articleImg}>
          <Image src={this.props.imgUrl} alt="wit logo" layout={"fill"} />
        </div>

        <div className={styles.textContainer}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.date}</p>
          <div tabIndex={0} role="button" className={styles.button}>
            <Link href={this.props.url}>
              <a target="_blank" rel="noopener noreferrer">
        Read More
              </a>
            </Link>
          </div>
        </div>
        {/*End of publications article*/}
      </div>
    );
  }
}
export default PubArticle;
