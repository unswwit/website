import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

// import dropdown menu icons
import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

const NavigationBar = () => {
  const [invisNavBar, setInvisNavBar] = useState(false);
  const [clearNavBar, setClearNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkBottomNavBar);
    return () => {
      window.removeEventListener("scroll", checkBottomNavBar);
    };
  }, []);

  useEffect(() => {
    checkTopNavBar();
    window.addEventListener("scroll", checkTopNavBar);
    return () => {
      window.removeEventListener("scroll", checkTopNavBar);
    };
  }, []);

  const checkBottomNavBar = () => {
    const checkBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    setInvisNavBar(checkBottom);
  };

  const checkTopNavBar = () => {
    const checkTop = window.scrollY < 60;
    setClearNavBar(checkTop);
  };

  return (
    <nav
      className={
        clearNavBar
          ? `${styles.clearNavigationBar} ${styles.navigationBar}`
          : invisNavBar
          ? `${styles.invisNavigationBar} ${styles.navigationBar}`
          : styles.navigationBar
      }
    >
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <Image
                className={styles.item0}
                src={clearNavBar ? "/logo-white.png" : "/logo-black.png"}
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
              <a>About Us ▾</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
          <div
            className={
              clearNavBar
                ? `${styles.clearDropdownContent} ${styles.dropdownContent}`
                : styles.dropdownContent
            }
          >
            <Link href="/about/our-story">
              <div className={styles.dropdownBox}>
                <ChromeReaderModeOutlinedIcon className="icon" />
                <a>Our Story</a>
              </div>
            </Link>
            <Link href="/about/sponsors-affiliations">
              <div className={styles.dropdownBox}>
                <FavoriteBorderIcon className="icon" />
                <a>Sponsors and Affiliations</a>
              </div>
            </Link>
            <Link href="/about/our-team">
              <div className={styles.dropdownBox}>
                <PeopleOutlineIcon className="icon" />
                <a>Our Team</a>
              </div>
            </Link>
            <Link href="/about/contact-us">
              <div className={styles.dropdownBoxEnd}>
                <PhoneOutlinedIcon className="icon" />
                <a>Contact Us</a>
              </div>
            </Link>
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
        <div
          className={`${styles.dropdown} ${styles.item5} ${styles.linkItem}`}
        >
          <Link href="/media">
            <div className={styles.gridBox}>
              <a>Media ▾</a>
              <div className={styles.gridOverlay}></div>
            </div>
          </Link>
          <div
            className={
              clearNavBar
                ? `${styles.clearDropdownContent} ${styles.dropdownContent}`
                : styles.dropdownContent
            }
          >
            <Link href="/media/blog">
              <div className={styles.dropdownBox}>
                <InsertDriveFileOutlinedIcon className="icon icon-media" />
                <a>Blog Posts</a>
              </div>
            </Link>
            <Link href="/media/podcast">
              <div className={styles.dropdownBox}>
                <HeadsetMicOutlinedIcon className="icon icon-media" />
                <a>Podcast</a>
              </div>
            </Link>
            <Link href="/media/publications">
              <div className={styles.dropdownBox}>
                <LocalPrintshopOutlinedIcon className="icon icon-media" />
                <a>Publications</a>
              </div>
            </Link>
            <Link href="/media/marketing">
              <div className={styles.dropdownBox}>
                <ImageOutlinedIcon className="icon icon-media" />
                <a>Marketing</a>
              </div>
            </Link>
            <Link href="/media/videos">
              <div className={styles.dropdownBoxEnd}>
                <VideocamOutlinedIcon className="icon icon-media" />
                <a>Videos</a>
              </div>
            </Link>
          </div>
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
