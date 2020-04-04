import React, { Component } from 'react'
import CountUp from 'react-countup';
import "./home.css";

class Home extends Component{
	render(){
		return (

			<body>
			<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
			<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
			<div class="contain">
				<div class="headline">
					<h1>UNSW</h1>
					<h1>Women In</h1>
					<h1>Technology</h1>
					<p class="title" style={{color: 'white'}}>
						Empowering and inspiring the architects of change
					</p>
					<a href="/join-us">
						<button class="button btn-join">Join Us</button>
					</a>
				</div>
			</div>


			<div class="unite">
				<div class="uniteLeft">
					<h1 class="uniteTitle">UNITE.
					<br/> EMPOWER.
					<br/> UPSKILL.</h1>
				</div>
				<div class="uniteRight">
					<p class="description">
						Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills female
						and male students alike that are passionate about our mission. Women in Technology (WIT)
						aims to cultivate future leaders that are prepared to challenge the prejudices and bring
						change into the industry while building a strong community where they can find lasting friendships and support.</p>
				</div>
			</div>

			<div class="stats" onScroll={this.handleScroll}>
				<img src={process.env.PUBLIC_URL + './stats-background.png'} className="photo-1" alt="banner" resizeMode='contain'
                		style={{width: '100%'}}/>
				<div class="stats-info">
					<div class="number">
						<span><CountUp end={31} duration={3.5}/></span>
						<span><CountUp end={15} duration={4}/></span>
						<span><CountUp end={1799} duration={2}/></span>
					</div>
					<div class="words">
						<span>Team Members</span>
						<span>Sponsors</span>
						<span>Facebook Followers</span>
					</div>
				</div>
			</div>

			{/*Upcoming events area*/}
			{/*The container*/}
			<div class="row" style={{'padding': '100px 100px 100px '}}>

				{/*First collumn*/}
				<div class="col-md-5">
					{/*It's never too late to get involved with WIT and upskill your technical and soft skills!*/}
					<p class="description">
						At WIT, our focus is on providing events that foster development 
						catering to first to final years. Whether it’s personal, academic, 
						professional or social, we want our students to be the best version 
						of themselves. As part out aim, we also connect current and future 
						students with alumni and industry sponsors to serve as role 
						models to inspire.
					</p>
					<div class="picture" style={{'float': 'right'}}>
						<img src={process.env.PUBLIC_URL + '/app-scratch.png'} className="event1" alt="banner"  />
					</div>
				</div>

				{/*Second Column*/}
				<div class="col-md-7" style={{'padding-left': '30px'}}>
					<h2 class ="eventsTitle"> EVENTS </h2>
					<div class="picture" style={{'float': 'left'}}>
						<img src={process.env.PUBLIC_URL + '/alumnight.jpg'} className="event2" alt="banner"/>
					</div>
				</div>
			</div>


			{/*End of upcoming events area*/}

			<div class="sponsors" >
				<h1>Our Sponsors</h1>
				<img src={process.env.PUBLIC_URL + './home-sponsors.png'} className="photo" alt="banner" resizeMode='contain'
                		style={{width: '65vw'}} />
			</div>

		</body>

		);

	}
}

export default Home
