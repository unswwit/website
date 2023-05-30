import LoadingScreen from '../../../components/LoadingScreen';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PageHeader from '../../../components/Header';
import { loadPublications } from '../../../lib/api';
import { revalidate } from '../../../lib/helpers/constants';
import styles from '../../../styles/PubArticle.module.css';

const PublicationDetails = ({ selectedPub }: any) => {
  const [loading, setLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);
  const { heading, url } = selectedPub.fields;

  const handleLoad = () => setLoading(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Head>
            <title>{heading + ' | UNSW WIT'}</title>
          </Head>
          <PageHeader
            imageLoading={setHeaderLoading}
            imgUrl="/headers/publications-header.jpg"
            title={heading}
          />
          <div className={styles.pubBody}>
            <iframe src={url} className={styles.viewer} onLoad={handleLoad} />
            <p className={styles.description}>
              Can&apos;t see the guide?{' '}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Read here
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PublicationDetails;

// TODO: fix any types
export async function getStaticPaths() {
  const pubContent = await loadPublications();
  const paths = pubContent.map((pub: any) => ({
    params: {
      pub_id: pub.fields.index.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const pubContent = await loadPublications();
  let selectedPub = pubContent.filter((pub: any) => {
    if (pub.fields.index.toString() === params.pub_id) {
      return true;
    }
    return false;
  });
  selectedPub = selectedPub[0];
  return {
    props: { selectedPub, pubContent },
    revalidate: revalidate,
  };
}
