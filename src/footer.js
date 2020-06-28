import React, { Component } from 'react'
import "./style.css";
class Footer extends Component{
    
	render(){
		return (
            <div>
                <footer>
                    <ul class="footer-links">
                        <div class="row">   
                            <div class="col">
                            <li class="footer-item footer-logo"><img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo" 
                                resizeMode='contain' style={{width: '100px'}} /></li>
                            </div>
                            <div class="col">
                                <li class="footer-item"><a href="/">Home</a></li>
                                <li class="footer-item"><a href="/our-team">Team </a></li>
                                <li class="footer-item"><a href="/sponsors">Sponsors </a></li>
                                <li class="footer-item"><a href="/join-us">Join </a></li>
                                <li class="footer-item"><a href="/contact-us">Contact</a></li>
                            </div>
                            <div class="col">
                                <li class="footer-item"><a href="/blog-posts">Blog </a></li>
                                <li class="footer-item"><a href="/blog-posts">Opportunities</a></li>
                                <li class="footer-item"><a href="/blog-posts">Marketing Archives</a></li>
                            </div>
                            <div class="col socials">
                                <div class="socials-subheading"><li class="footer-item">Follow our socials</li></div>
                                <li class="footer-item"><a href="https://www.linkedin.com/company/unsw-women-in-technology"><img src={process.env.PUBLIC_URL + '/linkedin.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'35px', height:'35px'}} /></a></li>
                                <li class="footer-item"><a href="https://www.facebook.com/unsw.wit/"><img src={process.env.PUBLIC_URL + '/facebook.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'35px', height:'35px'}} /></a></li>
                                <li class="footer-item"><a href="https://www.instagram.com/wit.unsw/"><img src={process.env.PUBLIC_URL + '/instagram.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'35px', height:'35px'}} /></a></li>
                            </div>
                        </div>
                    </ul>
                    <div class="footer-copyright text-center footer-item"><a href="https://unswwit.com/">Copyright © 2020. UNSW Women in Technology</a></div>
                </footer>
            </div>
            
		);

	}
}

export default Footer