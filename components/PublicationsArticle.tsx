import React from 'react';
import styles from '../styles/Publications.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatPublicationsDate } from '../lib/helpers/date';
import * as gtag from '../lib/gtag';

export default function PubArticle(props: any) {
  const trackLink = () => {
    gtag.event({
      label: `${props.heading}`,
    });
  };

  return (
    <div className={styles.article}>
      {/*Start of publications article*/}
      <div className={styles.dark} />
      <div className={styles.articleImg}>
        <Image src={props.imgUrl} alt={props.heading} fill />
      </div>

      <div className={styles.textContainer}>
        <h2>{props.heading}</h2>
        <p>{formatPublicationsDate(props.date)}</p>
        <div tabIndex={0} role="button" className={styles.button}>
          <Link href={props.url} target="_blank" rel="noopener noreferrer" onClick={trackLink}>
            Read More
          </Link>
        </div>
      </div>
      {/*End of publications article*/}
    </div>
  );
}
