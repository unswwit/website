//All necessary imports for this javascript
import React, { Component } from "react";
import "../style.css";
import "./blog.css";
import { Link } from "react-router-dom";

class BlogPreview extends Component {
  render() {
    return (
      <div>
        {/*Start of blog post preview*/}
        <div
          className="blog-post"
          style={{
            marginTop: this.props.topMargin,
            marginBottom: this.props.bottomMargin,
          }}
        >
          <table cellpadding="0">
            <Link
              to={"/blog/" + this.props.blogNo}
              style={{ textDecoration: "none" }}
            >
              <tr id="preview-row">
                <td>
                  <div className="preview-pic">
                    <img
                      className="preview-pic"
                      src={process.env.PUBLIC_URL + this.props.imgUrl}
                      alt="preview"
                    />
                  </div>
                </td>
                <td className="blog-preview">
                  <div className="blog-details">
                    <div className="heading">{this.props.heading}</div>
                    <div className="date">{this.props.date}</div>
                    <div className="subheading">{this.props.subheading}</div>
                  </div>
                  <tr className="author-row">
                    {Object.keys(this.props.authors).map((key) => (
                      <td className="author-section" key={key}>
                        <td>
                          <div className="author-pic">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                this.props.authors[key][0]
                              }
                              className="profile_img vivw_img"
                              alt={key}
                            />
                          </div>
                        </td>

                        <td className="author-name">
                          <div className="auth">
                            {this.props.authors[key][1]}
                          </div>
                        </td>
                      </td>
                    ))}
                  </tr>
                </td>
              </tr>
            </Link>
          </table>
        </div>
        {/*End of blog post preview*/}
      </div>
    );
  }
}
export default BlogPreview;
