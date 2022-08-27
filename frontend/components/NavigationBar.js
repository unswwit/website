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

  /* check whether device is in light or dark mode 
     and change darkMode state accordingly */
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  /* check whether user is at the bottom of the page when scrolling
     and change hiddenNavBar state accordingly */
  useEffect(() => {
    window.addEventListener("scroll", checkBottomScreen);
    return () => {
      window.removeEventListener("scroll", checkBottomScreen);
    };
  }, []);

  /* check window width when the window is resized
     and change compactNavBar state accordingly */
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  /* check whether user is at the top of the page when scrolling
     and change clearNavBar state accordingly */
  useEffect(() => {
    checkTopScreen();
    window.addEventListener("scroll", checkTopScreen);
    return () => {
      window.removeEventListener("scroll", checkTopScreen);
    };
  }, []);

  /* add mouseover and mouseleave event listeners to the dropdown containers */
  useEffect(() => {
    let aboutUsDropdown = document.getElementById("aboutUsDropdown");
    let mediaDropdown = document.getElementById("mediaDropdown");
    aboutUsDropdown.addEventListener("mouseover", changeAboutUsToArrowDown);
    aboutUsDropdown.addEventListener("mouseleave", changeAboutUsToArrowRight);
    mediaDropdown.addEventListener("mouseover", changeMediaToArrowDown);
    mediaDropdown.addEventListener("mouseleave", changeMediaToArrowRight);
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

  const changeAboutUsToArrowDown = () => {
    let aboutUsText = document.getElementById("aboutUsText");
    aboutUsText.innerHTML = "About Us ▾";
  };

  const changeAboutUsToArrowRight = () => {
    let aboutUsText = document.getElementById("aboutUsText");
    aboutUsText.innerHTML = "About Us ▸";
  };

  const changeMediaToArrowDown = () => {
    let mediaText = document.getElementById("mediaText");
    mediaText.innerHTML = "Media ▾";
  };

  const changeMediaToArrowRight = () => {
    let mediaText = document.getElementById("mediaText");
    mediaText.innerHTML = "Media ▸";
  };

  /* return hamburger navbar if screen size is smaller than 950px,
     otherwise return regular navbar */
  return compactNavBar ? (
    <CompactNavigationBar />
  ) : (
    /* return clear or hidden navbar if at top or bottom of screen respectively,
       otherwise return regular navbar */
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
              {/* change WIT logo color depending on 
                  the device theme and current scroll position */}
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
              {/* underline current page name on the navbar, 
                  same structure for the other links */}
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

        {/* div for dropdown inside navbar */}
        <div
          className={`${styles.dropdownContainer} ${styles.aboutUsGridItem} ${styles.linkContainer}`}
          id="aboutUsDropdown"
        >
          <Link href="/about/our-story">
            <div className={styles.linkContent}>
              <a id="aboutUsText">About Us ▸</a>
              <div
                className={
                  router.asPath.split("/")[1] === "about"
                    ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                    : styles.linkUnderline
                }
              ></div>
            </div>
          </Link>
          {/* if the navbar is transparent then the dropdown is also transparent,
              same structure for the other dropdown links */}
          <div
            className={
              clearNavBar && router.pathname != "/404"
                ? `${styles.clearDropdownContent} ${styles.dropdownContent}`
                : styles.dropdownContent
            }
          >
            <Link href="/about/our-story">
              {/* make the current page name in the dropdown bold, 
                  same structure for the other dropdown links */}
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
          id="mediaDropdown"
        >
          <Link href="/media/blog">
            <div className={styles.linkContent}>
              <a id="mediaText">Media ▸</a>
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
