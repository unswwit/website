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
                <Link to={ "/blog/" + this.props.blogNo } style={{ textDecoration: 'none' }}>
                <div class="blog-post" style={{marginTop:this.props.topMargin, marginBottom:this.props.bottomMargin}}>

                    <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                    <tr>
                        <tr>
                            <td>
                                <img src={process.env.PUBLIC_URL + this.props.imgUrl} alt="preview" style={{width:"550px", height: "350px"}}/>
                            </td>
                            <td class= "blog-preview">
                                <div class="blog-details">
                                    <div class="heading">
                                    {this.props.heading}
                                    </div>
                                    <div class="date">{this.props.date}</div>
                                    <div class="subheading">{this.props.subheading}</div>
                                </div>
                                <tr>
                                {
                                Object.keys(this.props.authors).map((key, index) => ( 
                                    <td key={key}>
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
                                    
                                        <td style={{width: "200px"}}>
                                            <div class="auth">{this.props.authors[key][1]}</div>
                                        </td>
                                    </td>
                                ))
                                }
                                </tr>
                            </td>
                        </tr>
                    </tr>
                    </table>
                </div>
                </Link>
                {/*End of blog posts*/}
            </div>
        );
    }
}
export default BlogPreview;
