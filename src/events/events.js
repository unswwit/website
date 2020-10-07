import React from 'react'
import "./events.css"
import PageHeader from ".././header";

class Events extends React.Component {
    render() {
        return (
            <div>

            {/* Cover Photo */}
            <PageHeader
              imgUrl="/events-header.jfif"
              title="Events"
            />
            {/* Main Title, and Subtitle Area */}

                <div className = "events-body">
                    <h2>UPCOMING EVENTS</h2>
                    <p class="lookout">Keep a lookout here for our upcoming events!</p>
                    <div class="grid-container">

                    <div class="upcoming">
                        <div>
                            <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/ey-excel-workshop.jpg'} resizeMode='contain' alt="tech talk with baraja"/>
                            <div class="event-description">
                            <p class="event-name">WIT x EY: Excel How-To Workshop</p>
                                <p class="event-date">21st September 2020, 3-5:00 PM</p>
                                <p class="event-summary">
                                WIT’s Excel “How To:’ Workshop will give UNSW students the opportunity to develop the essential skill of how to professionally use <span role="img" aria-label="graph">📈</span> Excel <span role="img" aria-label="graph">📈</span> In particular, sponsor representatives will discuss how they utilise Excel in a professional environment on a day-to-day basis <span role="img" aria-label="women">👩‍💼👩‍💼</span> Furthermore, students will learn a multitude of industry best practices, valuable shortcuts, arithmetic functions and conditional formatting, which are vital corporate skills.
                                </p>
                                <ul id="links">
                                    <li class="event-link">
                                        <a href="https://forms.gle/Sjz9vbCLyQnxx8Qy9" class ="event">Register</a>
                                    </li>
                                    <li class="event-link">
                                        <a href="https://www.facebook.com/events/648872989089757/" class="event">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div class="upcoming">
                            <div>
                                <img class="event-images" src={process.env.PUBLIC_URL + './event-covers/tech-talk-baraja.jpg'} resizeMode='contain' alt="tech talk with baraja"/>
                                <div class="event-description">
                                <p class="event-name">Tech Talk with Baraja</p>
                                    <p class="event-date">24th September 2020, 5-6:30 PM</p>
                                    <p class="event-summary">
                                    Are you passionate about the world of tech and longing for an opportunity to connect with industry mentors doing exciting things in this space RIGHT NOW?

                                    Luckily for you, UNSW Women in Technology is hosting an online event where representatives from the tech start-up Baraja, will have a chat with students about a whole range of topics from workplace culture, to graduate programs, diversity programs and an overview of Baraja’s self-driving cars and new LiDAR technology, which is making waves in AI.

                                    Come along for this unmissable opportunity to build your network, learn about life at Baraja and have an exciting discussion about the ever changing world of tech.</p>
                                    <ul id="links">
                                        <li class="event-link">
                                            <a href="https://forms.gle/9iiyhGs7GFPqPCeA9" class ="event">Register</a>
                                        </li>
                                        <li class="event-link">
                                            <a href="https://www.facebook.com/events/1639137362919488/" class="event">Facebook</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>




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
