import { loadBlogRecommendations } from "../../lib/api";
import BlogRecommendations from "../../components/BlogRecommendations";
import styles from "../../styles/Blog.module.css";

export default function Blog({ recommendations }) {
  return (
    <div>
      {console.log(recommendations)}
      <h2 className={styles.blogRecommendationsTitle}>WIT-Commendations</h2>
      <div className={styles.blog}>
        <div className={styles.blogRecommendations}>
          {recommendations.map((recommendation) => (
            <BlogRecommendations
              key={recommendation.sys.id}
              recommendation={recommendation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const recommendations = await loadBlogRecommendations();
  return {
    props: { recommendations },
  };
}
