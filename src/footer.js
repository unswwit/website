import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./style.css";
class Footer extends Component{
    
	render(){
		return (
            <div>
                <HashRouter basename="/">
                <footer>
                    <ul class="footer-links">
                        <div class="row">   
                            <div class="col">
                            <li class="footer-item footer-logo"><img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo" 
                                resizeMode='contain' style={{width: '100px'}} /></li>
                            </div>
                            <div class="col footer-group-short">
                                <li class="footer-item"><Link to="/">Home</Link></li>
                                <li class="footer-item"><Link to="/our-team">Team </Link></li>
                                <li class="footer-item"><Link to="/sponsors">Sponsors </Link></li>
                                <li class="footer-item"><Link to="/join-us">Join </Link></li>
                                <li class="footer-item"><Link to="/contact-us">Contact </Link></li>
                            </div>
                            <div class="col footer-group-long">
                                <li class="footer-item"><Link to="/blog">Blog </Link></li>
                                <li class="footer-item"><Link to="/blog">Opportunities</Link></li>
                                <li class="footer-item"><Link to="/blog">Marketing Archives</Link></li>
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
                    <div class="footer-copyright text-center footer-item"><Link to="https://unswwit.com/">Copyright © 2020. UNSW Women in Technology</Link></div>
                </footer>
                </HashRouter>
            </div>
		);

	}
}

export default Footer