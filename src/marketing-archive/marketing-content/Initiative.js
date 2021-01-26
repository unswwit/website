import React, { Component } from "react";
import "../.././style.css";
import "../marketing-content/content.css";

class Initiative extends Component {
  render() {
    return (
      <li className="image">
        <a
          href={this.props.fb}
          className="darken"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + this.props.imgUrl}
            alt={this.props.alt}
          />
          <div className="message">{this.props.date}</div>
        </a>
      </li>
    );
  }
}
export default Initiative;
