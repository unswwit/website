import React, { useState } from "react";
import Link from "next/link";

import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

const DropdownMenu = (props) => {
  const [showDropdownMedia, setShowDropdownMedia] = useState(false);
  const [showDropdownAbout, setShowDropdownAbout] = useState(false);

  const routes = {
    Home: ["/", "HOME"],
    "About Us": ["/about", "ABOUT US"],
    Events: ["/events", "EVENTS"],
    Opportunities: ["/opportunities", "OPPORTUNITIES"],
    Media: ["/media", "MEDIA"],
    "Join Us": ["/join-us", "JOIN US"],
  };

  const aboutRoutes = {
    "Our Story": ["/about/our-story", "OUR STORY"],
    "Sponsors and Affiliations": [
      "/about/sponsors-affiliations",
      "SPONSORS AND",
      "AFFILIATIONS",
    ],
    "Our Team": ["/about/our-team", "OUR TEAM"],
    "Contact Us": ["/about/contact-us", "CONTACT US"],
  };

  const mediaRoutes = {
    "Blog Posts": ["/media/blog", "BLOG POSTS"],
    Podcast: ["/media/podcast", "PODCAST"],
    Publications: ["/media/publications", "PUBLICATIONS"],
    Marketing: ["/media/marketing", "MARKETING"],
    Videos: ["/media/videos", "VIDEOS"],
  };

  const navBarCurrentState = () => {
    return props.navbarState;
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "OUR STORY":
        return <ChromeReaderModeOutlinedIcon className="icon" />;
      case "SPONSORS AND":
        return <FavoriteBorderIcon className="icon" />;
      case "OUR TEAM":
        return <PeopleOutlineIcon className="icon" />;
      case "CONTACT US":
        return <PhoneOutlinedIcon className="icon" />;
      case "BLOG POSTS":
        return <InsertDriveFileOutlinedIcon className="icon icon-media" />;
      case "PODCAST":
        return <HeadsetMicOutlinedIcon className="icon icon-media" />;
      case "PUBLICATIONS":
        return <LocalPrintshopOutlinedIcon className="icon icon-media" />;
      case "MARKETING":
        return <ImageOutlinedIcon className="icon icon-media" />;
      default:
        return <VideocamOutlinedIcon className="icon icon-media" />;
    }
  };

  const aboutDropdownItem = (index) => {
    switch (index) {
      case 1:
        return true;
      default:
        return false;
    }
  };

  return aboutDropdownItem(props.index) ? (
    // Items in navbar that are in "about" dropdown menu
    <li
      className={navBarCurrentState() ? "nav-item active-nav-item" : "nav-item"}
      key={"about"}
      onMouseEnter={() => setShowDropdownAbout(true)}
      onMouseLeave={() => setShowDropdownAbout(false)}
    >
      <div className="dropdown" display="static">
        <div
          className={
            navBarCurrentState()
              ? "dropdown-toggle active-nav-item"
              : "dropdown-toggle"
          }
        >
          <span>
            {/* Highlights navbar if user is on that page */}
            {navBarCurrentState() ? (
              <Link
                href={routes[props.route][0]}
                activeClassName="highlight-nav"
              >
                {routes[props.route][1]}
              </Link>
            ) : (
              <Link
                href={routes[props.route][0]}
                activeClassName="highlight-no-nav"
              >
                {routes[props.route][1]}
              </Link>
            )}
          </span>
        </div>
        <div
          className={
            showDropdownAbout
              ? navBarCurrentState()
                ? "dropdown-menu show"
                : "dropdown-menu transparent show"
              : "dropdown-menu"
          }
        >
          {Object.keys(aboutRoutes).map((aboutRoute) => {
            return (
              <div className="dropdown-item" key={aboutRoute}>
                <Link
                  herf={aboutRoutes[aboutRoute][0]}
                  activeClassName="highlight-dropdown"
                >
                  {getIcon(aboutRoutes[aboutRoute][1])}

                  {aboutRoutes[aboutRoute][1]}

                  {aboutRoutes[aboutRoute][2] === "AFFILIATIONS" ? (
                    <p className="affiliations-remove-gap">
                      {aboutRoutes[aboutRoute][2]}{" "}
                    </p>
                  ) : (
                    aboutRoutes[aboutRoute][2]
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  ) : (
    // Items in navbar that are in "media" dropdown menu
    <li
      className={navBarCurrentState() ? "nav-item active-nav-item" : "nav-item"}
      key={"media"}
      onMouseEnter={() => setShowDropdownMedia(true)}
      onMouseLeave={() => setShowDropdownMedia(false)}
    >
      <div className="dropdown" display="static">
        <div
          className={
            navBarCurrentState()
              ? "dropdown-toggle active-nav-item"
              : "dropdown-toggle"
          }
        >
          <span>
            {navBarCurrentState() ? (
              <Link
                href={routes[props.route][0]}
                activeClassName="highlight-nav"
              >
                {routes[props.route][1]}
              </Link>
            ) : (
              <Link
                href={routes[props.route][0]}
                activeClassName="highlight-no-nav"
              >
                {routes[props.route][1]}
              </Link>
            )}
          </span>
        </div>
        <div
          className={
            showDropdownMedia
              ? navBarCurrentState()
                ? "dropdown-menu show"
                : "dropdown-menu transparent mediaDD show"
              : "dropdown-menu"
          }
        >
          {Object.keys(mediaRoutes).map((mediaRoute) => {
            return (
              <div className="dropdown-item dropdown-media" key={mediaRoute}>
                <Link
                  href={mediaRoutes[mediaRoute][0]}
                  activeClassName="highlight-dropdown"
                >
                  {getIcon(mediaRoutes[mediaRoute][1])}
                  {mediaRoutes[mediaRoute][1]}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default DropdownMenu;
