import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

// import menu icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import menuDropdownContainer icons
import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

const CompactNavigationBar = () => {
  const [clearNavBar, setClearNavBar] = useState(true);
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const pageLoading = false;

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

  /* check whether user is at the top of the page when scrolling
     and change clearNavBar state accordingly */
  useEffect(() => {
    checkTopScreen();
    window.addEventListener("scroll", checkTopScreen);
    return () => {
      window.removeEventListener("scroll", checkTopScreen);
    };
  }, []);

  /* check whether a page has been loaded when this component is rendered
     and close menus if true */
  useEffect(() => {
    if (pageLoading) {
      menuItemClick();
    }
  });

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

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItemClick = () => {
    setAboutUsDropdownOpen(false);
    setMediaDropdownOpen(false);
    setMenuOpen(false);
  };

  const aboutUsDropdownClick = () => {
    setAboutUsDropdownOpen(!aboutUsDropdownOpen);
    if (aboutUsDropdownOpen) {
      changeAboutUsToArrowRight();
    } else {
      changeAboutUsToArrowDown();
    }
  };

  const mediaDropdownClick = () => {
    setMediaDropdownOpen(!mediaDropdownOpen);
    if (mediaDropdownOpen) {
      changeMediaToArrowRight();
    } else {
      changeMediaToArrowDown();
    }
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

  /* set pageLoading boolean to true if page has loading screen */
  if (document.getElementById("loadingWillow")) {
    pageLoading = true;
  } else {
    pageLoading = false;
  }

  return (
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
      <div className={styles.compactNavBarGrid}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a onClick={menuItemClick}>
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
        <div className={`${styles.menuIconGridItem} ${styles.linkContainer}`}>
          {/* change menu icon if the menu is opened or closed */}
          <button className={styles.menuButton} onClick={menuClick}>
            {menuOpen ? (
              <CloseIcon className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </button>
        </div>
      </div>
      {/* make menu visible if the menu is open */}
      <div
        className={
          menuOpen
            ? styles.menuContainer
            : `${styles.hiddenMenu} ${styles.menuContainer}`
        }
      >
        {/* if the navbar is transparent then the menu is also transparent,
            same structure for the other menu links */}
        <div
          className={
            clearNavBar && router.pathname != "/404"
              ? `${styles.clearMenuContent} ${styles.menuContent}`
              : styles.menuContent
          }
        >
          <Link href="/">
            <div className={styles.menuItemContent}>
              {/* underline current page name in the menu, 
                  same structure for the other links */}
              <div
                className={
                  router.asPath === "/"
                    ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <a>Home</a>
              </div>
            </div>
          </Link>
          {/* div for dropdown inside menu */}
          <div
            className={styles.menuDropdownContainer}
            id="aboutUsDropdown"
            onClick={aboutUsDropdownClick}
          >
            {/* apply dropdown underline and red text color accordingly:
                if the current page belongs to the dropdown, the text should be underlined
                if the dropdown is open, the text should be red
                same structure for the other dropdowns */}
            <div
              className={
                router.asPath.split("/")[1] === "about" && aboutUsDropdownOpen
                  ? `${styles.currentPageMenuUnderline} ${styles.currentDropdown} ${styles.menuItem}`
                  : router.asPath.split("/")[1] === "about"
                  ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                  : aboutUsDropdownOpen
                  ? `${styles.currentDropdown} ${styles.menuItem}`
                  : styles.menuItem
              }
            >
              <a id="aboutUsText">About Us ▸</a>
            </div>
          </div>
          {/* make dropdown visible if the dropdown is open */}
          <div
            className={
              aboutUsDropdownOpen
                ? styles.menuDropdownContent
                : `${styles.menuDropdownContent} ${styles.hiddenMenuDropdownContent}`
            }
          >
            <Link href="/about/our-story">
              {/* make the current page name in the dropdown bold,
                  same structure for the other dropdown links */}
              <div
                className={
                  router.asPath.split("/")[2] === "our-story"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <ChromeReaderModeOutlinedIcon className={styles.icon} />
                <a>Our Story</a>
              </div>
            </Link>
            <Link href="/about/sponsors-affiliations">
              <div
                className={
                  router.asPath.split("/")[2] === "sponsors-affiliations"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <FavoriteBorderIcon className={styles.icon} />
                <a>Sponsors and Affiliations</a>
              </div>
            </Link>
            <Link href="/about/our-team">
              <div
                className={
                  router.asPath.split("/")[2] === "our-team"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <PeopleOutlineIcon className={styles.icon} />
                <a>Our Team</a>
              </div>
            </Link>
            <Link href="/about/contact-us">
              <div
                className={
                  router.asPath.split("/")[2] === "contact-us"
                    ? `${styles.currentPageMenuBold} ${styles.menuItemEnd}`
                    : styles.menuItemEnd
                }
                onClick={menuItemClick}
              >
                <PhoneOutlinedIcon className={styles.icon} />
                <a>Contact Us</a>
              </div>
            </Link>
          </div>
          <Link href="/events">
            <div className={styles.menuItemContent}>
              <div
                className={
                  router.asPath === "/events"
                    ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <a>Events</a>
              </div>
            </div>
          </Link>
          <Link href="/opportunities">
            <div className={styles.menuItemContent}>
              <div
                className={
                  router.asPath === "/opportunities"
                    ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <a>Opportunities</a>
              </div>
            </div>
          </Link>
          <div
            className={styles.menuDropdownContainer}
            id="mediaDropdown"
            onClick={mediaDropdownClick}
          >
            <div
              className={
                router.asPath.split("/")[1] === "media" && mediaDropdownOpen
                  ? `${styles.currentPageMenuUnderline} ${styles.currentDropdown} ${styles.menuItem}`
                  : router.asPath.split("/")[1] === "media"
                  ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                  : mediaDropdownOpen
                  ? `${styles.currentDropdown} ${styles.menuItem}`
                  : styles.menuItem
              }
            >
              <a id="mediaText">Media ▸</a>
            </div>
          </div>
          <div
            className={
              mediaDropdownOpen
                ? styles.menuDropdownContent
                : `${styles.menuDropdownContent} ${styles.hiddenMenuDropdownContent}`
            }
          >
            <Link href="/media/blog">
              <div
                className={
                  router.asPath.split("/")[2] === "blog"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <InsertDriveFileOutlinedIcon className={styles.icon} />
                <a>Blog Posts</a>
              </div>
            </Link>
            <Link href="/media/podcast">
              <div
                className={
                  router.asPath.split("/")[2] === "podcast"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <HeadsetMicOutlinedIcon className={styles.icon} />
                <a>Podcast</a>
              </div>
            </Link>
            <Link href="/media/publications">
              <div
                className={
                  router.asPath.split("/")[2] === "publications"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <LocalPrintshopOutlinedIcon className={styles.icon} />
                <a>Publications</a>
              </div>
            </Link>
            <Link href="/media/marketing">
              <div
                className={
                  router.asPath.split("/")[2] === "marketing"
                    ? `${styles.currentPageMenuBold} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <ImageOutlinedIcon className={styles.icon} />
                <a>Marketing</a>
              </div>
            </Link>
            <Link href="/media/videos">
              <div
                className={
                  router.asPath.split("/")[2] === "videos"
                    ? `${styles.currentPageMenuBold} ${styles.menuItemEnd}`
                    : styles.menuItemEnd
                }
                onClick={menuItemClick}
              >
                <VideocamOutlinedIcon className={styles.icon} />
                <a>Videos</a>
              </div>
            </Link>
          </div>
          <Link href="/join-us">
            <div className={styles.menuItemContent}>
              <div
                className={
                  router.asPath === "/join-us"
                    ? `${styles.currentPageMenuUnderline} ${styles.menuItemEnd}`
                    : styles.menuItemEnd
                }
                onClick={menuItemClick}
              >
                <a>Join Us</a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CompactNavigationBar;
