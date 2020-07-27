import React from 'react'
import "./events.css"

class Events extends React.Component {
    render() {
        return (
            <div>
                <div className="events-header">
                    {/* Cover Photo */}
                    {/* Main Title, and Subtitle Area */}
                    <div className="overlay"></div>
                        <div className="title_area">
                            <h1 className="centre">Events</h1>
                        </div>
                </div>
                <div className = "events-body">
                    <h2>UPCOMING EVENTS</h2>
                    <p class="lookout">Keep a lookout here for our upcoming events!</p>
                    <div class="grid-container">
                        {/* Make this into a component
                        <div class="upcoming">
                            <div>
                                <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/cloud-computing.jpg'} resizeMode='contain' alt="cloud computing"/>
                                <div class="event-description">
                                    <p class="event-name">Navigating Cloud Computing with AWS</p>
                                    <p class="event-date">14th July 2020, 5-7 PM</p>
                                    <p class="event-summary">
                                    Hey you! 
                                    Uni got your head in the clouds? ☁️ Struggling to compute Amazon’s web services? 🤨Look no further because Cloudsoc x WIT’s intro to cloud computing event is here to answer your cloud questions! 😍This is a one time opportunity to delve into the world of cloud computing with an easy click of a link in our ZOOM Call!😯</p>
                                    <ul id="links">
                                        <li class="event-link">
                                            <a href="https://forms.gle/9MXNL2CZ7fmwPQ6B9" class ="event">Register</a>
                                        </li>
                                        <li class="event-link">
                                            <a href="https://www.facebook.com/events/913508185831961/" class="event">Facebook</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <h2>PAST EVENTS</h2>
                    <div id="past-events" class="grid-container">
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/cloud-computing.jpg'} resizeMode='contain' alt="cloud computing"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/pitching.jpg'} resizeMode='contain' alt="pitching workshop"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/design-thinking.png'} resizeMode='contain' alt="design thinking workshop"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/sandbox-portfolio.png'} resizeMode='contain' alt="sandbox portfolio"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/tech-trivia-tournament.png'} resizeMode='contain' alt="tech trivia tournament"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/fmaa.png'} resizeMode='contain' alt="fmaa alternate pathways"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/imposter-syndrome.jpg'} resizeMode='contain' alt="google imposter syndrome"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/salesforce.jpg'} resizeMode='contain' alt="salesforce driving innovation through diversity"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/csesoc-penpals.jpg'} resizeMode='contain' alt="csesoc penpal program"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/witxnine2.gif'} resizeMode='contain' alt="wit x nine workshop: mock interview"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/witxnine.gif'} resizeMode='contain' alt="wit x nine workshop: interview skills"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/hoodie-preorder.png'} resizeMode='contain' alt="wit hoodie preorder"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/empowerment.png'} resizeMode='contain' alt="wit empowerment program"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/tea-talks.png'} resizeMode='contain' alt="tea talks with tech"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/robogals-games.jpg'} resizeMode='contain' alt="robogals meet & games"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/online-games-night.jpg'} resizeMode='contain' alt="online games night"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/10-hoodie-comp.png'} resizeMode='contain' alt="hoodie design competition"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/09-csesoc-comp1511.gif'} resizeMode='contain' alt="comp1511 study session"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/08-resume-workshop2.png'} resizeMode='contain' alt="resume workshop"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/07-linkedin-photoshoot.png'} resizeMode='contain' alt="linkedin photoshoot"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/06-IWD.png'} resizeMode='contain' alt="international women's day"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/05-app-workshop.png'} resizeMode='contain' alt="make an app from scratch"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/04-alumnight.jpg'} resizeMode='contain' alt="alumnight"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/03-subcom-recruitment.gif'} resizeMode='contain' alt="subcom recruitment"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/02-witxmathsoc.gif'} resizeMode='contain' alt="nintendo & chill"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/01-o-week-volunteer-recruitment.png'} resizeMode='contain' alt="o-week volunteer"/>
                        </div>
                        <div class="grid-item">
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/00-logo-competition.png'} resizeMode='contain' alt="logo competition"/>
                        </div>
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Events;
