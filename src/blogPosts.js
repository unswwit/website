//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./blogPosts.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FullBlogPosts from "./fullBlogPost"

class BlogPosts extends Component {
  render() {
    return (
            <div>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/>

            {/*Start of Header*/}
            <div class="coverPhoto">
                <div class="title">
                    <h1>Blog Posts</h1>
                </div>
            </div>
            {/*End of Header*/}
           
            {/*Start of blog posts*/}
            <Router>
            <Link to="/blog-posts/1">
            <div class="blog-post" style={{marginTop: '10vw', marginBottom: '10vw'}}>
                <table style={{ width: "911px", height: "325px"}}>
                <tr>
                    <tr>
                        <td>
                            <img src={process.env.PUBLIC_URL + '/blog_preview.jpg'} alt="preview" style={{width:"600px", height: "380px"}}/>
                        </td>

                        <td class= "blog-preview">
                            <td>
                                <div class="author-pic">
                                    <img
                                    src={process.env.PUBLIC_URL + "/potraits/kelly.png"}
                                    className="profile_img"
                                    alt="kelly-liang"
                                    resizeMode="contain"
                                    />
                                </div>
                            </td>

                            <td>
                                <div class='heading'>Author</div>
                                <div class='heading-2'>Date Published</div>
                            </td>
                            <tr>
                            <div class='heading'>Title</div>
                            <div class='heading-2'>description</div>
                            </tr>
                        </td>


                    </tr>
                </tr>
                </table>
            </div>
            </Link>
            {/*End of blog posts*/}

            <body>
      				<Route path="/blog-posts/1" component = {FullBlogPosts}/>

      			</body>

          </Router>
        </div>
    );
  }
}
export default BlogPosts;
