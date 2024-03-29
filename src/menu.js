import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink
                className="menu-link"
                to="/"
                style={{ textDecoration: "none" }}
                onClick={this.props.handleMenuClick}
              >
                <div className="menu-box">
                  <li className="menu-item">HOME</li>
                </div>
              </NavLink>
              <div>
                <div
                  className="menu-box menu-dropdown"
                  onClick={this.handleClickAbout}
                >
                  <div className="dropdown-toggle active-nav-item">
                    <span className="menu-item menuTitle">ABOUT US</span>
                  </div>
                </div>
                {this.state.showDDAbout ? (
                  <div>
                    <NavLink
                      className="menu-link"
                      to="/about/our-story"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">OUR STORY</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/about/sponsors-affiliations"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">SPONSORS AND AFFILIATIONS</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/about/our-team"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">OUR TEAM</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/about/contact-us"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">CONTACT US</li>
                      </div>
                    </NavLink>
                  </div>
                ) : null}
              </div>
              <NavLink
                className="menu-link"
                to="/events"
                style={{ textDecoration: "none" }}
                onClick={this.props.handleMenuClick}
              >
                <div className="menu-box">
                  <li className="menu-item">EVENTS</li>
                </div>
              </NavLink>
              <NavLink
                className="menu-link"
                to="/opportunities"
                style={{ textDecoration: "none" }}
                onClick={this.props.handleMenuClick}
              >
                <div className="menu-box">
                  <li className="menu-item">OPPORTUNITIES</li>
                </div>
              </NavLink>
              <div>
                <div
                  className="menu-box menu-dropdown"
                  onClick={this.handleClick}
                >
                  <div className="dropdown-toggle active-nav-item">
                    <span className="menu-item menuTitle">MEDIA</span>
                  </div>
                </div>
                {this.state.showDD ? (
                  <div>
                    <NavLink
                      className="menu-link"
                      to="/media/blog"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">BLOG POSTS</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/media/podcast"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">PODCAST</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/media/publications"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">PUBLICATIONS</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/media/marketing"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">MARKETING</li>
                      </div>
                    </NavLink>
                    <NavLink
                      className="menu-link"
                      to="/media/videos"
                      style={{ textDecoration: "none" }}
                      onClick={this.props.handleMenuClick}
                    >
                      <div className="menu-box">
                        <li className="menu-item">VIDEOS</li>
                      </div>
                    </NavLink>
                  </div>
                ) : null}
              </div>

              <NavLink
                className="menu-link"
                to="/join-us"
                style={{ textDecoration: "none" }}
                onClick={this.props.handleMenuClick}
              >
                <div className="menu-box">
                  <li className="menu-item">JOIN US</li>
                </div>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
