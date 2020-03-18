import React, { Component } from 'react'
import CountUp from 'react-countup';
import "./home.css";

class Home extends Component{
	render(){
		return (

			<body>
			<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
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
				<img src={process.env.PUBLIC_URL + './metrics-bg.jpg'} className="photo-1" alt="banner" resizeMode='contain'
                		style={{width: '100%'}}/>
				<div class="number">
					<span><CountUp end={10} duration={4}/></span>
					<span><CountUp end={13} duration={4}/></span>
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
			<div class='join-us'>Join Us</div>
			<div class="sponsors" >
				<h1>Our Sponsors</h1>
				<img src={process.env.PUBLIC_URL + './home-sponsors.png'} className="photo" alt="banner" resizeMode='contain'
                		style={{maxWidth: '80%'}} />
			</div>

		</body>

		);

	}
}

export default Home
