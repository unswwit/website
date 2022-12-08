import styles from '../styles/Team.module.css';

const Subcom = (props: any) => {
  return (
    <div className={styles.subcomRow}>
      <div className={styles.subcomCol}>
        <div className={styles.profile}>
          <p className={styles.subcomProfileName}>{props.name}</p>
        </div>
      </div>

      <div className={styles.subcomLongerCol}>
        <div className={styles.profile}>
          <p className={styles.subcomProfileDegree}>
            {props.degree + ', ' + props.year + ' year'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subcom;
