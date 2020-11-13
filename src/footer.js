import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";

import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <footer>
            <ul className="footer-all">
              <div className="grid-footer-container">
                <li className="col-width footer-item footer-logo">
                  <img
                    src={`${process.env.PUBLIC_URL}./logo-black.png`}
                    className="photo"
                    alt="wit logo"
                    style={{
                      width: "50px",
                    }}
                  />
                </li>
                <div className="col-width footer-links">
                  <li className="footer-item">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Home
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/events">
                      Events
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/our-team">
                      Team
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/sponsors">
                      Sponsors
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/opportunities"
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/join-us">
                      Join
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/contact-us"
                    >
                      Contact
                    </Link>
                  </li>
                </div>
                <div className="col-width footer-links">
                  <li className="footer-item">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/publications"
                    >
                      Publications
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/marketing-archive"
                    >
                      Marketing Archives
                    </Link>
                  </li>
                </div>
                <div className="col-width socials">
                  <div className="socials-subheading">
                    <li className="footer-item"> Follow our socials </li>
                  </div>
                  <div className="footer-item">
                    <span className="footer-icons">
                      <a
                        href="https://www.linkedin.com/company/unsw-women-in-technology"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/linkedin.png`}
                          alt="linkedin link"
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </a>
                    </span>
                    <span className="footer-icons">
                      <a
                        href="https://www.facebook.com/unsw.wit/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/facebook.png`}
                          alt="facebook link"
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </a>
                    </span>
                    <span className="footer-icons">
                      <a
                        href="https://www.instagram.com/wit.unsw/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/instagram.png`}
                          alt="instagram link"
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </a>
                    </span>
                    <span className="footer-icons">
                      <a
                        className="lastBtn"
                        href="https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/featured"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/youtube.png`}
                          alt="youtube link"
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </a>
                    </span>
                    <span className="footer-icons">
                      <a
                        className="lastBtn"
                        href="https://www.twitch.tv/unswwit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/twitch.png`}
                          alt="twitch link"
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </a>
                    </span>
                    <span className="footer-icons">
                      <a
                        className="lastBtn"
                        href="https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/spotify.png`}
                          alt="spotify link"
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </ul>
            <div className="footer-copyright text-center bottom-footer-item">
              <Link to="/"> Copyright© 2020. UNSW Women in Technology </Link>
            </div>
          </footer>
        </HashRouter>
      </div>
    );
  }
}

export default Footer;
