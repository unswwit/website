//All necessary imports for this javascript
import React, { Component } from "react";
import "../style.css";
import "./publications.css";
import { Link } from "react-router-dom";

class PubArticle extends Component {
    render() {
        return (
            <div>
                {/*start of publicationsn article*/}

                <div className = "article">
                  <div className = "dark" > </div>
                  <div className = "image_container">

                    <img src={process.env.PUBLIC_URL + this.props.imgUrl} alt="wit logo"
                    className = "article_img"/>
                  </div>

                  <div className = "text_container">

                    <h2> {this.props.heading} </h2>

                    <p> {this.props.date} </p>

                    <div className = "button">
                      <h3> Read More </h3>
                    </div>
                  </div>
                </div>

                {/*End of publications article*/}
            </div>
        );
    }
}
export default PubArticle;
