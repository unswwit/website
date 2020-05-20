import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Home from "./home";
import JoinUs from "./joinUs";
import Sponsors from "./sponsors";
import ContactUs from "./contactUs";
import Footer from "./footer";
import OurTeam from "./team";
import BlogPosts from "./blogPosts";
import FullBlogPosts from "./fullBlogPost";

class App extends Component{
  render(){
  return (
	<div>
		<Router>
			<nav class="navbar navbar-expand-md navbar-dark bg-custom fixed-top justify-content-between">
				<a class="navbar-brand" href="/">
					<img src={process.env.PUBLIC_URL + './logo-black.png'} className="photo" alt="wit logo"
						resizeMode='contain' style={{width: '35px'}} />
				</a>
				<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item"><NavLink to="/">HOME</NavLink></li>
						<li class="nav-item"><NavLink to="/our-team">TEAM</NavLink></li>
						<li class="nav-item"><NavLink to="/sponsors">SPONSORS</NavLink></li>
						<li class="nav-item"><NavLink to="/blog-posts">BLOG POSTS</NavLink></li>
						<li class="nav-item"><NavLink to="/join-us">JOIN</NavLink></li>
						<li class="nav-item"><NavLink to="/contact-us">CONTACT</NavLink></li>
					</ul>
				</div>
			</nav>
			<body>
				<Route exact path="/" component = {Home}/>
				<Route path="/our-team" component = {OurTeam}/>
				<Route path="/blog-posts" component = {BlogPosts}/>
				<Route path="/join-us" component = {JoinUs}/>
				<Route path="/sponsors" component = {Sponsors}/>
				<Route path="/contact-us" component = {ContactUs}/>
				<Route path="/blog-posts-1" component={FullBlogPosts}/>
			</body>
		</Router>
	<div><Footer /></div>
	</div>
  );
}
}

export default App;
