import React from 'react';
import styles from '../styles/Publications.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatPublicationsDate } from '../lib/helpers/date';

export default function PubArticle(props: any) {
  return (
    <div className={styles.article}>
      {/*Start of publications article*/}
      <div className={styles.dark} />
      <div className={styles.articleImg}>
        <Image src={props.imgUrl} alt="wit logo" layout={'fill'} />
      </div>

      <div className={styles.textContainer}>
        <h2>{props.heading}</h2>
        <p>{formatPublicationsDate(props.date)}</p>
        <div tabIndex={0} role="button" className={styles.button}>
          <Link href={props.url}>
            <a target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </Link>
        </div>
      </div>
      {/*End of publications article*/}
    </div>
  );
}
