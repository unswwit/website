import React from "react";
import styles from "../styles/team.module.css";
import Image from "next/image";
import Link from "next/link";

const Execs = (props) => {
  const socials = {
    LinkedIn: "https://www.linkedin.com/in/" + props.linkedin + "/",
    Facebook: "https://www.facebook.com/" + props.fb,
    email: "mailto:" + props.email,
  };

  return (
    <div className={styles.execCol}>
      <div className={styles.profile}>
        <div>
          {props.imgUrl && (
            <div className={styles.profileCrop}>
              <div className={styles.profileImg}>
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
                    <Link target="blank" href={socials[social]} rel="noopener noreferrer" key={social}>
                      <a className={styles.icon}>
                        <Image
                          src={`/icons/${social}.png`}
                          alt={social}
                          width="25px"
                          height="25px"
                        />
                      </a>
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
