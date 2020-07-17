import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            open: this.props.open,
            showDD: false,
        };
        this.handleClick = this.handleClick.bind(this);
      }
        
    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }
      	
	handleClick() {
		this.setState({
		    showDD: !this.state.showDD
        })
    }
     
    render(){
        return(
          <div className="menu-container">
            {
              this.state.open ?
                <div class="menu-list">
                    <ul class="navbar-nav menu-bar">
                        <div class="menu-box"><li class="menu-item"><NavLink to="/">HOME</NavLink></li></div>
                        <div class="menu-box"><li class="menu-item"><NavLink to="/events">EVENTS</NavLink></li></div>
                        <div class="menu-box"><li class="menu-item"><NavLink to="/our-team">TEAM</NavLink></li></div>
                        <div class="menu-box"><li class="menu-item"><NavLink to="/sponsors">SPONSORS</NavLink></li></div>
                        <div class="menu-box"><li class="menu-item" onClick={this.handleClick}>
                            <div class="dropdown">
                                <div class="dropdown-toggle">
                                    <span class="menuTitle">RESOURCES</span>
                                </div>
                            </div>
                            {
                            this.state.showDD ?
                            <div>
                                <div class="menu-box"><li class="menu-item"><NavLink to="/blog">BLOG</NavLink></li></div>
                                <div class="menu-box"> <li class="menu-item"><NavLink to="/publications">PUBLICATIONS</NavLink></li></div>
                                <div class="menu-box"> <li class="menu-item"><NavLink to="/blog">MARKETING ARCHIVES</NavLink></li></div>
                            </div>:null
                            }
                        </li></div>
                    
                        <div class="menu-box"><li class="menu-item"><NavLink to="/join-us">JOIN</NavLink></li></div>
                        <div class="menu-box"><li class="menu-item" style={{marginRight:"15px"}}><NavLink to="/contact-us">CONTACT</NavLink></li></div>
                    </ul>
                </div>:null
            }
          </div>
        )
    }
}

export default Menu;