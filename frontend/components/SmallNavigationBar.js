import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
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

const SmallNavigationBar = () => {
  const [invisNavBar, setInvisNavBar] = useState(false);
  const [clearNavBar, setClearNavBar] = useState(false);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
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

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItemClick = () => {
    setAboutUsOpen(false);
    setMediaOpen(false);
    setMenuOpen(false);
  };

  const aboutClick = () => {
    setAboutUsOpen(!aboutUsOpen);
  };

  const mediaClick = () => {
    setMediaOpen(!mediaOpen);
  };

  return (
    <nav
      className={
        clearNavBar && router.pathname != "/404"
          ? `${styles.clearNavigationBar} ${styles.navigationBar}`
          : invisNavBar
          ? `${styles.invisNavigationBar} ${styles.navigationBar}`
          : styles.navigationBar
      }
    >
      <div className={styles.smallNavContainer}>
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
        <div className={`${styles.item7} ${styles.linkItem}`}>
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
          menuOpen ? styles.menu : `${styles.invisMenu} ${styles.menu}`
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
            <div className={styles.menuBox}>
              <div
                className={
                  router.asPath === "/"
                    ? `${styles.currentPageMenuOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <a>Home</a>
              </div>
            </div>
          </Link>
          <div className={styles.menuDropdownButton} onClick={aboutClick}>
            <div
              className={
                router.asPath.split("/")[1] === "about" && aboutUsOpen
                  ? `${styles.currentPageMenuOverlay} ${styles.currentDropdownMenu} ${styles.menuItem}`
                  : router.asPath.split("/")[1] === "about"
                  ? `${styles.currentPageMenuOverlay} ${styles.menuItem}`
                  : aboutUsOpen
                  ? `${styles.currentDropdownMenu} ${styles.menuItem}`
                  : styles.menuItem
              }
            >
              <a>About Us ▾</a>
            </div>
          </div>
          <div
            className={
              aboutUsOpen
                ? styles.menuDropdownItem
                : `${styles.menuDropdownItem} ${styles.hiddenMenuDropdownItem}`
            }
          >
            <Link href="/about/our-story">
              <div
                className={
                  router.asPath.split("/")[2] === "our-story"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <ChromeReaderModeOutlinedIcon className="icon" />
                <a>Our Story</a>
              </div>
            </Link>
            <Link href="/about/sponsors-affiliations">
              <div
                className={
                  router.asPath.split("/")[2] === "sponsors-affiliations"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <FavoriteBorderIcon className="icon" />
                <a>Sponsors and Affiliations</a>
              </div>
            </Link>
            <Link href="/about/our-team">
              <div
                className={
                  router.asPath.split("/")[2] === "our-team"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <PeopleOutlineIcon className="icon" />
                <a>Our Team</a>
              </div>
            </Link>
            <Link href="/about/contact-us">
              <div
                className={
                  router.asPath.split("/")[2] === "contact-us"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItemEnd}`
                    : styles.menuItemEnd
                }
                onClick={menuItemClick}
              >
                <PhoneOutlinedIcon className="icon" />
                <a>Contact Us</a>
              </div>
            </Link>
          </div>
          <Link href="/events">
            <div className={styles.menuBox}>
              <div
                className={
                  router.asPath === "/events"
                    ? `${styles.currentPageMenuOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <a>Events</a>
              </div>
            </div>
          </Link>
          <Link href="/opportunities">
            <div className={styles.menuBox}>
              <div
                className={
                  router.asPath === "/opportunities"
                    ? `${styles.currentPageMenuOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <a>Opportunities</a>
              </div>
            </div>
          </Link>
          <div className={styles.menuDropdownButton} onClick={mediaClick}>
            <div
              className={
                router.asPath.split("/")[1] === "media" && mediaOpen
                  ? `${styles.currentPageMenuOverlay} ${styles.currentDropdownMenu} ${styles.menuItem}`
                  : router.asPath.split("/")[1] === "media"
                  ? `${styles.currentPageMenuOverlay} ${styles.menuItem}`
                  : mediaOpen
                  ? `${styles.currentDropdownMenu} ${styles.menuItem}`
                  : styles.menuItem
              }
            >
              <a>Media ▾</a>
            </div>
          </div>
          <div
            className={
              mediaOpen
                ? styles.menuDropdownItem
                : `${styles.menuDropdownItem} ${styles.hiddenMenuDropdownItem}`
            }
          >
            <Link href="/media/blog">
              <div
                className={
                  router.asPath.split("/")[2] === "blog"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <InsertDriveFileOutlinedIcon className="icon icon-media" />
                <a>Blog Posts</a>
              </div>
            </Link>
            <Link href="/media/podcast">
              <div
                className={
                  router.asPath.split("/")[2] === "podcast"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <HeadsetMicOutlinedIcon className="icon icon-media" />
                <a>Podcast</a>
              </div>
            </Link>
            <Link href="/media/publications">
              <div
                className={
                  router.asPath.split("/")[2] === "publications"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <LocalPrintshopOutlinedIcon className="icon icon-media" />
                <a>Publications</a>
              </div>
            </Link>
            <Link href="/media/marketing">
              <div
                className={
                  router.asPath.split("/")[2] === "marketing"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItem}`
                    : styles.menuItem
                }
                onClick={menuItemClick}
              >
                <ImageOutlinedIcon className="icon icon-media" />
                <a>Marketing</a>
              </div>
            </Link>
            <Link href="/media/videos">
              <div
                className={
                  router.asPath.split("/")[2] === "videos"
                    ? `${styles.currentPageMenuDropdownOverlay} ${styles.menuItemEnd}`
                    : styles.menuItemEnd
                }
                onClick={menuItemClick}
              >
                <VideocamOutlinedIcon className="icon icon-media" />
                <a>Videos</a>
              </div>
            </Link>
          </div>
          <Link href="/join-us">
            <div className={styles.menuBox}>
              <div
                className={
                  router.asPath === "/join-us"
                    ? `${styles.currentPageMenuOverlay} ${styles.menuItemEnd}`
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

export default SmallNavigationBar;
