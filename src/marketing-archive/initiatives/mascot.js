import React, { Component } from "react";
import "../.././style.css";
import "../marketing-content/content.css";

class Mascot extends Component {
    render() {
        return (
            <li class="image mascot">
              <a href={this.props.fb} class="darken" target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + this.props.imgUrl}
                  alt={this.props.alt}
                  resizeMode="contain"
                />
                <div class="message">{this.props.date}</div>
              </a>
            </li>
        );
    }
}
export default Mascot;
