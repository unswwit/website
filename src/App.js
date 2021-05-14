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

import Menu from "./menu";
import MenuBtn from "./menuBtn";
import Footer from "./footer";

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
      menuOpen: false,
      navBar: false,
      hideNav: false,
    };
    this.navClass = "navbar navbar-expand-md navbar-dark bg-custom fixed-top";
    this.handleHover = this.handleHover.bind(this);
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

  // show and hide drop down on hover
  handleHover(e) {
    this.setState({
      showDD: !this.state.showDD,
    });
    e.preventDefault();
  }

  // close the menu if the screen is being resized
  updateMenu = () => {
    if (window.innerWidth >= "1150" && this.state.menuOpen) {
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
                    <NavLink exact to="/our-team" {...this.highlightNav}>
                      TEAM
                    </NavLink>
                  ) : (
                    <NavLink exact to="/our-team" {...this.highlightNoNav}>
                      TEAM
                    </NavLink>
                  )}
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                >
                  {this.state.navBar ? (
                    <NavLink exact to="/sponsors" {...this.highlightNav}>
                      SPONSORS
                    </NavLink>
                  ) : (
                    <NavLink exact to="/sponsors" {...this.highlightNoNav}>
                      SPONSORS
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
                          <NavLink to="/resources" {...this.highlightNav}>
                            RESOURCES
                          </NavLink>
                        ) : (
                          <NavLink to="/resources" {...this.highlightNoNav}>
                            RESOURCES
                          </NavLink>
                        )}
                      </span>
                    </div>
                    <div
                      className={
                        this.state.showDD
                          ? "dropdown-menu show"
                          : "dropdown-menu"
                      }
                    >
                      <div className="dropdown-item">
                        <NavLink to="/resources/blog" {...this.highlightDD}>
                          BLOG
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/resources/podcast" {...this.highlightDD}>
                          PODCAST
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/resources/publications" {...this.highlightDD}>
                          PUBLICATIONS
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/resources/marketing-archive" {...this.highlightDD}>
                          MARKETING ARCHIVE
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
                    <NavLink exact to="/join-us" {...this.highlightNav}>
                      JOIN
                    </NavLink>
                  ) : (
                    <NavLink exact to="/join-us" {...this.highlightNoNav}>
                      JOIN
                    </NavLink>
                  )}
                </li>
                <li
                  className={
                    this.state.navBar ? "nav-item active-nav-item" : "nav-item"
                  }
                  style={{ marginRight: "15px" }}
                >
                  {this.state.navBar ? (
                    <NavLink exact to="/contact-us" {...this.highlightNav}>
                      CONTACT
                    </NavLink>
                  ) : (
                    <NavLink exact to="/contact-us" {...this.highlightNoNav}>
                      CONTACT
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
            <Route path="/our-team" component={OurTeam} />
            <Route exact path="/resources/blog" component={Blog} />
            <Route exact path="/resources">
              <Redirect to="/resources/blog" />
            </Route>
            <Route path="/resources/marketing-archive" component={MarketingContent} />
            <Route path="/join-us" component={JoinUs} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/opportunities" component={Opportunities} />
            <Route path="/contact-us" component={ContactUs} />
            <Route exact path="/resources/podcast" component={Podcast} />
            <Route path="/resources/podcast/:episode" component={EpisodePage} />
            <Route path="/resources/publications" component={Publications} />
            {Array.from({ length: 54 }, (_, index) => index + 1).map(
              (blogNo) => {
                return (
                  <Route
                    key={blogNo}
                    path={"/resources/blog/" + blogNo}
                    component={
                      require(`./blog-post/blog-post-${blogNo}`).default
                    }
                  />
                );
              }
            )}
            {/*Redirect old blog links to new blog links*/}
            {Array.from({ length: 54 }, (_, index) => index + 1).map(
              (blogNo) => {
                return (
                  <Route path={"/blog/" + blogNo}>
                    <Redirect to={"/resources/blog/" + blogNo} />
                  </Route>
                );
              }
            )}
            <Route exact path="/blog">
              <Redirect to="/resources/blog" />
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
