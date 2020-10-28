import React, { Component } from 'react';
import '../.././style.css';
import '../marketing-content/content.css';

class WCW extends Component {
  render() {
    return (
      <li className="image crush">
        <a href={this.props.fb} className="darken" target="_blank" rel="noopener noreferrer">
          <div className="message">{this.props.date}</div>
          <img src={process.env.PUBLIC_URL + this.props.imgUrl} alt={this.props.alt} />
        </a>
      </li>
    );
  }
}
export default WCW;
