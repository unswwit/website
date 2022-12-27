import React from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import Chip from '@material-ui/core/Chip';
import { useStyles } from '../data/blog';

const BlogPreview = ({ individualBlogPreview }) => {
  const classes = useStyles();
  const execs = [
    '/portraits/blog-authors/vivianw2021.jpg',
    '/portraits/blog-authors/georgie2021.jpg',
  ];
  const { date, img, heading, subheading, blog_no, category } = individualBlogPreview.fields;
  const authors = individualBlogPreview.authors;
  const imgUrl = 'https:' + img.fields.file.url;
  const formattedDate = date.split('-').reverse().join('/');

  return (
    <div className={category}>
      {/* Start of blog post preview */}
      <div className={styles.blogPost}>
        <Link href={`/media/blog/${blog_no}`}>
          <div>
            <div className={styles.darkOverlay} />
            <div className={styles.previewRow}>
              <div className={styles.previewContainerImg}>
                <img
                  className={styles.previewPic}
                  src={imgUrl}
                  alt="preview"
                />
              </div>
              <div className={styles.previewContainerBlogInfo}>
                <div className={styles.previewContainerBlogDetails}>
                  <div className={styles.blogDetails}>
                    <div className={styles.date}>{formattedDate}</div>
                    <div className={styles.heading}>{heading}</div>
                    <div className={styles.previewCategories}>
                      {Object.keys(category).map((key) => (
                        <Chip
                          size="small"
                          label={category[key]}
                          className={classes.chip}
                          key={category[key]}
                        ></Chip>
                      ))}
                    </div>

                    <div className={styles.subheading}>{subheading}</div>
                  </div>
                  <div className={styles.authorRow}>
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
                          className={[styles.auth, styles.authorName].join(' ')}
                        >
                          {authors[key][1]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/*End of blog post preview*/}
    </div>
  );
};
export default BlogPreview;
