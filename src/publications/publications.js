import React, { useEffect, useState } from "react";
import styles from "./publications.module.css";
import PubArticle from "./publications-article";
import PageHeader from ".././header";
import Tabletop from "tabletop";
import CircularProgress from "@material-ui/core/CircularProgress";
import LoadingScreen from "../LoadingScreen";

const Publications = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = React.useState(true);

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);
    // load articles
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        setArticles(googleData["publications"]["elements"]);
        setLoading(false);
        setSourceLoading(false);
      },
      simpleSheet: false,
    });
  }, []);

  return (
    <div>
      {sourceLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/publications-header.jpg"
            title="Publications"
          />

          <div className={styles.publicationsBody}>
            {/*Loading Container*/}
            <div id={styles.pubLoadingContainer}>
              {loading && (
                <CircularProgress
                  variant="indeterminate"
                  size={50}
                  thickness={5}
                  id={styles.pubLoading}
                />
              )}
            </div>

            {/*Articles*/}
            {!loading &&
              Array.from({ length: 2 }, (_, i) => i + 2020)
                .reverse()
                .map((year) => {
                  return (
                    <div key={year}>
                      <h1>{year}</h1>
                      <div className={styles.row}>
                        {articles
                          .filter((article) => article.year === year.toString())
                          .map((article, index) => (
                            <PubArticle
                              key={index}
                              imgUrl={`${process.env.PUBLIC_URL}/publications/${year}/${article.img}`}
                              heading={article.heading}
                              date={article.date}
                              url={article.url}
                            />
                          ))}
                      </div>
                    </div>
                  );
                })}
          </div>
        </>
      )}
    </div>
  );
};

export default Publications;
