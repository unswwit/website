import React from "react";
import { Link, HashRouter } from "react-router-dom";

import "./style.css";

const Footer = () => {
  const routes = {
    "Home": "/",
    "Events": "/events",
    "Team": "/our-team",
    "Sponsors": "/sponsors",
    "Opportunities": "/opportunities",
    "Join": "/join",
    "Contact": "/contact-us",
    "Blog": "/blog",
    "Publications": "/publications",
    "Marketing Archives": "/marketing-archive",
    "Podcast": "/podcast"
  };

  const links = [
    ["Home", "Events", "Team", "Sponsors", "Opportunities", "Join", "Contact"], 
    ["Blog", "Publications", "Marketing Archives", "Podcast"]
  ];

  const socials = {
    linkedin: "https://www.linkedin.com/company/unsw-women-in-technology",
    facebook: "https://www.facebook.com/unsw.wit/",
    instagram: "https://www.instagram.com/wit.unsw/",
    youtube: "https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/featured",
    twitch: "https://www.twitch.tv/unswwit",
    spotify: "https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P",
    discord: "https://discord.gg/BWY4tzM326",
  };

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
              {links.map((col) => {
                return (
                  <div key={col} className="col-width footer-links">
                    {col.map((route) => {
                      return ( 
                        <li className="footer-item" key={route}>
                          <Link onClick={() => window.scrollTo(0, 0)} to={routes[route]}>
                            {route}
                          </Link>
                        </li>                   
                      )})}
                  </div>
                )})}             
              <div className="col-width socials">
                <div className="socials-subheading">
                  <li className="footer-item"> Follow our socials </li>
                </div>
                <div className="footer-item">
                  {Object.keys(socials).map((social) => {
                    return (
                      <span key={social} className="footer-icons">
                        <a                        
                          href={socials[social]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/icons/${social}.png`}
                            alt={social}
                            style={{
                              width: "25px",
                              height: "25px",
                            }}
                          />
                        </a>
                      </span>
                    )})}                 
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

export default Footer;
