import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {
  navigationBarContent,
  aboutUsDropdownContent,
  mediaDropdownContent,
} from "../data/navbarData";
import {
  changeAboutUsToArrowDown,
  changeAboutUsToArrowRight,
  changeMediaToArrowDown,
  changeMediaToArrowRight,
} from "./navbarHelpers";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const CompactNavigationBar = () => {
  const [clearNavBar, setClearNavBar] = useState(true);
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const pageLoading = false;

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

  // close menus if a page has been loaded
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
              {/* change WIT logo depending on device theme and scroll position */}
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
          {/* change menu icon if menu is open or closed */}
          <button className={styles.menuButton} onClick={menuClick}>
            {menuOpen ? (
              <CloseIcon className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </button>
        </div>
      </div>
      {/* make menu visible if menu is open */}
      <div
        className={
          menuOpen
            ? styles.menuContainer
            : `${styles.hiddenMenu} ${styles.menuContainer}`
        }
      >
        {/* if the navbar is transparent then the menu is also transparent */}
        <div
          className={
            clearNavBar && router.pathname != "/404"
              ? `${styles.clearMenuContent} ${styles.menuContent}`
              : styles.menuContent
          }
        >
          {navigationBarContent.map((page, index) => {
            const menuContentLength =
              Object.keys(navigationBarContent).length - 1;
            if (page.dropdownContent) {
              const dropdownContentLength =
                Object.keys(page.dropdownContent).length - 1;
              return (
                <div key={index}>
                  <div
                    className={styles.menuDropdownContainer}
                    id={page.id}
                    onClick={
                      page.id === "aboutUsDropdown"
                        ? aboutUsDropdownClick
                        : mediaDropdownClick
                    }
                    key={index}
                  >
                    {/* apply dropdown underline and red text color accordingly:
                        if the current page belongs to the dropdown, the text should be underlined
                        if the dropdown is open, the text should be red */}
                    <div
                      className={
                        page.id === "aboutUsDropdown"
                          ? router.asPath.split("/")[1] === "about" &&
                            aboutUsDropdownOpen
                            ? `${styles.currentPageMenuUnderline} ${styles.currentDropdown} ${styles.menuItem}`
                            : router.asPath.split("/")[1] === "about"
                            ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                            : aboutUsDropdownOpen
                            ? `${styles.currentDropdown} ${styles.menuItem}`
                            : styles.menuItem
                          : router.asPath.split("/")[1] === "media" &&
                            mediaDropdownOpen
                          ? `${styles.currentPageMenuUnderline} ${styles.currentDropdown} ${styles.menuItem}`
                          : router.asPath.split("/")[1] === "media"
                          ? `${styles.currentPageMenuUnderline} ${styles.menuItem}`
                          : mediaDropdownOpen
                          ? `${styles.currentDropdown} ${styles.menuItem}`
                          : styles.menuItem
                      }
                      key={index}
                    >
                      <a id={page.text} key={index}>
                        {page.pageName}
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      page.id === "aboutUsDropdown"
                        ? aboutUsDropdownOpen
                          ? styles.menuDropdownContent
                          : `${styles.menuDropdownContent} ${styles.hiddenMenuDropdownContent}`
                        : page.id === "mediaDropdown" && mediaDropdownOpen
                        ? styles.menuDropdownContent
                        : `${styles.menuDropdownContent} ${styles.hiddenMenuDropdownContent}`
                    }
                    key={index}
                  >
                    {page.dropdownContent.map((page, index) => {
                      return (
                        <Link href={page.link} key={index}>
                          <div
                            className={
                              router.asPath.split("/")[2] ===
                              page.link.split("/")[2]
                                ? `${styles.currentPageMenuBold} ${
                                    index === dropdownContentLength
                                      ? styles.menuItemEnd
                                      : styles.menuItem
                                  }`
                                : index === dropdownContentLength
                                ? styles.menuItemEnd
                                : styles.menuItem
                            }
                            key={index}
                          >
                            <page.icon className={styles.icon} key={index} />
                            <a key={index}>{page.pageName}</a>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return (
              <Link href={page.link} key={index}>
                <div className={styles.menuItemContent} key={index}>
                  <div
                    className={
                      router.asPath === page.link
                        ? `${styles.currentPageMenuUnderline} ${
                            index === menuContentLength
                              ? styles.menuItemEnd
                              : styles.menuItem
                          }`
                        : index === menuContentLength
                        ? styles.menuItemEnd
                        : styles.menuItem
                    }
                    key={index}
                    onClick={menuItemClick}
                  >
                    <a key={index}>{page.pageName}</a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CompactNavigationBar;
