import { useEffect } from 'react';
import styles from '../styles/NotFound.module.css';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.container}>
      <Image
        id={styles.image404}
        src={'/404.png'}
        alt="404"
        width="375px"
        height="375px"
      />
      <h2>Page Not Found</h2>
      <p>Oops! We can&apos;t seem to find the page you are looking for.</p>
      <div id={styles.homeBtn}>
        <Link href="/">
          <div className={styles.text}>Go back home</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
