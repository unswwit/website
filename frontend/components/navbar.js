import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Menu from "./nenu";
import MenuBtn from "./menuBtn";
import DropdownMenu from "./dropdownMenu";

class Navbar extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    window.addEventListener("resize", this.updateMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenu);
  }

  render() {
    return (
      <div>
        <Menu
          open={this.state.menuOpen}
          handleMenuClick={this.handleMenuClick.bind(this)}
        />
        <nav className="navbar navbar-expand-md navbar-dark bg-custom fixed-top">
          <a className="navbar-brand" href="/">
            <img
              src="/logo-black.png"
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
                <Link href="/">HOME</Link>
              </li>
              <li
                className="nav-item"
                key={"about"}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              >
                <div className="dropdown" display="static">
                  <div className="dropdown-toggle">
                    <span className="menuTitle">ABOUT US</span>
                  </div>
                  <div
                    className={
                      this.state.showDD ? "dropdown-menu show" : "dropdown-menu"
                    }
                  >
                    <div className="dropdown-item">
                      <Link href="/about/our-story">OUR STORY</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/about/sponsors-affiliations">
                        SPONSORS AND AFFILIATIONS
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/about/our-team">OUR TEAM</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/about/contact-us">CONTACT US</Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/events">EVENTS</Link>
              </li>
              <li className="nav-item">
                <Link href="/opportunities">OPPORTUNITIES</Link>
              </li>
              <li
                className="nav-item"
                onMouseEnter={this.handleHoverMedia}
                onMouseLeave={this.handleHoverMedia}
                key={"media"}
              >
                <div className="dropdown" display="static">
                  <div className="dropdown-toggle">
                    <span className="menuTitle">MEDIA</span>
                  </div>
                  <div
                    className={
                      this.state.showDD ? "dropdown-menu show" : "dropdown-menu"
                    }
                  >
                    <div className="dropdown-item">
                      <Link href="/media/blog">BLOG POSTS</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/media/podcasts">PODCASTS</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/media/publications">PUBLICATIONS</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/media/marketing">MARKETING</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/media/videos">VIDEOS</Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/join-us">JOIN US</Link>
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
      </div>
    );
  }
}
export default Navbar;
