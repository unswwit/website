import styles from '../styles/Team.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';

const Execs = (props: any) => {
  const socials: any = {
    linkedin: 'https://www.linkedin.com/in/' + props.linkedin + '/',
    facebook: 'https://www.facebook.com/' + props.fb,
    email: 'mailto:' + props.email,
  };

  return (
    <div className={styles.execCol}>
      <div className={styles.profile}>
        <div>
          {props.imgUrl && (
            <div className={styles.profileCrop}>
              <div className={styles.profileImg}>
                <>
                  <Image
                    src={props.imgUrl}
                    className={`${styles[props.className]}`}
                    alt={props.name}
                    width="250"
                    height="250"
                  />
                </>
              </div>
            </div>
          )}
          <div className={styles.profileDetails}>
            <p className={styles.profileTextName}>{props.name}</p>
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
            {props.linkedin && (
              <div className={styles.iconBar}>
                {Object.keys(socials).map((social) => {
                  return (
                    <Link
                      target="blank"
                      href={socials[social]}
                      rel="noopener noreferrer"
                      key={social}
                      className={styles.icon}
                    >
                      <>
                        <Image
                          src={`/icons/${social}.png`}
                          alt={social}
                          width="25"
                          height="25"
                        />
                      </>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execs;
