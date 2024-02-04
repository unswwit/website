// @ts-nocheck comment
import { useEffect, useState } from 'react';
import styles from '../../styles/Publications.module.css';
import PubArticle from '../../components/PublicationsArticle';
import PageHeader from '../../components/Header';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingScreen from '../../components/LoadingScreen';
import { loadPublications } from '../../lib/api';
import Head from 'next/head';
import { revalidate } from '../../lib/helpers/constants';

const Publications = ({ publications }: any) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  useEffect(() => {
    // start at the top of the page
    window.scrollTo(0, 0);

    // load articles
    fetchPublications(publications);
  }, [publications]);

  // get publications
  // input: publications data from contentful
  // output: array of dictionaries containing publications data
  const fetchPublications = async (publications: any) => {
    setLoading(false);
    setArticles(publications);
    setSourceLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Publications | UNSW WIT</title>
      </Head>
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
            {!loading &&
              Array.from({ length: 5 }, (_, i) => i + 2020)
                .reverse()
                .map((year) => {
                  return (
                    <div key={year}>
                      <h1>{year}</h1>
                      <div className={styles.row}>
                        {articles
                          .filter(
                            (publication) =>
                              publication.fields.year === year.toString()
                          )
                          .map((publication, index) => (
                            <PubArticle
                              key={index}
                              imgUrl={
                                'http:' + publication.fields.img.fields.file.url
                              }
                              heading={publication.fields.heading}
                              date={publication.fields.date}
                              url={publication.fields.url}
                              index={publication.fields.index}
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

export async function getStaticProps() {
  const publications = await loadPublications();
  return {
    props: { publications },
    revalidate: revalidate
  };
}

export default Publications;
