import React from "react";
import "./events.css";
import PageHeader from ".././header";

const Events = () => {
  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/events-header.jfif" title="Events" />
      {/* Main Title, and Subtitle Area */}
      <div className="events-body">
        <h2>UPCOMING EVENTS</h2>
        <p className="lookout">Keep a lookout here for our upcoming events!</p>
        <div className="grid-container">
          <div className="grid-container">
            {/*
            <div className="upcoming">
              <div>
                <img
                  className="event-images"
                  src={
                    process.env.PUBLIC_URL +
                    "./event-covers/personal-branding.jpg"
                  }
                  alt="Personal Branding Workshop"
                />
                <div className="event-description">
                  <p className="event-name">
                    WIT x Forage presents: Personal Branding Workshop
                  </p>
                  <p className="event-date">11th November 2020, 6-7:00 PM</p>
                  <p className="event-summary">
                    Are you interested in building your own personal brand,
                    making valuable connections and conquering small talk?{" "}
                    <span role="img" aria-label="graph">
                      🗣️
                    </span>{" "}
                    Fear not, UNSW Women in Technology is collaborating with
                    Forage (formerly InsideSherpa) to provide an insightful
                    introduction into the tips and tricks involved in successful
                    networking and personal branding. Don’t miss out on this
                    opportunity to engage with our lovely industry
                    representatives in developing the soft skills that will set
                    you apart from the rest!{" "}
                    <span role="img" aria-label="graph">
                      ✔️✔️
                    </span>
                    So come along and learn to tell your story and kickstart
                    your career! Please note this is a 𝗰𝗼𝗺𝗽𝘂𝗹𝘀𝗼𝗿𝘆 event for all
                    WIT Empowerment Program Mentees
                  </p>
                  <ul id="links">
                    <li className="event-link">
                      <a
                        href="https://forms.gle/VuFjVp6sTNGC5QT78"
                        className="event"
                      >
                        Register
                      </a>
                    </li>
                    <li className="event-link">
                      <a
                        href="https://www.facebook.com/events/420097319005284/"
                        className="event"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
        <h2>PAST EVENTS</h2>     
        <div id="past-events" className="grid-container">
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/personal-branding.jpg"
              }
              alt="Personal Branding Workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/23-oct-women-in-consulting.jpg"
              }
              alt="tech talk with baraja"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/31-oct-2020.jpg"}
              alt="WIT x Nine: Data Analytics Competition"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/ey-excel-workshop.jpg"
              }
              alt="ey excel workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/tech-talk-baraja.jpg"
              }
              alt="tech talk with baraja"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/cloud-computing.jpg"
              }
              alt="cloud computing"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/pitching.jpg"}
              alt="pitching workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/design-thinking.png"
              }
              alt="design thinking workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/sandbox-portfolio.png"
              }
              alt="sandbox portfolio"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/tech-trivia-tournament.png"
              }
              alt="tech trivia tournament"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/fmaa.png"}
              alt="fmaa alternate pathways"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/imposter-syndrome.jpg"
              }
              alt="google imposter syndrome"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/salesforce.jpg"}
              alt="salesforce driving innovation through diversity"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/csesoc-penpals.jpg"}
              alt="csesoc penpal program"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/witxnine2.gif"}
              alt="wit x nine workshop: mock interview"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/witxnine.gif"}
              alt="wit x nine workshop: interview skills"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/hoodie-preorder.png"
              }
              alt="wit hoodie preorder"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/empowerment.png"}
              alt="wit empowerment program"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/tea-talks.png"}
              alt="tea talks with tech"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/robogals-games.jpg"}
              alt="robogals meet & games"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/online-games-night.jpg"
              }
              alt="online games night"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/10-hoodie-comp.png"}
              alt="hoodie design competition"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/09-csesoc-comp1511.gif"
              }
              alt="comp1511 study session"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/08-resume-workshop2.png"
              }
              alt="resume workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/07-linkedin-photoshoot.png"
              }
              alt="linkedin photoshoot"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/06-IWD.png"}
              alt="international women's day"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL + "./event-covers/05-app-workshop.png"
              }
              alt="make an app from scratch"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/04-alumnight.jpg"}
              alt="alumnight"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/03-subcom-recruitment.gif"
              }
              alt="subcom recruitment"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + "./event-covers/02-witxmathsoc.gif"}
              alt="nintendo & chill"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/01-o-week-volunteer-recruitment.png"
              }
              alt="o-week volunteer"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={
                process.env.PUBLIC_URL +
                "./event-covers/00-logo-competition.png"
              }
              alt="logo competition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
