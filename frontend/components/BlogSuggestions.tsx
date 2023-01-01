import React from 'react';
import styles from '../styles/Blog.module.css';
import BlogPreview from './BlogPreview';

const BlogSuggestions = ({ blogPreviews, category, blogNo }: any) => {
  const filteredBlogs = blogPreviews.filter(
    (blog: any) =>
      blog.fields.category.every((c: any) => category.includes(c)) &&
      blog.fields.blog_no != blogNo
  );
  const selectedBlogs = filteredBlogs.splice(0, 3);

  return (
    <div>
      <h2>MORE FROM WIT</h2>
      <div className={styles.blogPosts}>
        {selectedBlogs.map((individualBlogPreview: any, index: any) => {
          return (
            <BlogPreview
              key={index}
              individualBlogPreview={individualBlogPreview}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BlogSuggestions;
