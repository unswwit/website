import React from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import Chip from '@material-ui/core/Chip';
import { useStyles } from '../data/blog';
import Image from 'next/image';

const BlogPreview = ({ individualBlogPreview }: any) => {
  const classes = useStyles();
  const { date, img, heading, subheading, blog_no, category, author } =
    individualBlogPreview.fields;
  const imgUrl = 'https:' + img.fields.file.url;
  const formattedDate = date.split('-').reverse().join('/');

  return (
    <div className={category}>
      <div className={styles.blogPost}>
        <Link href={`/media/blog/${blog_no}`}>
          <div>
            <div className={styles.darkOverlay} />
            <div className={styles.previewRow}>
              <div className={styles.previewContainerImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.previewPic} src={imgUrl} alt="preview" />
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
                        />
                      ))}
                    </div>
                    <div className={styles.subheading}>{subheading}</div>
                  </div>
                  <div className={styles.authorContainer}>
                    {Object.keys(author).map((index) => (
                      <>
                        <Image
                          src={
                            'https:' + author[index].fields.img.fields.file.url
                          }
                          alt={author[index].fields.name}
                          width="75px"
                          height="75px"
                          className={styles.authorPortrait}
                        />
                        <p className={styles.author} key={index}>
                          {author[index].fields.name}
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;
