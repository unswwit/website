import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.container}>
      <img
        id={styles.image404}
        src={process.env.PUBLIC_URL + "404.png"}
        alt="404"
      />
      <h2>Page Not Found</h2>
      <p>Oops! We can't seem to find the page you are looking for.</p>
      <Link id={styles.homeBtn} to="/" style={{ textDecoration: "none" }}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
