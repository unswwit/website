import React, { Component } from 'react'
import CountUp from 'react-countup';
import "./aboutUs.css";

class AboutUs extends Component{
	render(){
		return (
			<body>
			<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
			<div class="contain">
				<header></header>
				<div class="headline">
					<h1>UNSW</h1>
					<h1>Women In</h1>
					<h1>Technology</h1>
					<p class="title" style={{color: 'white'}}>
						Empowering and Inspiring | The Architects of Change
					</p>
					<button class="button btn-join">Join Us</button>
				</div>
			</div>

			<div class="unite">
				<h1 style={{padding: '0px 0px 50px 0px'}}>Unite, Empower & Upskill</h1>
				<p class="description">
					Technology is the driving force of our future and is a vital part of our everyday lives, 
					and yet the industry still does not represent the society that they’re creating solutions for. 
					That’s why we are passionate about equality and diversity in the tech industry.</p> 
				<p class="description">
					Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills female 
					and male students alike that are passionate about our mission. Women in Technology (WIT) 
					aims to cultivate future leaders that are prepared to challenge the prejudices and bring 
					change into the industry while building a strong community where they can find lasting friendships and support.</p>
				<p class="description">
					At WIT, our focus is on providing events that foster development catering to first to final years. 
					Whether it’s personal, academic, professional or social, we want our students to be the best version of themselves. 
					As part out aim, we also connect current and future students with alumni and industry sponsors to serve as role models to inspire.</p>
				<p class="description">
					In 2020, we aim to go above and beyond to create events and opportunities for our members to learn and develop both their technical and professional skills.
				</p>
			</div>
			<div class="row" style={{'padding': '20px 100px 100px '}}>
				<div class="col-md-4">
					<h2>Upcoming Events</h2>
					<p style={{'font-size': '18px'}}>
						It's never too late to get involved with WIT and upskill your technical and soft skills!
					</p>
					<img src={process.env.PUBLIC_URL + '/app-scratch.png'} className="event1" alt="banner"  />
				</div>
				<div class="col-lg-8">
					<img src={process.env.PUBLIC_URL + '/alumnight.jpg'} className="event2" alt="banner"  />
				</div>
			</div>

			<div class="stats" onScroll={this.handleScroll}>
				
				<img src={process.env.PUBLIC_URL + './metrics-bg.jpg'} className="photo-1" alt="banner" resizeMode='contain'
                		style={{width: '100vw'}}/>
				<div class="number">
					<span><CountUp end={10} duration={4}/></span>
					<span ><CountUp end={13} duration={4}/></span>
					<span><CountUp end={753} duration={1.5}/></span>
				</div>
				<div class="words">
					<span>Team Members</span>
					<span>Sponsors</span>
					<span>Members</span>
				</div>

				<div class="texts" >
					<h1 style={{color: 'white'}}>UNSW WIT</h1>

					<p class="title">
						Collaborate • Inspire • Change
					</p>
					
					<p style={{'font-size': '14px'}}>
						Join UNSW WIT via SpARC <br/>
					</p>
					<button class="button btn-sparc">Join Us</button>

				</div>
			</div>

			<div class="sponsors" >
				<h1>Our Sponsors</h1>
				<img src={process.env.PUBLIC_URL + './sponsors-home.png'} className="photo" alt="banner" resizeMode='contain'
                		style={{width: '65vw'}} />
			</div>
		
		</body>
			
		);

	}
}

export default AboutUs
