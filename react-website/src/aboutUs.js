import React, { Component } from 'react'

class AboutUs extends Component{
	render(){
		return (
			<div>
			 <div class="container">
                		<img src={process.env.PUBLIC_URL + '/arts-build-close-up-commerce-273230.jpg'} className="" alt="banner" resizeMode='contain'
                		style={{height: 768,width: 1366}} />
				<div class="headline">
					<h1>UNSW</h1>
					<h1>Women In Techonology</h1>
					<p class="title">
						Empowering and Inspiring 
						<br/>
						the Artchitects of Change
					</p>
				</div>		
				<button class="button btn">Join Us</button>
			</div>
			<div class="unite">	
		
				<h1>Unite, Empower & Upskill </h1>
				<p>
				Technology is the driving force of our future and is a vital part of our everyday lives, and yet the industry still does not represent the society that they’re creating solutions for. That’s why we are passionate about equality and diversity in the tech industry.

Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills female and male students alike that are passionate about our mission. Women in Technology (WIT) aims to cultivate future leaders that are prepared  to challenge the prejudices and bring change into the industry while building a strong community where they can find lasting friendships and support.

At WIT, our focus is on providing events that foster development catering to first to final years. Whether it’s personal, academic, professional or social, we want our students to be the best version of themselves. As part out aim, we also connect current and future students with alumni and industry sponsors to serve as role models to inspire.

In 2020, we aim to go above and beyond to create events and opportunities for our members to learn and develop both their technical and professional skills.
				</p>
			</div>
			 <img src={process.env.PUBLIC_URL + '/Untitled-1.jpg'} className="" alt="banner" resizeMode='contain'
                                style={{width: '100vw'}} />

			</div>	
		
		);

	}
}

export default AboutUs
