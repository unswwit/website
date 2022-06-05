import React from "react";
import "../../styles/style.css";
import styles from "../../styles/team.module.css";

const Execs = (props) => {
  const socials = {
    linkedin: "https://www.linkedin.com/in/" + props.linkedin + "/",
    facebook: "https://www.facebook.com/" + props.fb,
    email: "mailto:" + props.email,
  };

  return (
    <div className={styles.execCol}>
      <div className={styles.profile}>
        <div>
          {props.imgUrl && (
            <div className={styles.profileCrop}>
              <img
                src={process.env.PUBLIC_URL + props.imgUrl}
                className={`${styles.profileImg} ${styles[props.className]}`}
                alt={props.name}
              />
            </div>
          )}
          <div className={styles.profileDetails}>
            <p className={styles.profileTextName}>{props.name}</p>
            <p className={styles.profileTextPosition}>{props.position}</p>
            {props.degree && (
              <p className={styles.profileDegree}>
                {props.degree}
                {props.year && ", " + props.year + " year"}
              </p>
            )}
            {props.linkedin && (
              <div className={styles.iconBar}>
                {Object.keys(socials).map((social) => {
                  return (
                    <a
                      href={socials[social]}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={social}
                    >
                      <img
                        className={styles.icon}
                        src={`${process.env.PUBLIC_URL}/icons/${social}.png`}
                        alt={social}
                      />
                    </a>
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
