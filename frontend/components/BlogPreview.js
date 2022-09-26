//All necessary imports for this javascript
import React from "react";
// import "../styles/globals.css";
import styles from "../styles/Blog.module.css";

const BlogPreview = ({ individualBlogPreview }) => {
  const execs = [
    "/portraits/blog-authors/vivianw2021.jpg",
    "/portraits/blog-authors/georgie2021.jpg",
  ];

  const { date, img, heading, subheading, blog_no, category } =
    individualBlogPreview.fields;

  const authors = individualBlogPreview.authors;

  const imgUrl = "https:" + img.fields.file.url;

  // contentfulDate = YYYY-MM-DD
  // formattedDate = DD/MM/YYYY
  const formattedDate = date.split("-").reverse().join("/");

  return (
    <div className={category}>
      {/* Start of blog post preview */}
      <div className={styles.blogPost}>
        <table cellPadding="0">
          {/* TODO: change the <a> tag to link to the actual blog page */}
          <a href="{recommendation.fields.url}">
            <div className={styles.darkOverlay} />
            <tr id={styles.previewRow}>
              <td>
                <div className={styles.previewContainer}>
                  <img
                    className={styles.previewPic}
                    src={`${imgUrl}`}
                    alt="preview"
                  />
                </div>
              </td>
              <td className={styles.blogPreview}>
                <div className={styles.blogDetails}>
                  <div className={styles.heading}>{heading}</div>
                  <div className={styles.date}>{formattedDate}</div>
                  <div className={styles.subheading}>{subheading}</div>
                </div>
                <tr className={styles.authorRow}>
                  {Object.keys(authors).map((key) => (
                    <div className={styles.authorSection} key={key}>
                      <div className={styles.authorPic}>
                        <img
                          src={`${authors[key][0]}`}
                          className={
                            execs.includes(authors[key][0])
                              ? styles.execAuthor
                              : styles.anonAuthor
                          }
                          alt={key}
                        />
                      </div>
                      <div
                        className={[styles.auth, styles.authorName].join(" ")}
                      >
                        {authors[key][1]}
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
