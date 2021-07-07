import MessengerCustomerChat from "react-messenger-customer-chat";
import React, { Component } from "react";
import { HashRouter, Route, NavLink, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
//import "./loader.css";
import GoogleAnalytics from "./config/GoogleAnalytics";

import Home from "./home/home";
import JoinUs from "./join/joinUs";
import Sponsors from "./sponsors/sponsors";
import Opportunities from "./opportunities/opportunities";
import ContactUs from "./contact/contactUs";
import MarketingContent from "./marketing-archive/content";
import OurTeam from "./team/team";
import Blog from "./blog-gallery/blog";
import Publications from "./publications/publications";
import Events from "./events/events";
import Podcast from "./podcast/Podcast";
import EpisodePage from "./podcast/EpisodePage";
import NotFound from "./not-found/NotFound";
import OurStory from "./ourStory/OurStory";
import Videos from "./videos/videos";

import Menu from "./menu";
import MenuBtn from "./menuBtn";
import Footer from "./footer";

import ChromeReaderModeOutlinedIcon from "@material-ui/icons/ChromeReaderModeOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

class App extends Component {
  /*
  state = {
    loading: true,
  };*/

  highlightNav = {
    activeStyle: {
      fontWeight: "500",
      borderBottom: "solid",
      borderBottomWidth: 3,
      borderBottomColor: "#e85f5c",
    },
  };

  highlightNoNav = {
    activeStyle: {
      fontWeight: "500",
      borderBottom: "solid",
      borderBottomWidth: 1,
      borderBottomColor: "white",
    },
  };

  highlightDD = {
    activeStyle: {
      fontWeight: "500",
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      showDD: false,
      showDDAbout: false,
      menuOpen: false,
      navBar: false,
      hideNav: false,
    };
    this.navClass = "navbar navbar-expand-md navbar-dark bg-custom fixed-top";
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverAbout = this.handleHoverAbout.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.hideNavBar = this.hideNavBar.bind(this);
  }

  // change the background of the navigation bar based on scroll height
  changeBackground() {
    if (window.scrollY >= 60 || window.location.href.split("#")[1] === "/404") {
      this.setState({
        navBar: true,
      });
    } else {
      this.setState({
        navBar: false,
      });
    }
  }

  // open and close menu
  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  // show and hide drop down on hover (Media)
  handleHover(e) {
    this.setState({
      showDD: !this.state.showDD,
    });
    e.preventDefault();
  }

  // show and hide drop down on hover (About)
  handleHoverAbout(e) {
    this.setState({
      showDDAbout: !this.state.showDDAbout,
    });
    e.preventDefault();
  }

  // close the menu if the screen is being resized
  updateMenu = () => {
    if (window.innerWidth >= "950" && this.state.menuOpen) {
      this.handleMenuClick();
    }
  };

  // hide the navigation bar when a user is at the bottom of the page
  hideNavBar() {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      this.setState({
        hideNav: true,
      });
    } else {
      this.setState({
        hideNav: false,
      });
    }
  }

  /*
  fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };*/

  componentDidMount() {
    // google analytics
    GoogleAnalytics();

    window.addEventListener("hashchange", this.changeBackground);
    window.addEventListener("resize", this.updateMenu);
    window.addEventListener("scroll", this.changeBackground);
    window.addEventListener("scroll", this.hideNavBar);
    /*
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader");
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });*/
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenu);
    window.removeEventListener("scroll", this.changeBackground);
    window.removeEventListener("hashchange", this.changeBackground);
    window.removeEventListener("scroll", this.hideNavBar);
  }

  render() {
    /*
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }*/

    return (
      <div>
        {/*<div className="loader loader-default is-active"></div>*/}
        <HashRouter basename="/">
          <Menu
            open={this.state.menuOpen}
            handleMenuClick={this.handleMenuClick}
          />
          <MessengerCustomerChat
            pageId={process.env.REACT_APP_PAGE_ID}
            appId={process.env.REACT_APP_APP_ID}
          />
          <nav
            className={
              this.state.navBar
                ? this.state.hideNav
                  ? this.navClass + " activeNav hiddenNav"
                  : this.navClass + " activeNav"
                : this.state.hideNav
                ? this.navClass + " hiddenNav"
                : this.navClass
            }
          >
            <a className="navbar-brand" href="/">
              <img
                src={process.env.PUBLIC_URL + "./logo-black.png"}
                className="logo-black"
                alt="wit logo"
                style={{
                  width: "35px",
                  marginLeft: "15px",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              />
              <img
                src={
                  this.state.navBar
                    ? process.env.PUBLIC_URL + "./logo-black.png"
                    : process.env.PUBLIC_URL + "./logo-white.png"
                }
                className="photo"
                alt="wit logo"
                style={{
                  width: "35px",
                  marginLeft: "15px",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              />
            </a>
            <div className="navbar-collapse collapse w-100">
              <ul className="navbar-nav ml-auto">
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                >
                  {this.state.navBar ? (
                    <NavLink exact to="/" {...this.highlightNav}>
                      HOME
                    </NavLink>
                  ) : (
                    <NavLink exact to="/" {...this.highlightNoNav}>
                      HOME
                    </NavLink>
                  )}
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                  onMouseEnter={this.handleHoverAbout}
                  onMouseLeave={this.handleHoverAbout}
                >
                  <div className="dropdown" display="static">
                    <div
                      className={
                        this.state.navBar
                          ? "dropdown-toggle active-nav-item"
                          : "dropdown-toggle"
                      }
                    >
                      <span>
                        {this.state.navBar ? (
                          <NavLink to="/about" {...this.highlightNav}>
                            ABOUT US
                          </NavLink>
                        ) : (
                          <NavLink to="/about" {...this.highlightNoNav}>
                            ABOUT US
                          </NavLink>
                        )}
                      </span>
                    </div>
                    <div
                      className={
                        this.state.showDDAbout
                          ? this.state.navBar
                            ? "dropdown-menu show"
                            : "dropdown-menu transparent show"
                          : "dropdown-menu"
                      }
                    >
                      <div className="dropdown-item">
                        <NavLink to="/about/our-story" {...this.highlightDD}>
                          <ChromeReaderModeOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          OUR STORY
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/about/sponsors" {...this.highlightDD}>
                          <FavoriteBorderIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          OUR SPONSORS
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/about/our-team" {...this.highlightDD}>
                          <PeopleOutlineIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          OUR TEAM
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/about/contact-us" {...this.highlightDD}>
                          <PhoneOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          CONTACT US
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                >
                  {this.state.navBar ? (
                    <NavLink exact to="/events" {...this.highlightNav}>
                      EVENTS
                    </NavLink>
                  ) : (
                    <NavLink exact to="/events" {...this.highlightNoNav}>
                      EVENTS
                    </NavLink>
                  )}
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                >
                  {this.state.navBar ? (
                    <NavLink exact to="/opportunities" {...this.highlightNav}>
                      OPPORTUNITIES
                    </NavLink>
                  ) : (
                    <NavLink exact to="/opportunities" {...this.highlightNoNav}>
                      OPPORTUNITIES
                    </NavLink>
                  )}
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                >
                  <div className="dropdown" display="static">
                    <div
                      className={
                        this.state.navBar
                          ? "dropdown-toggle active-nav-item"
                          : "dropdown-toggle"
                      }
                    >
                      <span>
                        {this.state.navBar ? (
                          <NavLink to="/media/blog" {...this.highlightNav}>
                            MEDIA
                          </NavLink>
                        ) : (
                          <NavLink to="/media/blog" {...this.highlightNoNav}>
                            MEDIA
                          </NavLink>
                        )}
                      </span>
                    </div>
                    <div
                      className={
                        this.state.showDD
                          ? this.state.navBar
                            ? "dropdown-menu show"
                            : "dropdown-menu transparent mediaDD show"
                          : "dropdown-menu"
                      }
                    >
                      <div className="dropdown-item">
                        <NavLink to="/media/blog" {...this.highlightDD}>
                          <InsertDriveFileOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          BLOG POSTS
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/media/podcast" {...this.highlightDD}>
                          <HeadsetMicOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          PODCAST
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/media/publications" {...this.highlightDD}>
                          <LocalPrintshopOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          PUBLICATIONS
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/media/marketing" {...this.highlightDD}>
                          <ImageOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          MARKETING
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/media/videos" {...this.highlightDD}>
                          <VideocamOutlinedIcon
                            fontSize="small"
                            style={{ marginRight: "10px" }}
                          />
                          VIDEOS
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                  style={{ marginRight: "15px" }}
                >
                  {this.state.navBar ? (
                    <NavLink exact to="/join-us" {...this.highlightNav}>
                      JOIN US
                    </NavLink>
                  ) : (
                    <NavLink exact to="/join-us" {...this.highlightNoNav}>
                      JOIN US
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
            <li className="nav-item-btn">
              <MenuBtn
                open={this.state.menuOpen}
                onClick={this.handleMenuClick}
              />
            </li>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            {/*When user clicks on About tab, the page will be redirected to Our Story*/}
            <Route exact path="/about">
              <Redirect to="/about/our-story" />
            </Route>
            <Route exact path="/about/our-story" component={OurStory} />
            <Route path="/about/our-team" component={OurTeam} />
            <Route exact path="/media/blog" component={Blog} />
            <Route exact path="/media" component={Blog} />
            <Route path="/media/marketing" component={MarketingContent} />
            <Route path="/join-us" component={JoinUs} />
            <Route path="/about/sponsors" component={Sponsors} />
            <Route path="/opportunities" component={Opportunities} />
            <Route path="/about/contact-us" component={ContactUs} />
            <Route exact path="/media/podcast" component={Podcast} />
            <Route
              path="/media/podcast/:episode(\d+)"
              component={EpisodePage}
            />
            <Route path="/media/publications" component={Publications} />
            <Route exact path="/media/videos" component={Videos} />
            <Route path="/media/videos/:videoNumber(\d+)" component={Videos} />
            {Array.from({ length: 62 }, (_, index) => index + 1).map(
              (blogNo) => {
                return (
                  <Route
                    key={blogNo}
                    path={"/media/blog/" + blogNo}
                    component={
                      require(`./blog-post/blog-post-${blogNo}`).default
                    }
                  />
                );
              }
            )}
            {/*Redirect old blog links to new blog links*/}
            {Array.from({ length: 62 }, (_, index) => index + 1).map(
              (blogNo) => {
                return (
                  <Route key={blogNo} path={"/blog/" + blogNo}>
                    <Redirect to={"/media/blog/" + blogNo} />
                  </Route>
                );
              }
            )}
            {Array.from({ length: 62 }, (_, index) => index + 1).map(
              (blogNo) => {
                return (
                  <Route key={blogNo} path={"/resources/blog/" + blogNo}>
                    <Redirect to={"/media/blog/" + blogNo} />
                  </Route>
                );
              }
            )}
            <Route exact path="/blog">
              <Redirect to="/media/blog" />
            </Route>
            <Route exact path="/podcast">
              <Redirect to="/media/podcast" />
            </Route>
            <Route exact path="/publications">
              <Redirect to="/media/publications" />
            </Route>
            <Route exact path="/marketing-archive">
              <Redirect to="/media/marketing" />
            </Route>
            <Route exact path="/sponsors">
              <Redirect to="/about/sponsors" />
            </Route>
            <Route exact path="/our-team">
              <Redirect to="/about/our-team" />
            </Route>
            <Route exact path="/contact-us">
              <Redirect to="/about/contact-us" />
            </Route>
            <Route exact path="/our-story">
              <Redirect to="/about/our-story" />
            </Route>
            {/*Error page*/}
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </HashRouter>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
