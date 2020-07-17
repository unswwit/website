import React, { Component } from "react";
import "../.././style.css";
import "./content.css";

class Memes extends Component {
    render() {
        return (
            <li class="image memes">
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
export default Memes;
