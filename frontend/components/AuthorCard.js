//All necessary imports for this javascript
import React, { Component } from "react";
import styles from "../styles/blog-post.module.css";

class AuthorCard extends Component {
  render() {
    return (
      <div className={styles.authorRow}>
        {Object.keys(this.props.authors).map((key, index) => (
          <div key={index} className={styles.authorSection}>
            <div>
              <img
                src={this.props.authors[key][0]}
                className={styles.authorImg}
                alt={key}
              />
            </div>
            <div className={styles.authorName}>
              {this.props.authors[key][1]}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default AuthorCard;
