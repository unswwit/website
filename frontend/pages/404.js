import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.container}>
      <Image
        id={styles.image404}
        src={`/404.png`}
        alt="404"
        width="350px"
        height="350px"
      />
      <h2>Page Not Found</h2>
      <p>Oops! We can't seem to find the page you are looking for.</p>
      <div id={styles.homeBtn}>
      <Link href="/">
        <div className={styles.text}>Go back home</div>
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
