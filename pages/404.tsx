import { useEffect } from 'react';
import styles from '../styles/NotFound.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.container}>
      <Head>
        <title>Page Not Found | UNSW WIT</title>
      </Head>
      <Image
        id={styles.image404}
        src={'/404.png'}
        alt="404"
        width="375"
        height="375"
      />
      <h2>Page Not Found</h2>
      <p>Oops! We can&apos;t seem to find the page you are looking for.</p>
      <div id={styles.homeBtn}>
        <Link href="/" legacyBehavior>
          <div className={styles.text}>Go back home</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
