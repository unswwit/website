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

  iconDD = {
    style: {
      fontSize: "medium",
      marginRight: "10px",
    },
  };

  aboutIconDD = {
    style: {
      fontSize: "medium",
      marginRight: "10px",
      marginLeft: "-5px",
      paddingTop: "0px",
      marginTop: "0px",
      paddingBottom: "0px",
      marginBottom: "0px",
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

    this.routes = {
      Home: ["/", "HOME"],
      "About Us": ["/about", "ABOUT US"],
      Events: ["/events", "EVENTS"],
      Opportunities: ["/opportunities", "OPPORTUNITIES"],
      Media: ["/media", "MEDIA"],
      "Join Us": ["/join-us", "JOIN US"],
    };

    this.aboutRoutes = {
      "Our Story": ["/about/our-story", "OUR STORY"],
      "Sponsors and Affiliations": [
        "/about/sponsors-affiliations",
        "SPONSORS AND",
        "AFFILIATIONS",
      ],
      "Our Team": ["/about/our-team", "OUR TEAM"],
      "Contact Us": ["/about/contact-us", "CONTACT US"],
    };

    this.mediaRoutes = {
      "Blog Posts": ["/media/blog", "BLOG POSTS"],
      Podcast: ["/media/podcast", "PODCAST"],
      Publications: ["/media/publications", "PUBLICATIONS"],
      Marketing: ["/media/marketing", "MARKETING"],
      Videos: ["/media/videos", "VIDEOS"],
    };
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

  getIcon(icon) {
    switch (icon) {
      case "OUR STORY":
        return <ChromeReaderModeOutlinedIcon {...this.aboutIconDD} />;
      case "SPONSORS AND":
        return <FavoriteBorderIcon {...this.aboutIconDD} />;
      case "OUR TEAM":
        return <PeopleOutlineIcon {...this.aboutIconDD} />;
      case "CONTACT US":
        return <PhoneOutlinedIcon {...this.aboutIconDD} />;
      case "BLOG POSTS":
        return <InsertDriveFileOutlinedIcon {...this.iconDD} />;
      case "PODCAST":
        return <HeadsetMicOutlinedIcon {...this.iconDD} />;
      case "PUBLICATIONS":
        return <LocalPrintshopOutlinedIcon {...this.iconDD} />;
      case "MARKETING":
        return <ImageOutlinedIcon {...this.iconDD} />;
      default:
        return <VideocamOutlinedIcon {...this.iconDD} />;
    }
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
                {Object.keys(this.routes).map((route, index) => {
                  return index === 0 ||
                    index === 2 ||
                    index === 3 ||
                    index === 5 ? (
                    <li
                      className={
                        this.state.navBar
                          ? "nav-item active-nav-item"
                          : "nav-item"
                      }
                      key={index}
                    >
                      {this.state.navBar ? (
                        <NavLink
                          exact
                          to={this.routes[route][0]}
                          {...this.highlightNav}
                        >
                          {this.routes[route][1]}
                        </NavLink>
                      ) : (
                        <NavLink
                          exact
                          to={this.routes[route][0]}
                          {...this.highlightNoNav}
                        >
                          {this.routes[route][1]}
                        </NavLink>
                      )}
                    </li>
                  ) : index === 1 ? (
                    <li
                      className={
                        this.state.navBar
                          ? "nav-item active-nav-item"
                          : "nav-item"
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
                              <NavLink
                                to={this.routes[route][0]}
                                {...this.highlightNav}
                              >
                                {this.routes[route][1]}
                              </NavLink>
                            ) : (
                              <NavLink
                                to={this.routes[route][0]}
                                {...this.highlightNoNav}
                              >
                                {this.routes[route][1]}
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
                          {Object.keys(this.aboutRoutes).map((aboutRoute) => {
                            return (
                              <div className="dropdown-item">
                                <NavLink
                                  to={this.aboutRoutes[aboutRoute][0]}
                                  {...this.highlightDD}
                                >
                                  {this.getIcon(
                                    this.aboutRoutes[aboutRoute][1]
                                  )}

                                  {this.aboutRoutes[aboutRoute][1]}

                                  {this.aboutRoutes[aboutRoute][2] ===
                                  "AFFILIATIONS" ? (
                                    <p
                                      style={{
                                        marginLeft: "35px",
                                        paddingBottom: "0px",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {this.aboutRoutes[aboutRoute][2]}{" "}
                                    </p>
                                  ) : (
                                    this.aboutRoutes[aboutRoute][2]
                                  )}
                                </NavLink>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li
                      className={
                        this.state.navBar
                          ? "nav-item active-nav-item"
                          : "nav-item"
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
                              <NavLink
                                to={this.routes[route][0]}
                                {...this.highlightNav}
                              >
                                {this.routes[route][1]}
                              </NavLink>
                            ) : (
                              <NavLink
                                to={this.routes[route][0]}
                                {...this.highlightNoNav}
                              >
                                {this.routes[route][1]}
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
                          {Object.keys(this.mediaRoutes).map((mediaRoute) => {
                            return (
                              <div className="dropdown-item dropdown-media">
                                <NavLink
                                  to={this.mediaRoutes[mediaRoute][0]}
                                  {...this.highlightDD}
                                >
                                  {this.getIcon(
                                    this.mediaRoutes[mediaRoute][1]
                                  )}
                                  {this.mediaRoutes[mediaRoute][1]}
                                </NavLink>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  );
                })}
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
            <Route path="/about/sponsors-affiliations" component={Sponsors} />
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
            {Array.from({ length: 65 }, (_, index) => index + 1).map(
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
              <Redirect to="/about/sponsors-affiliations" />
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
