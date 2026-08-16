import React from 'react';
import Head from 'next/head';
import styles from '../../../styles/CareersHub.module.css';
import CareersNav from '../../../components/CareersNav';
import PageBanner from '../../../components/PageBanner';
import ScrollUpBtn from '../../../components/ScrollUpBtn';

const ProductSpotlightPage = () => (
  <div className={styles.pageRoot}>
    <Head>
      <title>Product | Career Spotlights | Careers Hub | UNSW WIT</title>
    </Head>

    <CareersNav active="spotlights" />
    <PageBanner
      eyebrow="Career Spotlight"
      title="Product"
      description="This spotlight is being written up — check back soon."
    />

    <ScrollUpBtn />
  </div>
);

export default ProductSpotlightPage;
