import React, { useEffect, useState } from "react";
import styles from "./publications.module.css";
import PubArticle from "./publications-article";
import PageHeader from ".././header";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Publications = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        setArticles(googleData["publications"]["elements"]);  
        setLoading(false);
      },
      simpleSheet: false
    })
  }, []);

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/publications-header.png" title="Publications" />

      <div className={styles.publicationsBody}>
        {/*2020 articles*/}

        <h1>2020</h1>
        <div id={styles.pubLoadingContainer}>
          {loading && <CircularProgress
            variant="indeterminate"
            size={50}
            thickness={5}
            id={styles.pubLoading}
          />}
        </div>

        <div className={styles.row}>
          {articles.map((article) => <PubArticle
            imgUrl={`./publications/${article.img}`}
            heading={article.heading}
            date={article.date}
            url={article.url}
          />
          )}          
        </div>
      </div>
    </>
  );
}

export default Publications;
