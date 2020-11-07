import React from 'react';
import './events.css';
import PageHeader from '.././header';

function Events() {
  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/events-header.jfif" title="Events" />

      {/* Main Title, and Subtitle Area */}
      <div className="events-body">
        <h2>UPCOMING EVENTS</h2>
        <p className="lookout">Keep a lookout here for our upcoming events!</p>
        <div className="grid-container">
          {/*<div className="upcoming">            
            <div>
              <img
                className="event-images"
                src={process.env.PUBLIC_URL + './event-covers/23-oct-women-in-consulting.jpg'}
                alt="tech talk with baraja"
              />
              <div className="event-description">
                <p className="event-name">WIT x TAS x McGrathNicol: Women in Consulting</p>
                <p className="event-date">23rd October 2020, 2-3:00 PM</p>
                <p className="event-summary">
									Do you want to know what it’s like for females in the consulting industry?
                  <span role="img" aria-label="graph">
										👭👭
                  </span>
									Are you familiar with the word, ‘consulting,’ but not too sure of what it actually
									entails?
                  <span role="img" aria-label="graph">
										❓❓
                  </span>
									Well lucky for you WIT and TAS has got you covered!
                  <span role="img" aria-label="graph">
										🙏🙏
                  </span>
									In this quick 1 hour workshop, representatives from prestigious
                  <span role="img" aria-label="graph">
										✨
                  </span>
									McGrathNicol
                  <span role="img" aria-label="graph">
										✨
                  </span>
									will provide you with an insightful summary, all about the various opportunities and
									avenues in consulting!
                  <span role="img" aria-label="graph">
										💼💼
                  </span>
									Additionally, this event will ensure that all of your burning questions about
									cybersecurity are answered!
                  <span role="img" aria-label="graph">
										✔✔
                  </span>
									So wait are you waiting for? Register now to unlock the consultant within you!
                  <span role="img" aria-label="graph">
										❕❕
                  </span>
                </p>
                <ul id="links">
                  <li className="event-link">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScI3aO8HgbOi6YqRxzPg_ZZ836kJmLPkDCrSOi7vvyXZZqdpg/viewform"
                      className="event"
                    >
											Register
                    </a>
                  </li>
                  <li className="event-link">
                    <a href="https://www.facebook.com/events/1009132526220068/" className="event">
											Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
     
          <div className="upcoming">
            <div>
              <img
                className="event-images"
                src={process.env.PUBLIC_URL + './event-covers/31-oct-2020.jpg'}
                alt="WIT x Nine: Data Analytics Competition"
              />
              <div className="event-description">
                <p className="event-name">WIT x Nine: Data Analytics Competition</p>
                <p className="event-date">31st October 2020, 9 AM-9 PM</p>
                <p className="event-summary">
									How do you say 'data'? Is it 'dae-ta' or 'daa-ta'?
                  <span role="img" aria-label="graph">
										🤔❔❓
                  </span>
									This is one of many interesting questions that our reps from Nine will answer for
									our first Data Analytics Competiton! Work in teams of 3-5 to prove your skills in R,
									SQL and Python for a chance to win some prizes! Register NOW as a team or individual
									(to be placed in a team) to secure your spot!
                  <span role="img" aria-label="graph">
										🔒
                  </span>
                </p>
                <p className="event-summary">
                  <span role="img" aria-label="graph">
										🏆🏆🏆
                  </span>
									PRIZES
                  <span role="img" aria-label="graph">
										🏆🏆🏆
                  </span>
                </p>
                <ul className="event-summary">
                  <li> First prize: $200 (plus coffee with CTO)</li>
                  <li> Second prize: $150 (plus resume check)</li>
                  <li> Third prize: $150</li>
                </ul>
                <p className="event-summary">
									Please note that each team must have at least 1 female student. Also, to prepare
									yourself for the competition, mandatory attendance to the prep-workshop by at least
									one member of each team is required.
                </p>
                <ul id="links">
                  <li className="event-link">
                    <a href="https://forms.gle/S4u2pRmTtsKQ6AVb6" className="event">
											Register
                    </a>
                  </li>
                  <li className="event-link">
                    <a href="https://www.facebook.com/events/2087909558012273" className="event">
											Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        */}
        </div>
        <h2>PAST EVENTS</h2>
        <div id="past-events" className="grid-container">
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/23-oct-women-in-consulting.jpg'}
              alt="tech talk with baraja"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/31-oct-2020.jpg'}
              alt="WIT x Nine: Data Analytics Competition"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/ey-excel-workshop.jpg'}
              alt="ey excel workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/tech-talk-baraja.jpg'}
              alt="tech talk with baraja"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/cloud-computing.jpg'}
              alt="cloud computing"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/pitching.jpg'}
              alt="pitching workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/design-thinking.png'}
              alt="design thinking workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/sandbox-portfolio.png'}
              alt="sandbox portfolio"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/tech-trivia-tournament.png'}
              alt="tech trivia tournament"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/fmaa.png'}
              alt="fmaa alternate pathways"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/imposter-syndrome.jpg'}
              alt="google imposter syndrome"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/salesforce.jpg'}
              alt="salesforce driving innovation through diversity"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/csesoc-penpals.jpg'}
              alt="csesoc penpal program"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/witxnine2.gif'}
              alt="wit x nine workshop: mock interview"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/witxnine.gif'}
              alt="wit x nine workshop: interview skills"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/hoodie-preorder.png'}
              alt="wit hoodie preorder"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/empowerment.png'}
              alt="wit empowerment program"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/tea-talks.png'}
              alt="tea talks with tech"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/robogals-games.jpg'}
              alt="robogals meet & games"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/online-games-night.jpg'}
              alt="online games night"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/10-hoodie-comp.png'}
              alt="hoodie design competition"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/09-csesoc-comp1511.gif'}
              alt="comp1511 study session"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/08-resume-workshop2.png'}
              alt="resume workshop"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/07-linkedin-photoshoot.png'}
              alt="linkedin photoshoot"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/06-IWD.png'}
              alt="international women's day"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/05-app-workshop.png'}
              alt="make an app from scratch"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/04-alumnight.jpg'}
              alt="alumnight"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/03-subcom-recruitment.gif'}
              alt="subcom recruitment"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/02-witxmathsoc.gif'}
              alt="nintendo & chill"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/01-o-week-volunteer-recruitment.png'}
              alt="o-week volunteer"
            />
          </div>
          <div className="grid-item">
            <img
              className="event-images"
              src={process.env.PUBLIC_URL + './event-covers/00-logo-competition.png'}
              alt="logo competition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
