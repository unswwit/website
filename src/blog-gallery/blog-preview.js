//All necessary imports for this javascript
import React, { Component } from "react";
import "../style.css";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";

class BlogPreview extends Component {
  execs = ["/potraits/blog-authors/vivianw2021.jpg","/potraits/blog-authors/georgie2021.jpg"];
  render() {
    return (
      <div className={this.props.category}>
        {/* Start of blog post preview */}
        <div className={styles.blogPost}>
          <table cellPadding="0">
            <Link
              to={"/blog/" + this.props.blogNo}
              style={{ textDecoration: "none" }}
            >
              <tr id={styles.previewRow}>
                <td>
                  <div className={styles.previewPic}>
                    <img
                      className={styles.previewPic}
                      src={process.env.PUBLIC_URL + this.props.imgUrl}
                      alt="preview"
                    />
                  </div>
                </td>
                <td className={styles.blogPreview}>
                  <div className={styles.blogDetails}>
                    <div className={styles.heading}>{this.props.heading}</div>
                    <div className={styles.date}>{this.props.date}</div>
                    <div className={styles.subheading}>
                      {this.props.subheading}
                    </div>
                  </div>
                  <tr className={styles.authorRow}>
                    {Object.keys(this.props.authors).map((key) => (
                      <div className={styles.authorSection} key={key}>
                        <div className={styles.authorPic}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              this.props.authors[key][0]
                            }
                            className={this.execs.includes(this.props.authors[key][0]) ? styles.execAuthor : styles.anonAuthor}
                            alt={key}
                          />
                        </div>
                        <div
                          className={[styles.auth, styles.authorName].join(" ")}
                        >
                          {this.props.authors[key][1]}
                        </div>
                      </div>
                    ))}
                  </tr>
                </td>
              </tr>
            </Link>
          </table>
        </div>
        {/*End of blog post preview*/}
      </div>
    );
  }
}
export default BlogPreview;
