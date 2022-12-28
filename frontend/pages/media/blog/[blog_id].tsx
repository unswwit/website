import { loadBlogPreviews } from '../../../lib/api';
import PageHeader from '../../../components/Header';
import { useEffect } from 'react';
import styles from '../../../styles/BlogPost.module.css';
import { formatDate } from '../../../lib/helpers/date';
import Chip from '@material-ui/core/Chip';
import { useStyles } from '../../../data/blog';

const BlogDetails = ({ selectedBlog }: any) => {
  console.log(selectedBlog);
  // TODO: change blog_no to blogNo
  const { date, heading, authors, blog_no, category } = selectedBlog.fields;
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <PageHeader
        imgUrl="/headers/blog-header.jpg"
        title={'Blog Post #' + blog_no}
      />
      <p className={styles.date}>{formatDate(date)}</p>
      <h2 className={styles.heading}>{heading}</h2>
      <div>
        <div className={[styles.auth, styles.authorName].join(' ')}>
          {/* TODO: add capitalisation */}
          {authors[0].replace('-', ' ')}
        </div>
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
        
      </div>
    </div>
  );
};

export default BlogDetails;

export async function getStaticPaths() {
  const blogContent = await loadBlogPreviews();
  const paths = blogContent.map((blog: any) => ({
    params: {
      blog_id: blog.fields.blog_no.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const blogContent = await loadBlogPreviews();
  // TODO: clean this shit up
  let selectedBlog = blogContent.filter((blog: any) => {
    if (blog.fields.blog_no.toString() === params.blog_id) {
      return true;
    }
    return false;
  });
  selectedBlog = selectedBlog[0];
  return {
    props: { selectedBlog },
  };
}
