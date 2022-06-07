import React, { Component } from "react";
import ".././style.css";
import styles from "./publications.module.css";

class PubArticle extends Component {
  render() {
    return (
      <div className={styles.article}>
        {/*Start of publications article*/}
        <div className={styles.dark} />
        <div className={styles.imageContainer}>
          <img
            src={process.env.PUBLIC_URL + this.props.imgUrl}
            alt="wit logo"
            className={styles.articleImg}
          />
        </div>

        <div className={styles.textContainer}>
          <h2>{this.props.heading}</h2>
          <p>{this.props.date}</p>
          <div tabIndex={0} role="button" className={styles.button}>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
        {/*End of publications article*/}
      </div>
    );
  }
}
export default PubArticle;
