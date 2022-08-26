import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import CompactNavigationBar from "./CompactNavigationBar";

// import dropdownContainer icons
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
  const [clearNavBar, setClearNavBar] = useState(false);
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const [compactNavBar, setCompactNavBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkBottomScreen);
    return () => {
      window.removeEventListener("scroll", checkBottomScreen);
    };
  }, []);

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  useEffect(() => {
    checkTopScreen();
    window.addEventListener("scroll", checkTopScreen);
    return () => {
      window.removeEventListener("scroll", checkTopScreen);
    };
  }, []);

  const checkWindowWidth = () => {
    const checkWidth = window.innerWidth < "950";
    setCompactNavBar(checkWidth);
  };

  const checkBottomScreen = () => {
    const checkBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    setHiddenNavBar(checkBottom);
  };

  const checkTopScreen = () => {
    const checkTop = window.scrollY < 60;
    setClearNavBar(checkTop);
  };

  /* return hamburger navbar if screen size is smaller than 950px,
    otherwise return regular navbar */
  return compactNavBar ? (
    <CompactNavigationBar />
  ) : (
    /* return clear or hidden regular navbar if at top or bottom of screen */
    <nav
      className={
        clearNavBar && router.pathname != "/404"
          ? `${styles.clearNavBar} ${styles.navBarContainer}`
          : hiddenNavBar
          ? `${styles.hiddenNavBar} ${styles.navBarContainer}`
          : styles.navBarContainer
      }
    >
      <div className={styles.navBarGrid}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <Image
                className={styles.logoGridItem}
                src={
                  darkMode || (clearNavBar && router.pathname != "/404")
                    ? "/logo-white.png"
                    : "/logo-black.png"
                }
                alt="wit logo"
                width={40}
                height={35}
              />
            </a>
          </Link>
        </div>
        <div className={styles.emptyGridItem}></div>
        <div className={`${styles.homeGridItem} ${styles.linkContainer}`}>
          <Link href="/">
            <div className={styles.linkContent}>
              <a>Home</a>
              <div
                className={
                  router.asPath === "/"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.dropdownContainer} ${styles.aboutUsGridItem} ${styles.linkContainer}`}
        >
          <Link href="/about/our-story">
            <div className={styles.linkContent}>
              <a>About Us ▾</a>
              <div
                className={
                  router.asPath.split("/")[1] === "about"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
          <div
            className={
              clearNavBar && router.pathname != "/404"
                ? `${styles.clearDropdownContent} ${styles.dropdownContent}`
                : styles.dropdownContent
            }
          >
            <Link href="/about/our-story">
              <div
                className={
                  router.asPath.split("/")[2] === "our-story"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <ChromeReaderModeOutlinedIcon className={styles.icon} />
                <a>Our Story</a>
              </div>
            </Link>
            <Link href="/about/sponsors-affiliations">
              <div
                className={
                  router.asPath.split("/")[2] === "sponsors-affiliations"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <FavoriteBorderIcon className={styles.icon} />
                <a>Sponsors and Affiliations</a>
              </div>
            </Link>
            <Link href="/about/our-team">
              <div
                className={
                  router.asPath.split("/")[2] === "our-team"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <PeopleOutlineIcon className={styles.icon} />
                <a>Our Team</a>
              </div>
            </Link>
            <Link href="/about/contact-us">
              <div
                className={
                  router.asPath.split("/")[2] === "contact-us"
                    ? `${styles.currentPageBold} ${styles.dropdownItemEnd}`
                    : styles.dropdownItemEnd
                }
              >
                <PhoneOutlinedIcon className={styles.icon} />
                <a>Contact Us</a>
              </div>
            </Link>
          </div>
        </div>

        <div className={`${styles.eventsGridItem} ${styles.linkContainer}`}>
          <Link href="/events">
            <div className={styles.linkContent}>
              <a>Events</a>
              <div
                className={
                  router.asPath === "/events"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
        </div>
        <div
          className={`${styles.opportunitiesGridItem} ${styles.linkContainer}`}
        >
          <Link href="/opportunities">
            <div className={styles.linkContent}>
              <a>Opportunities</a>
              <div
                className={
                  router.asPath === "/opportunities"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
        </div>
        <div
          className={`${styles.dropdownContainer} ${styles.mediaGridItem} ${styles.linkContainer}`}
        >
          <Link href="/media/blog">
            <div className={styles.linkContent}>
              <a>Media ▾</a>
              <div
                className={
                  router.asPath.split("/")[1] === "media"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
          <div
            className={
              clearNavBar && router.pathname != "/404"
                ? `${styles.clearDropdownContent} ${styles.dropdownContent}`
                : styles.dropdownContent
            }
          >
            <Link href="/media/blog">
              <div
                className={
                  router.asPath.split("/")[2] === "blog"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <InsertDriveFileOutlinedIcon className={styles.icon} />
                <a>Blog Posts</a>
              </div>
            </Link>
            <Link href="/media/podcast">
              <div
                className={
                  router.asPath.split("/")[2] === "podcast"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <HeadsetMicOutlinedIcon className={styles.icon} />
                <a>Podcast</a>
              </div>
            </Link>
            <Link href="/media/publications">
              <div
                className={
                  router.asPath.split("/")[2] === "publications"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <LocalPrintshopOutlinedIcon className={styles.icon} />
                <a>Publications</a>
              </div>
            </Link>
            <Link href="/media/marketing">
              <div
                className={
                  router.asPath.split("/")[2] === "marketing"
                    ? `${styles.currentPageBold} ${styles.dropdownItem}`
                    : styles.dropdownItem
                }
              >
                <ImageOutlinedIcon className={styles.icon} />
                <a>Marketing</a>
              </div>
            </Link>
            <Link href="/media/videos">
              <div
                className={
                  router.asPath.split("/")[2] === "videos"
                    ? `${styles.currentPageBold} ${styles.dropdownItemEnd}`
                    : styles.dropdownItemEnd
                }
              >
                <VideocamOutlinedIcon className={styles.icon} />
                <a>Videos</a>
              </div>
            </Link>
          </div>
        </div>
        <div className={`${styles.joinUsGridItem} ${styles.linkContainer}`}>
          <Link href="/join-us">
            <div className={styles.linkContent}>
              <a>Join Us</a>
              <div
                className={
                  router.asPath === "/join-us"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
