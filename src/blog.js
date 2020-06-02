//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./blog.css";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
        <div>

            {/*Start of Header*/}
            <div class="coverPhoto">
                <div class="title">
                    <h1>Blog Posts</h1>
                </div>
            </div>
            {/*End of Header*/}
           
            {/*Start of blog posts*/}
            <Link to="/blog/1">
            <div class="blog-post" style={{marginTop: "10vw", marginBottom: "10vw"}}>
                
                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog_preview.jpg"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                                    className="profile_img vivw_img"
                                    alt="vivian-wong"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="heading">Vivian Wong</div>
                                    <div class="subheading">20/05/2020</div>
                                </td>
                            </tr>
                            
                            <div class="blog-details">
                                <div class="heading">
                                    Introducing: Silvia Lin, Senior Consultant of PWC and WIT Co-founder
                                </div>
                                <div class="subheading">
                                    Learn more about our co-founder and now PWC Senior Consultant Silvia Lin and her journey into technology!
                                </div>
                            </div>
                               
                        </td>
                    </tr>
                </tr>
                </table>
            </div>
            </Link>
            
            <Link to="/blog/2">
            <div class="blog-post" style={{marginTop: "10vw", marginBottom: "10vw"}}>
                
                <table cellpadding="0" style={{ width: "950px", height: "350px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/blog_preview.jpg"} alt="preview" style={{width:"550px", height: "350px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <tr>
                                <td>
                                    <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/elisa.jpg"}
                                    className="profile_img vivw_img"
                                    alt="elisa-sanjurjo"
                                    resizeMode="contain"
                                    />
                                    </div>
                                </td>
                                <td style={{width: "200px"}}>
                                    <div class="heading">Victoria Ruming and Elisa Sanjurjo</div>
                                    <div class="subheading">27/05/2020</div>
                                </td>
                            </tr>
                            
                            <div class="blog-details">
                                <div class="heading">
                                    Introducing: Professor Lisa Harvey Smith, Astrophysicist and Australia’s First Women In STEM Ambassador
                                </div>
                                <div class="subheading">
                                    Learn more about our co-founder and now PWC Senior Consultant Silvia Lin and her journey into technology!
                                </div>
                            </div>
                               
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
export default Blog;
