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
                        <NavLink class="menu-link" to="/"style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">HOME</li></div></NavLink>
                        <NavLink class="menu-link" to="/events" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">EVENTS</li></div></NavLink>
                        <NavLink class="menu-link" to="/our-team" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">TEAM</li></div></NavLink>
                        <NavLink class="menu-link"to="/sponsors" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">SPONSORS</li></div></NavLink>
                        <NavLink class="menu-link" to="/opportunities" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">OPPORTUNITIES</li></div></NavLink>
                        <div><li class="menu-item">
                            <div class="menu-box dropdown" onClick={this.handleClick}>
                                <div class="dropdown-toggle">
                                    <span class="menu-item menuTitle">RESOURCES</span>
                                </div>
                            </div>
                            {
                            this.state.showDD ?
                            <div>
                                <NavLink class="menu-link" to="/blog" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">BLOG</li></div></NavLink>
                                <NavLink class="menu-link" to="/publications" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">PUBLICATIONS</li></div></NavLink>
                                <NavLink class="menu-link" to="/marketing-archive" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">MARKETING ARCHIVES</li></div></NavLink>
                            </div>:null
                            }
                        </li></div>
                    
                        <NavLink class="menu-link" to="/join-us" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item">JOIN</li></div></NavLink>
                        <NavLink class="menu-link" to="/contact-us" style={{textDecoration: "none"}}><div class="menu-box"><li class="menu-item" style={{marginRight:"15px"}}>CONTACT</li></div></NavLink>
                    </ul>
                </div>:null
            }
          </div>
        )
    }
}

export default Menu;