import React, { Component } from 'react'
import "./style.css";
class Footer extends Component{
    
	render(){
		return (
            <div>
                <footer>
                    <ul class="footer-links">
                        <li class="footer-item"><img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo" 
                            resizeMode='contain' style={{width: '50px'}} /></li>
                        <li class="footer-item"><a href="/">Home</a></li>
                        <li class="footer-item"><a href="/our-team">Team </a></li>
                        <li class="footer-item"><a href="/sponsors">Sponsors </a></li>
                        <li class="footer-item"><a href="/blog-posts">Blog Posts </a></li>
                        <li class="footer-item"><a href="/join-us">Join </a></li>
                        <li class="footer-item"><a href="/contact-us">Contact</a></li>
                        <li class="footer-item"><a href="https://www.linkedin.com/company/unsw-women-in-technology"><img src={process.env.PUBLIC_URL + '/linkedin.png'} className="" alt="banner" resizeMode='contain'
                            style={{width:'25px', height:'25px'}} /></a></li>
                        <li class="footer-item"><a href="https://www.facebook.com/unsw.wit/"><img src={process.env.PUBLIC_URL + '/facebook.png'} className="" alt="banner" resizeMode='contain'
                            style={{width:'25px', height:'25px'}} /></a></li>
                        <li class="footer-item"><a href="https://www.instagram.com/wit.unsw/"><img src={process.env.PUBLIC_URL + '/instagram.png'} className="" alt="banner" resizeMode='contain'
                            style={{width:'25px', height:'25px'}} /></a></li>
                    </ul>
                    <div class="footer-copyright text-center">Copyright © 2020 | <li class="footer-item" id="copyright"><a href="https://unswwit.com/">UNSW Women in Technology</a></li></div>
                </footer>
            </div>
            
		);

	}
}

export default Footer