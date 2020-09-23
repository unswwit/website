//All necessary imports for this javascript
import React, { Component } from "react";
import "../style.css";
import "./blog.css";
import { Link } from "react-router-dom";

class BlogPreview extends Component {
    render() {
        return (
            <div>
                {/*Start of blog posts*/}
                <div class="blog-post" style={{marginTop:this.props.topMargin, marginBottom:this.props.bottomMargin}}>
                    <table cellpadding="0">
                    <Link to={ "/blog/" + this.props.blogNo } style={{ textDecoration: 'none'}}>
                        <tr id="preview-row">
                            <td>
                                <img class="preview-pic" src={process.env.PUBLIC_URL + this.props.imgUrl} alt="preview"/>
                            </td>
                            <td class= "blog-preview">
                                <div class="blog-details">
                                    <div class="heading">
                                    {this.props.heading}
                                    </div>
                                    <div class="date">{this.props.date}</div>
                                    <div class="subheading">{this.props.subheading}</div>
                                </div>
                                <tr class="author-row">
                                {
                                Object.keys(this.props.authors).map((key) => ( 
                                    <td class="author-section" key={key}>
                                        <td>
                                            <div class="author-pic">
                                                <img
                                                src={process.env.PUBLIC_URL + this.props.authors[key][0]}
                                                className="profile_img vivw_img"
                                                alt={key}
                                                resizeMode="contain"
                                                />
                                            </div>
                                        </td>
                                    
                                        <td class="author-name">
                                            <div class="auth">{this.props.authors[key][1]}</div>
                                        </td>
                                    </td>
                                ))
                                }
                                </tr>
                            </td>
                        </tr>
                       </Link>
                    </table>
                </div>
                {/*End of blog posts*/}
            </div>
        );
    }
}
export default BlogPreview;
