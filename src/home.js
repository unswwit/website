import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        {/* Start of Header */}
        <div className="contain">
          <div className="headline">
            <h1>UNSW</h1>
            <h1>Women In</h1>
            <h1>Technology</h1>
            <p> Empowering and inspiring the architects of change</p>
          </div>
        </div>
        {/* End of Header */}

        {/* Start of Description */}
        <div className="description">
          <div className="description-left">
            <h1>UNITE. EMPOWER. UPSKILL.</h1>
          </div>
          <div className="description-right">
            <p>
              Formed in late 2016, we have grown to be a platform that empowers,
              unites and up-skills female and male students alike that are
              passionate about our mission. Women in Technology (WIT) aims to
              cultivate future leaders that are prepared to challenge the
              prejudices and bring change into the industry while building a
              strong community where they can find lasting friendships and
              support.
            </p>
          </div>
        </div>
        {/* End of Description */}

        {/* Start of Statistics */}
        <div className="stats" onScroll={this.handleScroll}>
          <img
            src={`${process.env.PUBLIC_URL}./stats-background-1.png`}
            className="stats-background"
            alt="banner"
          />
          <div className="stats-info">
            <div className="number">
              <div>
                <span>
                  <CountUp end={30} duration={5} />
                </span>
                <p>Team Members</p>
              </div>
              <div>
                <span>
                  <CountUp end={15} duration={5} />
                </span>
                <p>Sponsors</p>
              </div>
              <div>
                <span>
                  <CountUp end={2266} duration={4} />
                </span>
                <p>Facebook Followers</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Statistics */}

        {/* Start of Upcoming Events */}
        <div className="events">
          <div className="events-description">
            <p id="about">
              At WIT, our focus is on providing events that foster development
              catering to first to final years. Whether it's personal, academic,
              professional or social, we want our students to be the best
              version of themselves. As part of our aim, we also connect current
              and future students with alumni and industry sponsors to serve as
              role models to inspire.
            </p>
            <p>
              <Link to="/events" style={{ textDecoration: "none" }}>
                See More Events
              </Link>
            </p>
          </div>
          <div className="events-title">
            <h1> EVENTS </h1>
          </div>
          <div className="event-2">
            {/* <a href="https://www.facebook.com/events/208115483507235/">
							<img src={process.env.PUBLIC_URL + '/tech-trivia-tournament.png'} alt="banner"/>
						</a> */}
          </div>
          <div className="event-1">
            <a href="https://www.facebook.com/events/420097319005284/">
              <img
                src={`${process.env.PUBLIC_URL}./event-covers/personal-branding.jpg`}
                alt="Personal Branding Workshop"
              />
            </a>
          </div>
        </div>
        {/* End of upcoming events area */}

        <div className="sponsors">
          <h1>OUR SPONSORS</h1>
          <img
            src={`${process.env.PUBLIC_URL}./sponsors-home.png`}
            className="photo"
            alt="banner"
          />
        </div>
      </div>
    );
  }
}

export default Home;
