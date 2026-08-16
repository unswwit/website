import React, { useEffect, useRef } from 'react';
import styles from '../styles/CareersHub.module.css';
import { SpotlightEntry } from '../lib/careersHubData';

interface SpotlightBodyProps {
  entry: SpotlightEntry;
  icon: string;
}

// Reformats the flat h4/p/ul spotlight content into a magazine-style layout 
function enhanceBody(container: HTMLDivElement) {
  const children = Array.from(container.children);
  let firstPFound = false;
  let longPCount = 0;
  children.forEach((el) => {
    if (el.tagName === 'H4') {
      el.classList.add(styles.mbDivider);
    } else if (el.tagName === 'UL') {
      el.classList.add(styles.mbDashgrid);
    } else if (el.tagName === 'P' && !el.classList.contains(styles.src)) {
      if (!firstPFound) {
        el.classList.add(styles.mbQuote);
        firstPFound = true;
      } else if ((el.textContent || '').length > 200) {
        longPCount++;
        if (longPCount % 2 === 0) el.classList.add(styles.mbPanel);
      }
    }
  });
  if (children.length && children[0].tagName === 'H4') {
    children[0].classList.remove(styles.mbDivider);
  }
}

// Standalone-page version of the write-up styling that used to live inside
// <SpotlightModal /> 
const SpotlightBody = ({ entry, icon }: SpotlightBodyProps) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) enhanceBody(bodyRef.current);
  }, [entry]);

  return (
    <div className={styles.spotlightArticle}>
      <div className={styles.modalHeader}>
        <div className={styles.modalTitleWrap}>
          <div className={styles.modalIcon}>{icon}</div>
          <div>
            <h1 className={styles.modalTitle}>{entry.title}</h1>
            {entry.stat && <span className={styles.modalStat}>{entry.stat}</span>}
          </div>
        </div>
      </div>
      <div className={styles.modalDots}>
        <span />
        <span />
        <span />
      </div>
      {/* Body content is pre-rendered HTML from the Careers Guide source docs */}
      <div
        className={styles.modalBody}
        ref={bodyRef}
        dangerouslySetInnerHTML={{ __html: entry.body }}
      />
    </div>
  );
};

export default SpotlightBody;
