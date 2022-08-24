import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SmallNavigationBar from "./SmallNavigationBar";

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
  const router = useRouter();
  const [smallNavBar, setSmallNavBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // change youtube theme depending on user dark/light mode
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

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

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const checkWindowSize = () => {
    const checkSize = window.innerWidth < "950";
    setSmallNavBar(checkSize);
  };

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

  return smallNavBar ? (
    <SmallNavigationBar />
  ) : (
    <nav
      className={
        clearNavBar && router.pathname != "/404"
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
        <div className={styles.emptyItem}></div>
        <div className={`${styles.item1} ${styles.linkItem}`}>
          <Link href="/">
            <div className={styles.gridBox}>
              <a>Home</a>
              <div
                className={
                  router.asPath === "/"
                    ? `${styles.currentPageOverlay} ${styles.gridOverlay}`
                    : styles.gridOverlay
                }
              ></div>
            </div>
          </Link>
        </div>

        <div
          className={`${styles.dropdown} ${styles.item2} ${styles.linkItem}`}
        >
          <Link href="/about/our-story">
            <div className={styles.gridBox}>
              <a>About Us ▾</a>
              <div
                className={
                  router.asPath.split("/")[1] === "about"
                    ? `${styles.currentPageOverlay} ${styles.gridOverlay}`
                    : styles.gridOverlay
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBoxEnd}`
                    : styles.dropdownBoxEnd
                }
              >
                <PhoneOutlinedIcon className={styles.icon} />
                <a>Contact Us</a>
              </div>
            </Link>
          </div>
        </div>

        <div className={`${styles.item3} ${styles.linkItem}`}>
          <Link href="/events">
            <div className={styles.gridBox}>
              <a>Events</a>
              <div
                className={
                  router.asPath === "/events"
                    ? `${styles.currentPageOverlay} ${styles.gridOverlay}`
                    : styles.gridOverlay
                }
              ></div>
            </div>
          </Link>
        </div>
        <div className={`${styles.item4} ${styles.linkItem}`}>
          <Link href="/opportunities">
            <div className={styles.gridBox}>
              <a>Opportunities</a>
              <div
                className={
                  router.asPath === "/opportunities"
                    ? `${styles.currentPageOverlay} ${styles.gridOverlay}`
                    : styles.gridOverlay
                }
              ></div>
            </div>
          </Link>
        </div>
        <div
          className={`${styles.dropdown} ${styles.item5} ${styles.linkItem}`}
        >
          <Link href="/media/blog">
            <div className={styles.gridBox}>
              <a>Media ▾</a>
              <div
                className={
                  router.asPath.split("/")[1] === "media"
                    ? `${styles.currentPageOverlay} ${styles.gridOverlay}`
                    : styles.gridOverlay
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBox}`
                    : styles.dropdownBox
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
                    ? `${styles.currentPageDropdownOverlay} ${styles.dropdownBoxEnd}`
                    : styles.dropdownBoxEnd
                }
              >
                <VideocamOutlinedIcon className={styles.icon} />
                <a>Videos</a>
              </div>
            </Link>
          </div>
        </div>
        <div className={`${styles.item6} ${styles.linkItem}`}>
          <Link href="/join-us">
            <div className={styles.gridBox}>
              <a>Join Us</a>
              <div
                className={
                  router.asPath === "/join-us"
                    ? `${styles.currentPageOverlay} ${styles.gridOverlay}`
                    : styles.gridOverlay
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
