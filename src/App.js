import React, { Component } from "react";
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import "./loader.css";
import Home from "./home/home";
import JoinUs from "./join/joinUs";
import Sponsors from "./sponsors/sponsors";
import Opportunities from "./opportunities/opportunities";
import ContactUs from "./contact/contactUs";
import Footer from "./footer";

import MarketingArchive from "./marketing-archive/marketingArchive";
import MarketingContent from "./marketing-archive/marketing-content/content";
import OurTeam from "./team/team";
import Blog from "./blog-gallery/blog";
import Publications from "./publications/publications";
import Events from "./events/events";
import Podcast from "./podcast/Podcast";

import Menu from "./menu";
import MenuBtn from "./menuBtn";

import EpisodePage from "./podcast/EpisodePage";

import blogPost1 from "./blog-post/blog-post-1";
import blogPost2 from "./blog-post/blog-post-2";
import blogPost3 from "./blog-post/blog-post-3";
import blogPost4 from "./blog-post/blog-post-4";
import blogPost5 from "./blog-post/blog-post-5";
import blogPost6 from "./blog-post/blog-post-6";
import blogPost7 from "./blog-post/blog-post-7";
import blogPost8 from "./blog-post/blog-post-8";
import blogPost9 from "./blog-post/blog-post-9";
import blogPost10 from "./blog-post/blog-post-10";
import blogPost11 from "./blog-post/blog-post-11";
import blogPost12 from "./blog-post/blog-post-12";
import blogPost13 from "./blog-post/blog-post-13";
import blogPost14 from "./blog-post/blog-post-14";
import blogPost15 from "./blog-post/blog-post-15";
import blogPost16 from "./blog-post/blog-post-16";
import blogPost17 from "./blog-post/blog-post-17";
import blogPost18 from "./blog-post/blog-post-18";
import blogPost19 from "./blog-post/blog-post-19";
import blogPost20 from "./blog-post/blog-post-20";
import blogPost21 from "./blog-post/blog-post-21";
import blogPost22 from "./blog-post/blog-post-22";
import blogPost23 from "./blog-post/blog-post-23";
import blogPost24 from "./blog-post/blog-post-24";
import blogPost25 from "./blog-post/blog-post-25";
import blogPost26 from "./blog-post/blog-post-26";
import blogPost27 from "./blog-post/blog-post-27";
import blogPost28 from "./blog-post/blog-post-28";
import blogPost29 from "./blog-post/blog-post-29";
import blogPost30 from "./blog-post/blog-post-30";
import blogPost31 from "./blog-post/blog-post-31";
import blogPost32 from "./blog-post/blog-post-32";
import blogPost33 from "./blog-post/blog-post-33";
import blogPost34 from "./blog-post/blog-post-34";
import blogPost35 from "./blog-post/blog-post-35";
import blogPost36 from "./blog-post/blog-post-36";
import blogPost37 from "./blog-post/blog-post-37";
import blogPost38 from "./blog-post/blog-post-38";
import blogPost39 from "./blog-post/blog-post-39";

class App extends Component {
  state = {
    loading: true,
  };

  constructor(props) {
    super(props);
    this.blogPosts = [
      blogPost1,
      blogPost2,
      blogPost3,
      blogPost4,
      blogPost5,
      blogPost6,
      blogPost7,
      blogPost8,
      blogPost9,
      blogPost10,
      blogPost11,
      blogPost12,
      blogPost13,
      blogPost14,
      blogPost15,
      blogPost16,
      blogPost17,
      blogPost18,
      blogPost19,
      blogPost20,
      blogPost21,
      blogPost22,
      blogPost23,
      blogPost24,
      blogPost25,
      blogPost26,
      blogPost27,
      blogPost28,
      blogPost29,
      blogPost30,
      blogPost31,
      blogPost32,
      blogPost33,
      blogPost34,
      blogPost35,
      blogPost36,
      blogPost37,    
      blogPost38,
      blogPost39,
    ];
    this.state = {
      showDD: false,
      menuOpen: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  handleHover(e) {
    this.setState({
      showDD: !this.state.showDD,
    });
    e.preventDefault();
  }

  updateMenu = () => {
    if (window.innerWidth >= "1000" && this.state.menuOpen) {
      this.handleMenuClick();
    }
  };

  fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateMenu);
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader");
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenu);
  }

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <div>
        <div className="loader loader-default is-active"></div>
        <HashRouter basename="/">
          <Menu
            open={this.state.menuOpen}
            handleMenuClick={this.handleMenuClick.bind(this)}
          />
          <nav className="navbar navbar-expand-md navbar-dark bg-custom fixed-top">
            <a className="navbar-brand" href="/">
              <img
                src={process.env.PUBLIC_URL + "./logo-black.png"}
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
                <li className="nav-item">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/events">EVENTS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/our-team">TEAM</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/sponsors">SPONSORS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/opportunities">OPPORTUNITIES</NavLink>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                >
                  <div className="dropdown" display="static">
                    <div className="dropdown-toggle">
                      <span className="menuTitle">RESOURCES</span>
                    </div>
                    <div
                      className={
                        this.state.showDD
                          ? "dropdown-menu show"
                          : "dropdown-menu"
                      }
                    >
                      <div className="dropdown-item">
                        <NavLink to="/blog">BLOG</NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/podcast">
                          PODCAST
                        </NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/publications">PUBLICATIONS</NavLink>
                      </div>
                      <div className="dropdown-item">
                        <NavLink to="/marketing-archive">
                          MARKETING ARCHIVES
                        </NavLink>
                      </div>                      
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to="/join-us">JOIN</NavLink>
                </li>
                <li className="nav-item" style={{ marginRight: "15px" }}>
                  <NavLink to="/contact-us">CONTACT</NavLink>
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
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/marketing-archive"
              component={MarketingArchive}
            />
            <Route
              path="/marketing-archive/content"
              component={MarketingContent}
            />
            <Route path="/join-us" component={JoinUs} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/opportunities" component={Opportunities} />
            <Route path="/contact-us" component={ContactUs} />
            <Route exact path="/podcast" component={Podcast} />
            <Route path="/podcast/:episode" render={(props) => (<EpisodePage {...props} />)} />
            <Route path="/publications" component={Publications} />
            {this.blogPosts.map((object, i) => (
              <Route key={i} path={"/blog/" + (i + 1)} component={object} />
            ))}
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
