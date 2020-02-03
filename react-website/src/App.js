import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import './style.css';
import AboutUs from "./aboutUs"
import JoinUs from "./joinUs"
import Sponsors from "./sponsors"
import ContactUs from "./contactUs"
import Footer from './footer'
import OurTeam from "./team"


class App extends Component{ 
  render(){
  return (
	<div>
	<Router>
  		<nav class="navbar navbar-expand-md navbar-light bg-custom fixed-top">
	  		<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
	  		<ul class="navbar-nav ml-auto">
				<li class="nav-item"><NavLink to="/"><strong>About Us</strong></NavLink></li>
      			<li class="nav-item"><NavLink to="/our-team"><strong>Our Team</strong></NavLink></li>
      			<li class="nav-item"><NavLink to="/join-us"><strong>Join Us</strong></NavLink></li>
				<li class="nav-item"><NavLink to="/sponsors"> <strong>Sponsors</strong></NavLink></li>
				<li class="nav-item"><NavLink to="/contact-us"><strong>Contact Us</strong></NavLink></li>
	  		</ul>
	  		</div>
	  	</nav>
		 
		  <body>
        <Route exact path="/" component = {AboutUs}/>
        <Route path="/our-team" component = {OurTeam}/>
        <Route path="/join-us" component = {JoinUs}/>
        <Route path="/sponsors" component = {Sponsors}/>
        <Route path="/contact-us" component = {ContactUs}/>
			</body>
	  	
	  </Router>
	<div><Footer /></div>
	</div>
  );
}
}

export default App;
