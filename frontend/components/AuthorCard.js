//All necessary imports for this javascript
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React, { Component } from "react";
import styles from "../styles/blog-post.module.css";
import Image from "next/image";
class AuthorCard extends Component {
  render() {
    return (
      <div className={styles.authorRow}>
        {/*for the blog post author*/}
        {Object.keys(this.props.authors).map((key, index) => (
          <div key={index} className={styles.authorContainer}>
            <div>
              <Image
                src={this.props.authors[key][0]}
                className={styles.authorImg}
                alt={key}
                height="50"
                width="50"
              />
            </div>
            <div className={styles.authorName}>
              {this.props.authors[key][2]}
            </div>
          </div>
        ))}
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default AuthorCard;
