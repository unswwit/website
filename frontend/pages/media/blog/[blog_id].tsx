import { loadBlogPreviews } from '../../../lib/api';
import PageHeader from '../../../components/Header';
import { useEffect } from 'react';
import styles from '../../../styles/BlogPost.module.css';
import { formatDate } from '../../../lib/helpers/date';
import Chip from '@material-ui/core/Chip';
import { useStyles } from '../../../data/blog';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const BlogDetails = ({ selectedBlog }: any) => {
  console.log(selectedBlog);
  // TODO: change blog_no to blogNo
  const { date, heading, authors, blog_no, category, content } =
    selectedBlog.fields;
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>{heading + ' | UNSW WIT'}</title>
      </Head>
      <PageHeader
        imgUrl="/headers/blog-header.jpg"
        title={'Blog Post #' + blog_no}
      />
      <div className={styles.document}>
        <p className={styles.date}>{formatDate(date)}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <div>
          <div className={[styles.auth, styles.authorName].join(' ')}>
            {/* TODO: add capitalisation */}
            {/* TODO: add author image */}
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
          <div className={styles.post}>
            {documentToReactComponents(content, renderOptions)}
          </div>
          {/* TODO: add share buttons */}
          {/* TODO: add blog suggestions */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

// render code blocks, images and video embeds
const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === 'blogPost') {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
          className={styles.image}
        />
      );
    },
  },
};

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
