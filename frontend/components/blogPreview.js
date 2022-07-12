import React from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";

const BlogPreview = (props) => {
  const execs = [
    "/portraits/blog-authors/vivianw2021.jpg",
    "/portraits/blog-authors/georgie2021.jpg",
  ];
  return (
    <div className={props.category}>
      {/* Start of blog post preview */}
      {/* REFACTOR TO NOT USE TABLES, tables ugly :( */}
      <div className={styles.blogPost} id={props.recommendationId}>
        <table cellPadding="0">
          <a href={"/media/blog/" + props.blogNo}>
            <div className={styles.darkOverlay} />
            <tr id={styles.previewRow}>
              <td>
                <div className={styles.previewContainer}>
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
                  <div className={styles.subheading}>{props.subheading}</div>
                </div>
                <tr className={styles.authorRow}>
                  {Object.keys(props.authors).map((key) => (
                    <div className={styles.authorSection} key={key}>
                      <div className={styles.authorPic}>
                        <img
                          src={process.env.PUBLIC_URL + props.authors[key][0]}
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
          </a>
        </table>
      </div>
      {/*End of blog post preview*/}
    </div>
  );
};

export default BlogPreview;
