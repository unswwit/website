import React from 'react';
import styles from '../styles/Marketing.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Initiative(props: any) {
  return (
    <li>
      <Link
        href={props.fb}
        className={styles.darken}
        target="_blank"
        rel="noopener noreferrer"
      >
        <>
          <Image src={props.imgUrl} alt={props.alt} layout={'fill'} />
          <div className={styles.message}>{props.date}</div>
        </>
      </Link>
    </li>
  );
}
