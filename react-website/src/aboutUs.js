import React, { Component } from 'react'
import CountUp from 'react-countup';
import "./aboutUs.css";

class AboutUs extends Component{
	render(){
		return (
			<body>

			<div class="contain">
				<img src={process.env.PUBLIC_URL + '/arts-build-close-up-commerce-273230.jpg'} class="banner" alt="banner"
					style={{maxHeight: 768}}/>

				<div class="headline">
					<h1>UNSW</h1>
					<h1>Women In Techonology</h1>
					<p class="title" style={{color: 'white'}}>
						Empowering and Inspiring 
						<br/>
						the Artchitects of Change
					</p>
					<button class="button btn-join">Join Us</button>
				</div>		
			</div>

			<div class="unite">
				<h1 style={{padding: '0px 0px 50px 0px'}}>Unite, Empower & Upskill</h1>
				<p>
				Technology is the driving force of our future and is a vital part of our everyday lives, and yet the industry still does not represent the society that they’re creating solutions for. That’s why we are passionate about equality and diversity in the tech industry.
				</p> <p>Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills female and male students alike that are passionate about our mission. Women in Technology (WIT) aims to cultivate future leaders that are prepared  to challenge the prejudices and bring change into the industry while building a strong community where they can find lasting friendships and support.

At WIT, our focus is on providing events that foster development catering to first to final years. Whether it’s personal, academic, professional or social, we want our students to be the best version of themselves. As part out aim, we also connect current and future students with alumni and industry sponsors to serve as role models to inspire.

</p><p>In 2020, we aim to go above and beyond to create events and opportunities for our members to learn and develop both their technical and professional skills.

				</p>
			</div>

			{/* <img src={process.env.PUBLIC_URL + '/Untitled-1.jpg'} class="banner" alt="banner" style={{maxHeight: 768}}/> */}
			
			<div class="row" style={{'padding': '20px 100px 100px '}}>
				<div class="col-md-4">
					<h2>Upcoming Events</h2>
					<p>It's never too late to get involved with WIT and upskill your technical and soft skills!</p>
					<img src={process.env.PUBLIC_URL + '/logo_competition.jpg'} className="event1" alt="banner"  />
				</div>
				<div class="col-lg-8">
					<img src={process.env.PUBLIC_URL + '/volunteer.jpg'} className="event2" alt="banner"  />
				</div>
			</div>

			<div class="stats" onScroll={this.handleScroll}>
				
				<img src={process.env.PUBLIC_URL + './Untitled-2.1.jpg'} className="photo-1" alt="banner" resizeMode='contain'
                		style={{width: '100vw'}}/>
				<div class="number">
					<span><CountUp end={50} duration={2}/></span>
					<span ><CountUp end={11} duration={4}/></span>
					<span><CountUp end={900} duration={1}/></span>
				</div>
				<div class="words">
					<span>Team Members</span>
					<span>Sponsors </span>
					<span>Members</span>
				</div>

				<div class="texts" >
					<h1 style={{color: 'white'}}>Headline</h1>

					<p class="title">
						SOME WORDS <br/>
						SOME WORDSSOME WORDS <br/>
						SOME WORDSSOME WORDSSOME WORDS
					</p>
					
					<br/>
					<p>
						Join UNSW WIT via SpARC <br/>
						Some words some words some words
						<br/>
					</p>
					<button class="button btn-sparc">Join Us</button>

				</div>
			</div>

			<div class="sponsors" >
				<h1>Our Sponsors</h1>
				<img src={process.env.PUBLIC_URL + './Untitled-3.jpg'} className="photo" alt="banner" resizeMode='contain'
                		style={{width: '90vw'}} />
			</div>
		
		</body>
			
		);

	}
}

export default AboutUs
