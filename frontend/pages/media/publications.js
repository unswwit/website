import React, { useEffect, useState } from "react";
import styles from "../../styles/publications.module.css";
import PubArticle from "../../components/publications-article";
import PageHeader from "../../components/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen";
import { loadPublications } from "../../lib/api";

export async function getStaticProps() {
  const publications = await loadPublications();
  return {
    props: { publications },
  };
}

const Publications = ({ publications }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);

    // load articles
    fetchPublications().catch((error) =>
      // error handling
      console.error(error)
    );
  }, []);

  // get publications
  // input: publications data from database
  // output: array of dictionaries containing publications data
  const fetchPublications = async () => {
    setLoading(false);
    setArticles(publications);
    setSourceLoading(false);
  };

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Cover Photo */}

          <PageHeader
            imgUrl="/headers/publications-header.jpg"
            title="Publications"
            imageLoading={setHeaderLoading}
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
            const {(img, heading, date, url)} = publications.fields;
            {!loading &&
              Array.from({ length: 3 }, (_, i) => i + 2020)
                .reverse()
                .map((year) => {
                  return (
                    <div key={year}>
                      <h1>{year}</h1>
                      <div className={styles.row}>
                        {publications
                          .filter((publications) => year === year)
                          .map((index) => (
                            <PubArticle
                              key={index}
                              imgUrl={img}
                              heading={heading}
                              date={date}
                              url={url}
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
