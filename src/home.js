import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import "./home.css";

class Home extends Component{
	render(){
		return (
			<body>
				{/*Start of Header*/}
				<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
				<div class="contain">
					<div class="headline">
						<h1>UNSW</h1>
						<h1>Women In</h1>
						<h1>Technology</h1>
						<p> Empowering and inspiring the architects of change</p>
					</div>
				</div>
				{/*End of Header*/}

				{/*Start of Description*/}
				<div class="description">
					<div class="description-left">
						<h1>UNITE.
						EMPOWER.
						UPSKILL.</h1>
					</div>
					<div class="description-right">
						<p>
							Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills female
							and male students alike that are passionate about our mission. Women in Technology (WIT)
							aims to cultivate future leaders that are prepared to challenge the prejudices and bring
							change into the industry while building a strong community where they can find lasting friendships and support.</p>
					</div>
				</div>
				{/*End of Description*/}

				{/*Start of Statistics*/}
				<div class="stats" onScroll={this.handleScroll}>
					<img src={process.env.PUBLIC_URL + './stats-background-1.png'} className="stats-background" alt="banner" resizeMode='contain'/>
					<div class="stats-info">
						<div class="number">
							<div>
								<span><CountUp end={30} duration={5}/></span>
								<p>Team Members</p>
							</div>
							<div>
								<span><CountUp end={15} duration={5}/></span>
								<p>Sponsors</p>
							</div>
							<div>
								<span><CountUp end={1976} duration={5}/></span>
								<p>Facebook Followers</p>
							</div>
						</div>
					</div>
				</div>
				{/*End of Statistics*/}

				{/*Start of Upcoming Events*/}
				<div class="events">
					<div class="events-description">
						<p id="about">
							At WIT, our focus is on providing events that foster development catering to first to final years. Whether it's personal, academic, professional or social, we want our students to be the best version of themselves. As part of our aim, we also connect current and future students with alumni and industry sponsors to serve as role models to inspire. </p>
							<p><Link to="/events" style={{ textDecoration: 'none' }}><a id="more-events">See More Events</a>
								</Link></p>
					</div>
					<div class="events-title">
						<h1> EVENTS </h1>
					</div>
					<div class="event-2">
						{/* <a href="https://www.facebook.com/events/208115483507235/">
							<img src={process.env.PUBLIC_URL + '/tech-trivia-tournament.png'} alt="banner"/>
						</a> */}
					</div>
					<div class="event-1">
						<a href="https://www.facebook.com/events/913508185831961/">
							<img src={process.env.PUBLIC_URL + '/event-covers/cloud-computing.jpg'} alt="banner"/>
						</a>
					</div>
				</div>
				{/*End of upcoming events area*/}

				<div class="sponsors" >
					<h2>OUR SPONSORS</h2>
					<img src={process.env.PUBLIC_URL + './sponsors-home.png'} className="photo" alt="banner" resizeMode='contain'
							/>
				</div>

			</body>

		);

	}
}

export default Home
