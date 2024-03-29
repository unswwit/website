//All necessary imports for this javascript
import React from "react";
import "../style.css";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";

const BlogPreview = (props) => {
  const execs = [
    "/potraits/blog-authors/vivianw2021.jpg",
    "/potraits/blog-authors/georgie2021.jpg",
  ];
  return (
    <div className={props.category}>
      {/* Start of blog post preview */}
      <div className={styles.blogPost} id={props.recommendationId}>
        <table cellPadding="0">
          <Link
            to={"/media/blog/" + props.blogNo}
            style={{ textDecoration: "none" }}
          >
            <tr id={styles.previewRow}>
              <td>
                <div className={styles.previewPic}>
                  <img
                    className={styles.previewPic}
                    src={process.env.PUBLIC_URL + props.imgUrl}
                    alt="preview"
                  />
                </div>
              </td>
              <td className={styles.blogPreview}>
                <div className={styles.blogDetails}>
                  <div className={styles.heading}>{props.heading}</div>
                  <div className={styles.date}>{props.date}</div>
                  <div className={styles.subheading}>
                    {props.subheading}
                  </div>
                </div>
                <tr className={styles.authorRow}>
                  {Object.keys(props.authors).map((key) => (
                    <div className={styles.authorSection} key={key}>
                      <div className={styles.authorPic}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                              props.authors[key][0]
                          }
                          className={
                            execs.includes(props.authors[key][0])
                              ? styles.execAuthor
                              : styles.anonAuthor
                          }
                          alt={key}
                        />
                      </div>
                      <div
                        className={[styles.auth, styles.authorName].join(" ")}
                      >
                        {props.authors[key][1]}
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
export default BlogPreview;
