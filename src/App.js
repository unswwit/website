import React, { Component } from 'react';
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import DetectableOverflow from 'react-detectable-overflow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Home from "./home";
import JoinUs from "./join/joinUs";
import Sponsors from "./sponsors/sponsors";
import ContactUs from "./contact/contactUs";
import Footer from "./footer";

import MarketingArchive from "./marketing-archive/marketingArchive"
import MarketingContent from "./marketing-archive/marketing-content/content";
import OurTeam from "./team/team";
import Blog from "./blog-gallery/blog";
import Publications from "./publications/publications";
import Events from "./events/events";

import Menu from "./menu";
import MenuBtn from "./menuBtn";

import blogPost1 from "./blog-post/blog-post-1";
import blogPost2 from "./blog-post/blog-post-2";
import blogPost3 from "./blog-post/blog-post-3";
import blogPost4 from "./blog-post/blog-post-4";
import blogPost5 from "./blog-post/blog-post-5";
import blogPost6 from "./blog-post/blog-post-6";
import blogPost7 from "./blog-post/blog-post-7";
import blogPost8 from "./blog-post/blog-post-8";
import blogPost9 from "./blog-post/blog-post-9";
import blogPost10 from "./blog-post/blog-post-10";
import blogPost11 from "./blog-post/blog-post-11";
import blogPost12 from "./blog-post/blog-post-12";
import blogPost13 from "./blog-post/blog-post-13";
import blogPost14 from "./blog-post/blog-post-14";

class App extends Component{
  	constructor(props) {
		super(props);
		this.state = {
			showDD: false,
			menuOpen:false,
			btnVisible: 'none',
			navVisible: 'block'
		}
		this.handleHover = this.handleHover.bind(this);
		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}  

	handleMenuClick() {
		this.setState({
			menuOpen:!this.state.menuOpen
		});
	}
	
	handleHover(e) {
		this.setState({
		showDD: !this.state.showDD
		})
		e.preventDefault()
	}

	handleChange(isOverflowed) {
		if (isOverflowed) {
			this.setState({
				btnVisible: 'block',
				navVisible: 'none'
			});
			console.log("here");
		} else {
			this.setState({
				btnVisible: 'none',
				navVisible: 'block'
			});
		}
	
	}
	render() {
	return (
		<div>
			<HashRouter basename="/">
				<Menu open={this.state.menuOpen}/> 
				<DetectableOverflow onChange={this.handleChange}>
				<nav class="navbar navbar-expand-md navbar-dark bg-custom fixed-top justify-content-between">
					<a class="navbar-brand" href="/">
						<img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo"
							resizemode='contain' style={{width: '35px', marginLeft:  '15px', marginBottom: '5px', marginTop: '5px'}} />
					</a>
					<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
						<ul class="navbar-nav ml-auto" ref={(el) => {this.element = el}}>
							<li class="nav-item" style={{'display':this.state.navVisible}}><NavLink to="/">HOME</NavLink></li>
							<li class="nav-item" style={{'display':this.state.navVisible}}><NavLink to="/events">EVENTS</NavLink></li>
							<li class="nav-item" style={{'display':this.state.navVisible}}><NavLink to="/our-team">TEAM</NavLink></li>
							<li class="nav-item" style={{'display':this.state.navVisible}}><NavLink to="/sponsors">SPONSORS</NavLink></li>
							<li class="nav-item" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={{'display':this.state.navVisible}}>
								<div class="dropdown" display="static">
									<div class="dropdown-toggle">
										<span class="menuTitle">RESOURCES</span>
									</div>
									<div class= {this.state.showDD?'dropdown-menu show':'dropdown-menu'}>
										<li class="dropdown-item"><NavLink to="/blog">BLOG</NavLink></li>
										<li class="dropdown-item"><NavLink to="/publications">PUBLICATIONS</NavLink></li>
										<li class="dropdown-item"><NavLink to="/marketing-archive">MARKETING ARCHIVES</NavLink></li>
									</div>
								</div>
							</li>
							<li class="nav-item" style={{'display':this.state.navVisible}}><NavLink to="/join-us">JOIN</NavLink></li>
							<li class="nav-item" style={{marginRight:"15px", 'display':this.state.navVisible}}><NavLink to="/contact-us">CONTACT</NavLink></li>
							<li class="nav-item-btn"><MenuBtn open={this.state.menuOpen} onClick={this.handleMenuClick} show={this.state.btnVisible}/></li>
						</ul>
					</div>
				</nav>
				</DetectableOverflow>
				
					<Switch>
						<Route exact path="/" component = {Home}/>
						<Route path="/events" component={Events}/>
						<Route path="/our-team" component = {OurTeam}/>
						<Route exact path="/blog" component = {Blog}/>
						<Route exact path="/marketing-archive" component = {MarketingArchive}/>
					<Route path="/marketing-archive/content" component={MarketingContent}/>
						<Route path="/join-us" component = {JoinUs}/>
						<Route path="/sponsors" component = {Sponsors}/>
						<Route path="/contact-us" component = {ContactUs}/>
						<Route path="/publications" component={Publications}/>
						<Route path="/blog/1" component={blogPost1}/>
						<Route path="/blog/2" component={blogPost2}/>
						<Route path="/blog/3" component={blogPost3}/>
						<Route path="/blog/4" component={blogPost4}/>
						<Route path="/blog/5" component={blogPost5}/>
						<Route path="/blog/6" component={blogPost6}/>
						<Route path="/blog/7" component={blogPost7}/>
						<Route path="/blog/8" component={blogPost8}/>
						<Route path="/blog/9" component={blogPost9}/>
						<Route path="/blog/10" component={blogPost10}/>
						<Route path="/blog/11" component={blogPost11}/>
						<Route path="/blog/12" component={blogPost12}/>
						<Route path="/blog/13" component={blogPost13}/>
						<Route path="/blog/14" component={blogPost14}/>
					</Switch>
				
			</HashRouter>
		<div><Footer /></div>
		</div>
	);
	}
}

export default App;
