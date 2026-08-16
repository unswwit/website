// @ts-nocheck comment
import React from 'react';
import styles from '../styles/CareersHub.module.css';

export default function CareerResourceCard({ resource, index }: any) {
  const { title, category, description, link, image } = resource.fields;
  const imgUrl = image ? 'https:' + image.fields.file.url : null;

  return (
    <a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceCard}
      key={index}
    >
      <div className={styles.resourceImageContainer}>
        {imgUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.resourceImg} src={imgUrl} alt={title} />
        ) : (
          <div className={styles.resourceNoImage}>No image</div>
        )}
      </div>
      <div className={styles.resourceContent}>
        {category && <p className={styles.resourceCategory}>{category}</p>}
        <p className={styles.resourceTitle}>{title}</p>
        {description && (
          <p className={styles.resourceDescription}>{description}</p>
        )}
      </div>
    </a>
  );
}
