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
                    <ul class="footer-all">
                        <div class="grid-footer-container">
                            <li class="col-width footer-item footer-logo"><img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo"
                                resizeMode='contain' style={{width: '6.5vw'}} /></li>
                            <div class="col-width footer-links">
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/">Home</Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/events">Events </Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/our-team">Team </Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/sponsors">Sponsors </Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/join-us">Join </Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/contact-us">Contact </Link></li>
                            </div>
                            <div class="col-width footer-links">
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/blog">Blog </Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/publications">Publications</Link></li>
                                <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/marketing-archive">Marketing Archives</Link></li>
                            </div>
                            <div class="col-width socials">
                                <div class="socials-subheading"><li class="footer-item">Follow our socials</li></div>
                                <div class="footer-item">
                                <span class="footer-icons"><a href="https://www.linkedin.com/company/unsw-women-in-technology"><img src={process.env.PUBLIC_URL + '/linkedin.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'2.3vw', height:'2.3vw'}} /></a></span>
                                <span class="footer-icons"><a href="https://www.facebook.com/unsw.wit/"><img src={process.env.PUBLIC_URL + '/facebook.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'2.3vw', height:'2.3vw'}} /></a></span>
                                <span class="footer-icons"><a href="https://www.instagram.com/wit.unsw/"><img src={process.env.PUBLIC_URL + '/instagram.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'2.3vw', height:'2.3vw'}} /></a></span>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <div class="footer-copyright text-center bottom-footer-item"><Link to="https://unswwit.com/">Copyright © 2020. UNSW Women in Technology</Link></div>
                </footer>
                </HashRouter>
            </div>
		);

	}
}

export default Footer
