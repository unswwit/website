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
  const [aboutUsMenuOpen, setAboutUsMenuOpen] = useState(false);
  const [mediaMenuOpen, setMediaMenuOpen] = useState(false);
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
    checkTopScreen();
    window.addEventListener("scroll", checkTopScreen);
    return () => {
      window.removeEventListener("scroll", checkTopScreen);
    };
  }, []);

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
    setAboutUsMenuOpen(false);
    setMediaMenuOpen(false);
    setMenuOpen(false);
  };

  const aboutUsMenuClick = () => {
    setAboutUsMenuOpen(!aboutUsMenuOpen);
  };

  const mediaMenuClick = () => {
    setMediaMenuOpen(!mediaMenuOpen);
  };

  return (
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
      <div className={styles.compactNavBarGrid}>
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
        <div className={`${styles.menuIconGridItem} ${styles.linkContainer}`}>
          <button className={styles.menuButton} onClick={menuClick}>
            {menuOpen ? (
              <CloseIcon className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </button>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? styles.menuContainer
            : `${styles.hiddenMenu} ${styles.menuContainer}`
        }
      >
        <div
          className={
            clearNavBar && router.pathname != "/404"
              ? `${styles.clearMenuContent} ${styles.menuContent}`
              : styles.menuContent
          }
        >
          <Link href="/">
            <div className={styles.menuItemContent}>
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
          <div
            className={styles.menuDropdownContainer}
            onClick={aboutUsMenuClick}
          >
            <div
              className={
                router.asPath.split("/")[1] === "about" && aboutUsMenuOpen
                  ? `${styles.currentPageMenuUnderline} ${styles.currentDropdown} ${styles.menuItem}`
                  : router.asPath.split("/")[1] === "about"
                  ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                  : aboutUsMenuOpen
                  ? `${styles.currentDropdown} ${styles.menuItem}`
                  : styles.menuItem
              }
            >
              <a>About Us ▾</a>
            </div>
          </div>
          <div
            className={
              aboutUsMenuOpen
                ? styles.menuDropdownContent
                : `${styles.menuDropdownContent} ${styles.hiddenMenuDropdownContent}`
            }
          >
            <Link href="/about/our-story">
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
            onClick={mediaMenuClick}
          >
            <div
              className={
                router.asPath.split("/")[1] === "media" && mediaMenuOpen
                  ? `${styles.currentPageMenuUnderline} ${styles.currentDropdown} ${styles.menuItem}`
                  : router.asPath.split("/")[1] === "media"
                  ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                  : mediaMenuOpen
                  ? `${styles.currentDropdown} ${styles.menuItem}`
                  : styles.menuItem
              }
            >
              <a>Media ▾</a>
            </div>
          </div>
          <div
            className={
              mediaMenuOpen
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
