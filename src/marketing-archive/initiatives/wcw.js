import React, { Component } from "react";
import "../.././style.css";
import "../marketing-content/content.css";

class WCW extends Component {
    render() {
        return (
            <li class="image crush">
              <a href={this.props.fb} class="darken" target="_blank" rel="noopener noreferrer">
                <div class="message">{this.props.date}</div>
                <img
                  src={process.env.PUBLIC_URL + this.props.imgUrl}
                  alt={this.props.alt}
                  resizeMode="contain"
                />
              </a>

            </li>
        );
    }
}
export default WCW;
