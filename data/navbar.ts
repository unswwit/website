import styles from '../styles/Navbar.module.css';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const aboutUsDropdownContent = [
  {
    pageName: 'Our Story',
    link: '/about/our-story',
    icon: ChromeReaderModeOutlinedIcon,
  },
  {
    pageName: 'Our Team',
    link: '/about/our-team',
    icon: PeopleOutlineIcon,
  },
];

const mediaDropdownContent = [
  {
    pageName: 'Blog Posts',
    link: '/media/blog',
    icon: InsertDriveFileOutlinedIcon,
  },
  {
    pageName: 'Podcast',
    link: '/media/podcast',
    icon: HeadsetMicOutlinedIcon,
  },
  {
    pageName: 'Publications',
    link: '/media/publications',
    icon: LocalPrintshopOutlinedIcon,
  },
  {
    pageName: 'Marketing',
    link: '/media/marketing',
    icon: ImageOutlinedIcon,
  },
  {
    pageName: 'Videos',
    link: '/media/videos',
    icon: VideocamOutlinedIcon,
  },
];

const sponsorsDropdownContent = [
  {
    pageName: 'Current Sponsors',
    link: '/sponsors/current-sponsors',
    icon: AccountBalanceOutlinedIcon,
  },
  {
    pageName: 'Jobs Board',
    link: '/sponsors/jobs-board',
    icon: WorkOutlineOutlinedIcon,
  },
];

const eventsDropdownContent = [
  {
    pageName: 'All Events',
    link: '/events',
    icon: CalendarTodayOutlinedIcon,
  },
  {
    pageName: 'Empowerment Mentoring Program',
    link: 'https://empowerment.unswwit.com/',
    icon: LocalLibraryOutlinedIcon,
  },
  {
    pageName: 'Merch Store',
    link: 'https://unswwit-collection.square.site/',
    icon: LocalMallOutlinedIcon,
  },
];


const navigationBarContent = [
  {
    pageName: 'Home',
    link: '/',
    itemName: styles.homeGridItem,
  },
  {
    pageName: 'About Us ▸',
    link: '/about/our-story',
    category: 'about',
    itemName: styles.aboutUsGridItem,
    id: 'aboutUsDropdown',
    text: 'aboutUsText',
    dropdownContent: aboutUsDropdownContent,
  },
  {
    pageName: 'Sponsors ▸',
    link: '/sponsors/current-sponsors',
    category: 'sponsors',
    itemName: styles.sponsorsGridItem,
    id: 'sponsorsDropdown',
    text: 'sponsorsText',
    dropdownContent: sponsorsDropdownContent
  },
  {
    pageName: 'Events ▸',
    link: '/events',
    itemName: styles.eventsGridItem,
    id: 'eventsDropdown',
    text: 'eventsText',
    dropdownContent: eventsDropdownContent,
  },
  {
    pageName: 'Media ▸',
    link: '/media/blog',
    category: 'media',
    itemName: styles.mediaGridItem,
    id: 'mediaDropdown',
    text: 'mediaText',
    dropdownContent: mediaDropdownContent,
  },
  {
    pageName: 'Join Us',
    link: '/join-us',
    itemName: styles.joinUsGridItem,
  },
  {
    pageName: 'Contact Us',
    link: '/contact-us',
    itemName: styles.contactUsGridItem,
  },
];

export { navigationBarContent, aboutUsDropdownContent, mediaDropdownContent };
