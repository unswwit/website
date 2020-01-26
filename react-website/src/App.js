import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
//import './style.css';
//import AboutUs from "./aboutUs"
import OurTeam from "./team"
//import JoinUs from "./joinUs"
//import Sponsors from "./sponsors"
//import ContactUs from "./contactUs"

class App extends Component{ 
  render(){
  return (
	<Router>
  		<nav class="navbar navbar-expand-md navbar-light bg-faded fixed-top ">
	  		<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
	  		<ul class="navbar-nav ml-auto">
          <li class="nav-item"><NavLink to="/">About Us</NavLink></li>
          <li class="nav-item"><NavLink to="/our-team"> Our Team</NavLink></li>
          <li class="nav-item"><NavLink to="/join-us"> Join Us</NavLink></li>
          <li class="nav-item"><NavLink to="/sponsors"> Sponsors</NavLink></li>
          <li class="nav-item"><NavLink to="/contact-us">Contact Us</NavLink></li>
	  		</ul>
	  		</div>
	  	</nav>
	  	<div className="content">
      <Route path="/our-team" component = {OurTeam}/>
			{/* //<Route exact path="/" component = {AboutUs}/>
			<Route path="/our-team" component = {OurTeam}/>
	  	//<Route path="/join-us" component = {JoinUs}/>
			//<Route path="/sponsors" component = {Sponsors}/>
	  	//<Route path="/contact-us" component = {ContactUs}/> */}
	  	</div>
	  </Router>
  );
}
}

export default App;