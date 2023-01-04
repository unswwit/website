import styles from '../styles/Team.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Directors = (props: any) => {
  return (
    <div className={styles.execCol}>
      <div className={styles.profile}>
        <div>
          {props.imgUrl && (
            <div className={styles.dirProfileCrop}>
              <div className={styles.dirProfileImg}>
                <Image
                  src={props.imgUrl}
                  className={`${styles[props.className]}`}
                  alt={props.name}
                  width="250px"
                  height="250px"
                />
              </div>
            </div>
          )}
          <div className={styles.profileDetails}>
            <p className={styles.dirProfileTextName}>{props.name}</p>
            <p className={styles.profileTextPosition}>{props.position}</p>
            {props.degree && (
              <>
                <p className={styles.profileDegree}>
                  {'(' + props.pronouns + ')'}
                </p>
                <p className={styles.profileDegree}>
                  {props.degree}
                  {props.year && ', ' + props.year + ' year'}
                </p>
              </>
            )}
            <div className={styles.iconBar}>
              <Link
                target="blank"
                href={'mailto:' + props.email}
                rel="noopener noreferrer"
                key={'email'}
              >
                <a className={styles.icon}>
                  <Image
                    src={'/icons/email.png'}
                    alt={'email'}
                    width="25px"
                    height="25px"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directors;
