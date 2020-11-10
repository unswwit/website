//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";

class AuthorCard extends Component {
  render() {
    return (
      <div className="author-card">
        {/*for the blog post author*/}
        {Object.keys(this.props.authors).map((key, index) => (
          <div key={index} className="author">
            <div className="author-left">
              <div>
                {" "}
                {/*note this div is necessary to formatting*/}
                <img
                  src={process.env.PUBLIC_URL + this.props.authors[key][0]}
                  className={this.props.authors[key][1]}
                  alt={key}
                />
              </div>
            </div>
            <div className="author-right">
              <div className="title author-name">
                {this.props.authors[key][2]}
              </div>
              <div className="position">{this.props.authors[key][3]}</div>
            </div>
          </div>
        ))}
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default AuthorCard;
