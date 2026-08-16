import React, { useRef, useState } from 'react';
import styles from '../styles/CareersHub.module.css';
import { SpotlightEntry } from '../lib/careersHubData';

const ToolkitItem = ({
  entry,
  index,
  isOpen,
  onToggle,
}: {
  entry: SpotlightEntry;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className={`${styles.toolkitItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.toolkitTrigger} type="button" onClick={onToggle}>
        <span className={styles.toolkitNum}>{num}</span>
        <span className={styles.toolkitName}>{entry.title}</span>
        <span className={styles.toolkitIcon}>+</span>
      </button>
      <div
        className={styles.toolkitPanel}
        style={{ maxHeight: isOpen ? panelRef.current?.scrollHeight : 0 }}
      >
        <div
          className={styles.toolkitPanelInner}
          ref={panelRef}
          // Body content is pre-rendered HTML from the Careers Guide source docs
          // (see lib/careersHubData.ts) — safe/authored content, not user input.
          dangerouslySetInnerHTML={{ __html: entry.body }}
        />
      </div>
    </div>
  );
};

// Accordion listing every Job Searching guide (resume, LinkedIn, interviews,
// aptitude tests, etc.) — only one panel open at a time.
const ToolkitAccordion = ({ entries }: { entries: Record<string, SpotlightEntry> }) => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className={styles.toolkitList}>
      {Object.entries(entries).map(([key, entry], i) => (
        <ToolkitItem
          key={key}
          entry={entry}
          index={i}
          isOpen={openKey === key}
          onToggle={() => setOpenKey(openKey === key ? null : key)}
        />
      ))}
    </div>
  );
};

export default ToolkitAccordion;
