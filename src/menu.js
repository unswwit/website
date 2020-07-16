import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component{
    constructor(props){
        super(props);
        this.menuItems=['Home','Events','Team','Sponsors','Resources','Join','Contact'];
        this.subMenu= ['Blog','Publications','Marketing Archives'];
        this.state={
            open: this.props.open,
            showDD: false,
        };
        this.handleHover = this.handleHover.bind(this);
      }
        
    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }
      	
	handleHover() {
		this.setState({
		    showDD: !this.state.showDD
        })
    }
     
    render(){
        return(
          <div class="menu-container">
            {
              this.state.open ?
                <div class="menu-list">
                    <ul class="navbar-nav menu-bar">
                    <li class="menu-item"><NavLink to="/">HOME</NavLink></li>
                    <li class="menu-item"><NavLink to="/events">EVENTS</NavLink></li>
                    <li class="menu-item"><NavLink to="/our-team">TEAM</NavLink></li>
                    <li class="menu-item"><NavLink to="/sponsors">SPONSORS</NavLink></li>
                    <li class="menu-item" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                        <div class="dropdown">
                            <div class="dropdown-toggle">
                                <span class="menuTitle">RESOURCES</span>
                            </div>
                        </div>
                        {
                        this.state.showDD ?
                        <div>
                            <li class="menu-item"><NavLink to="/blog">BLOG</NavLink></li>
                            <li class="menu-item"><NavLink to="/publications">PUBLICATIONS</NavLink></li>
                            <li class="menu-item"><NavLink to="/blog">MARKETING ARCHIVES</NavLink></li>
                        </div>:null
                        }
                    </li>
                   
                    <li class="menu-item"><NavLink to="/join-us">JOIN</NavLink></li>
                    <li class="menu-item" style={{marginRight:"15px"}}><NavLink to="/contact-us">CONTACT</NavLink></li>
                    </ul>
                </div>:null
            }
          </div>
        )
    }
}

export default Menu;