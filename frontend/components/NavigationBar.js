import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <Image
                className={styles.item0}
                src="/logo-black.png"
                alt="wit logo"
                width={40}
                height={35}
              />
            </a>
          </Link>
        </div>
        <div className={styles.emptyItem}></div>
        <div className={`${styles.item1} ${styles.linkItem}`}>
          <Link href="/">
            <div className={styles.gridBox}>
              <a>Home</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.dropdown} ${styles.item2} ${styles.linkItem}`}
        >
          <Link href="/about">
            <div className={styles.gridBox}>
              <a>About Us</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className={`${styles.item3} ${styles.linkItem}`}>
          <Link href="/events">
            <div className={styles.gridBox}>
              <a>Events</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
        </div>
        <div className={`${styles.item4} ${styles.linkItem}`}>
          <Link href="/opportunities">
            <div className={styles.gridBox}>
              <a>Opportunities</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
        </div>
        <div className={`${styles.item5} ${styles.linkItem}`}>
          <Link href="/media">
            <div className={styles.gridBox}>
              <a>Media</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
        </div>
        <div className={`${styles.item6} ${styles.linkItem}`}>
          <Link href="/join-us">
            <div className={styles.gridBox}>
              <a>Join Us</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
