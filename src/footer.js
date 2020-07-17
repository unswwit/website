import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./style.css";
class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            alignment: 'left'
        };    
        this.handleAlignment = this.handleAlignment.bind(this);  
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleAlignment);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleAlignment);
    }

    handleAlignment() {
        var grid = document.querySelector('.grid-footer-container');
        const gridComputedStyle = window.getComputedStyle(grid);
        const numCol = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        
        if (numCol === 1 && this.state.alignment === 'left') {
            this.setState({
                alignment: 'center'
            });
        } else if (numCol === 2 && this.state.alignment === 'center') {
            this.setState({
                alignment: 'left'
            });
        }
    }

    render(){
		return (
            <div>
                <HashRouter basename="/">
                <footer>
                    <ul class="footer-links">
                        <div class="row grid-all-footer">
                            <div class="col">
                            <li class="footer-item footer-logo"><img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo"
                                resizeMode='contain' style={{width: '6.5vw'}} /></li>
                            </div>
                            <div class="grid-footer-container" style={{textAlign: this.state.alignment}}>
                                <div>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/">Home</Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/events">Events </Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/our-team">Team </Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/sponsors">Sponsors </Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/join-us">Join </Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/contact-us">Contact </Link></li>
                                </div>
                                <div>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/blog">Blog </Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/publications">Publications</Link></li>
                                    <li class="footer-item"><Link onClick={() => window.scrollTo(0, 0)} to="/marketing-archive">Marketing Archives</Link></li>
                                </div>
                            </div>
                            <div class="col socials">
                                <div class="socials-subheading"><li class="footer-item">Follow our socials</li></div>
                                <li class="footer-item"><a href="https://www.linkedin.com/company/unsw-women-in-technology"><img src={process.env.PUBLIC_URL + '/linkedin.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'2.3vw', height:'2.3vw'}} /></a></li>
                                <li class="footer-item"><a href="https://www.facebook.com/unsw.wit/"><img src={process.env.PUBLIC_URL + '/facebook.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'2.3vw', height:'2.3vw'}} /></a></li>
                                <li class="footer-item"><a href="https://www.instagram.com/wit.unsw/"><img src={process.env.PUBLIC_URL + '/instagram.png'} className="" alt="banner" resizeMode='contain'
                                    style={{width:'2.3vw', height:'2.3vw'}} /></a></li>
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
