import styles from "../styles/Navbar.module.css";
import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

// page and link content for NavigationBar and CompactNavigationBar
const aboutUsDropdownContent = [
  {
    pageName: "Our Story",
    link: "/about/our-story",
    icon: ChromeReaderModeOutlinedIcon,
  },
  {
    pageName: "Sponsors and Affiliations",
    link: "/about/sponsors-affiliations",
    icon: FavoriteBorderIcon,
  },
  {
    pageName: "Our Team",
    link: "/about/our-team",
    icon: PeopleOutlineIcon,
  },
  {
    pageName: "Contact Us",
    link: "/about/contact-us",
    icon: PhoneOutlinedIcon,
  },
];

const mediaDropdownContent = [
  {
    pageName: "Blog Posts",
    link: "/media/blog",
    icon: InsertDriveFileOutlinedIcon,
  },
  {
    pageName: "Podcast",
    link: "/media/podcast",
    icon: HeadsetMicOutlinedIcon,
  },
  {
    pageName: "Publications",
    link: "/media/publications",
    icon: LocalPrintshopOutlinedIcon,
  },
  {
    pageName: "Marketing",
    link: "/media/marketing",
    icon: ImageOutlinedIcon,
  },
  {
    pageName: "Videos",
    link: "/media/videos",
    icon: VideocamOutlinedIcon,
  },
];

const navigationBarContent = [
  {
    pageName: "Home",
    link: "/",
    itemName: styles.homeGridItem,
  },
  {
    pageName: "About Us ▸",
    link: "/about/our-story",
    itemName: styles.aboutUsGridItem,
    id: "aboutUsDropdown",
    text: "aboutUsText",
    dropdownContent: aboutUsDropdownContent,
  },
  {
    pageName: "Events",
    link: "/events",
    itemName: styles.eventsGridItem,
  },
  {
    pageName: "Opportunities",
    link: "/opportunities",
    itemName: styles.opportunitiesGridItem,
  },
  {
    pageName: "Media ▸",
    link: "/media/blog",
    itemName: styles.mediaGridItem,
    id: "mediaDropdown",
    text: "mediaText",
    dropdownContent: mediaDropdownContent,
  },
  {
    pageName: "Join Us",
    link: "/join-us",
    itemName: styles.joinUsGridItem,
  },
];

export { navigationBarContent, aboutUsDropdownContent, mediaDropdownContent };
