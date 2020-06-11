import React, { Component } from 'react';
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Home from "./home";
import JoinUs from "./joinUs";
import Sponsors from "./sponsors";
import ContactUs from "./contactUs";
import Footer from "./footer";
import OurTeam from "./team";
import Blog from "./blog";

import blogPost1 from "./blog-post/blog-post-1";
import blogPost2 from "./blog-post/blog-post-2";
import blogPost3 from "./blog-post/blog-post-3";
import blogPost4 from "./blog-post/blog-post-4";

class App extends Component{
  constructor(props) {
	super(props)
	this.state = {
	showDD: false
	}
	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
	this.setState({
	  showDD: !this.state.showDD
	})
	e.preventDefault()
  }

  render(){
  return (
	<div>
		<HashRouter basename="/">
			<nav class="navbar navbar-expand-md navbar-dark bg-custom fixed-top justify-content-between">
				<a class="navbar-brand" href="/">
					<img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo"
						resizeMode='contain' style={{width: '35px', marginLeft:  '15px', marginBottom: '5px', marginTop: '5px'}} />
				</a>
				<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item"><NavLink to="/">HOME</NavLink></li>
						<li class="nav-item"><NavLink to="/our-team">TEAM</NavLink></li>
						<li class="nav-item"><NavLink to="/sponsors">SPONSORS</NavLink></li>
						<li class="nav-item" onMouseEnter={this.handleClick} onMouseLeave={this.handleClick}>
							<div class="dropdown" display="static">
								<div class="dropdown-toggle">
									<span class="menuTitle">RESOURCES</span>
								</div>
								<div class= {this.state.showDD?'dropdown-menu show':'dropdown-menu'}>
									<li class="dropdown-item"><NavLink to="/blog">BLOG</NavLink></li>
									<li class="dropdown-item"><NavLink to="/blog">PUBLICATIONS</NavLink></li>
									<li class="dropdown-item"><NavLink to="/blog">MARKETING ARCHIVES</NavLink></li>
								</div>
							</div>
                        </li>
						<li class="nav-item"><NavLink to="/join-us">JOIN</NavLink></li>
						<li class="nav-item" style={{marginRight:"15px"}}><NavLink to="/contact-us">CONTACT</NavLink></li>
					</ul>
				</div>
			</nav>
			<body>
				<Switch>
					<Route exact path="/" component = {Home}/>
					<Route path="/our-team" component = {OurTeam}/>
					<Route exact path="/blog" component = {Blog}/>
					<Route path="/join-us" component = {JoinUs}/>
					<Route path="/sponsors" component = {Sponsors}/>
					<Route path="/contact-us" component = {ContactUs}/>
					<Route path="/blog/1" component={blogPost1}/>
					<Route path="/blog/2" component={blogPost2}/>
          			<Route path="/blog/3" component={blogPost3}/>
					<Route path="/blog/4" component={blogPost4}/>
				</Switch>
			</body>
		</HashRouter>
	<div><Footer /></div>
	</div>
  );
}
}

export default App;
