import React, { Component } from "react";
import "../.././style.css";
import "./content.css";

class TechTrivia extends Component {
    render() {
        return (
            <li class="image trivia">
              <a href={this.props.fb} class="darken">
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
export default TechTrivia;
