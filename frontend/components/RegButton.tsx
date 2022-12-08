import styles from '../styles/Events.module.css';

const RegBtn = ({ link }: any) => {
  const openLink = () => {
    window.open(link);
  };

  return (
    <button type="button" onClick={openLink} className={styles.regButton}>
      Register
    </button>
  );
};

export default RegBtn;
