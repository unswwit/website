import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Navbar from "../lib/helpers/navbar";
import { navigationBarContent } from "../data/navbar";
import {
  changeAboutUsToArrowDown,
  changeAboutUsToArrowRight,
  changeMediaToArrowDown,
  changeMediaToArrowRight,
} from "./navbarHelpers";

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

  // return hamburger navbar if screen size is smaller than 950px
  return compactNavBar ? (
    <Navbar />
  ) : (
    /* return clear or hidden navbar if at top or bottom of screen respectively, 
       otherwise return regular navbar */
    <nav
      className={
        clearNavBar && router.pathname !== "/404"
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
              {/* change WIT logo depending on device theme and scroll position */}
              <Image
                className={styles.logoGridItem}
                src={
                  darkMode || (clearNavBar && router.pathname !== "/404")
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
        {navigationBarContent.map((page, index) => {
          if (page.dropdownContent) {
            const dropdownContentLength =
              Object.keys(page.dropdownContent).length - 1;
            return (
              <div
                className={`${styles.dropdownContainer} ${page.itemName} ${styles.linkContainer}`}
                id={page.id}
                key={index}
              >
                <Link href={page.link}>
                  <div className={styles.linkContent}>
                    <a id={page.text}>{page.pageName}</a>
                    <div
                      className={
                        router.asPath === page.link
                          ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                          : styles.linkUnderline
                      }
                    ></div>
                  </div>
                </Link>
                <div
                  className={
                    clearNavBar && router.pathname !== "/404"
                      ? `${styles.clearDropdownContent} ${styles.dropdownContent}`
                      : styles.dropdownContent
                  }
                >
                  {page.dropdownContent.map((page, index) => {
                    return (
                      <Link href={page.link} key={index}>
                        <div
                          className={
                            router.asPath.split("/")[2] ===
                            page.link.split("/")[2]
                              ? `${styles.currentPageBold} ${
                                  index === dropdownContentLength
                                    ? styles.dropdownItemEnd
                                    : styles.dropdownItem
                                }`
                              : index === dropdownContentLength
                              ? styles.dropdownItemEnd
                              : styles.dropdownItem
                          }
                        >
                          <page.icon className={styles.icon} />
                          <a>{page.pageName}</a>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <div
              className={`${page.itemName} ${styles.linkContainer}`}
              key={index}
            >
              <Link href={page.link}>
                <div className={styles.linkContent}>
                  <a>{page.pageName}</a>
                  <div
                    className={
                      router.asPath === page.link
                        ? `${styles.currentPageUnderline} ${styles.linkUnderline}`
                        : styles.linkUnderline
                    }
                  ></div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationBar;