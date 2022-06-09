/*import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Menu from "./Menu";
import MenuBtn from "./MenuBtn";

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
              <li className="nav-item">
                <Link href="/events">EVENTS</Link>
              </li>
              <li className="nav-item">
                <Link href="/our-team">TEAM</Link>
              </li>
              <li className="nav-item">
                <Link href="/sponsors">SPONSORS</Link>
              </li>
              <li className="nav-item">
                <Link href="/opportunities">OPPORTUNITIES</Link>
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
                      this.state.showDD ? "dropdown-menu show" : "dropdown-menu"
                    }
                  >
                    <div className="dropdown-item">
                      <Link href="/blog">BLOG</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/podcast">PODCAST</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/publications">PUBLICATIONS</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/marketing-archive">MARKETING ARCHIVES</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/join-us">JOIN</Link>
              </li>
              <li className="nav-item" style={{ marginRight: "15px" }}>
                <Link href="/contact-us">CONTACT</Link>
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
*/
