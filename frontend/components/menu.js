import React, { Component } from "react";
import Link from "next/link";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      showDD: false,
      showDDAbout: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAbout = this.handleClickAbout.bind(this);

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
        "SPONSORS AND AFFILIATIONS",
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

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setState({ open: this.props.open });
    }
  }

  handleClick() {
    this.setState({
      showDD: !this.state.showDD,
    });
  }

  handleClickAbout() {
    this.setState({
      showDDAbout: !this.state.showDDAbout,
    });
  }

  render() {
    return (
      <div className="menu-container">
        {this.state.open ? (
          <div className="menu-list">
            <ul className="navbar-nav menu-bar">
              {Object.keys(this.routes).map((route, index) => {
                return index === 0 ||
                  index === 2 ||
                  index === 3 ||
                  index === 5 ? (
                  // Non-dropdown
                  <Link
                    className="menu-link"
                    href={this.routes[route][0]}
                    onClick={this.props.handleMenuClick}
                  >
                    <div className="menu-box">
                      <li className="menu-item">{this.routes[route][1]}</li>
                    </div>
                  </Link>
                ) : index === 1 ? (
                  // About dropdown
                  <div>
                    <div
                      className="menu-box menu-dropdown"
                      onClick={this.handleClickAbout}
                    >
                      <div className="dropdown-toggle active-nav-item">
                        <span className="menu-item menuTitle">
                          {this.routes[route][1]}
                        </span>
                      </div>
                    </div>
                    {this.state.showDDAbout ? (
                      <div>
                        {Object.keys(this.aboutRoutes).map((aboutRoute) => {
                          return (
                            <Link
                              className="menu-link"
                              href={this.aboutRoutes[aboutRoute][0]}
                              onClick={this.props.handleMenuClick}
                            >
                              <div className="menu-box">
                                <li className="menu-item">
                                  {" "}
                                  {this.aboutRoutes[aboutRoute][1]}
                                </li>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  // Media dropdown
                  <div>
                    <div
                      className="menu-box menu-dropdown"
                      onClick={this.handleClick}
                    >
                      <div className="dropdown-toggle active-nav-item">
                        <span className="menu-item menuTitle">
                          {this.routes[route][1]}
                        </span>
                      </div>
                    </div>
                    {this.state.showDD ? (
                      <div>
                        {Object.keys(this.mediaRoutes).map((mediaRoute) => {
                          return (
                            <Link
                              className="menu-link"
                              href={this.mediaRoutes[mediaRoute][0]}
                              onClick={this.props.handleMenuClick}
                            >
                              <div className="menu-box">
                                <li className="menu-item">
                                  {" "}
                                  {this.mediaRoutes[mediaRoute][1]}
                                </li>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
