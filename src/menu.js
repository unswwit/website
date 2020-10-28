import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      showDD: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({
      showDD: !this.state.showDD
    });
  }

  render() {
    return (
      <div className="menu-container">
        {this.state.open ? (
          <div className="menu-list">
            <ul className="navbar-nav menu-bar">
              <NavLink class="menu-link" to="/" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item">HOME</li>
                </div>
              </NavLink>
              <NavLink class="menu-link" to="/events" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item">EVENTS</li>
                </div>
              </NavLink>
              <NavLink class="menu-link" to="/our-team" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item">TEAM</li>
                </div>
              </NavLink>
              <NavLink class="menu-link" to="/sponsors" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item">SPONSORS</li>
                </div>
              </NavLink>
              <NavLink class="menu-link" to="/opportunities" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item">OPPORTUNITIES</li>
                </div>
              </NavLink>
              <div>
                <li className="menu-item">
                  <div className="menu-box menu-dropdown" onClick={this.handleClick}>
                    <div className="dropdown-toggle">
                      <span className="menu-item menuTitle">RESOURCES</span>
                    </div>
                  </div>
                  {this.state.showDD ? (
                    <div>
                      <NavLink class="menu-link" to="/blog" style={{ textDecoration: 'none' }}>
                        <div className="menu-box">
                          <li className="menu-item">BLOG</li>
                        </div>
                      </NavLink>
                      <NavLink
                        class="menu-link"
                        to="/publications"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="menu-box">
                          <li className="menu-item">PUBLICATIONS</li>
                        </div>
                      </NavLink>
                      <NavLink
                        class="menu-link"
                        to="/marketing-archive"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="menu-box">
                          <li className="menu-item">MARKETING ARCHIVES</li>
                        </div>
                      </NavLink>
                    </div>
                  ) : null}
                </li>
              </div>

              <NavLink class="menu-link" to="/join-us" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item">JOIN</li>
                </div>
              </NavLink>
              <NavLink class="menu-link" to="/contact-us" style={{ textDecoration: 'none' }}>
                <div className="menu-box">
                  <li className="menu-item" style={{ marginRight: '15px' }}>
										CONTACT
                  </li>
                </div>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
