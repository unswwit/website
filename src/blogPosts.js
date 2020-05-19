//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./blogPosts.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import FullBlogPosts from "./fullBlogPost"

class BlogPosts extends Component {
  render() {
    return (
        <div>
          <Router>
           <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/>

            {/*Start of Header*/}
            <div class="coverPhoto">
                <div class="title">
                    <h1>Blog Posts</h1>
                </div>
            </div>
            {/*End of Header*/}

            <NavLink to="/full-blog">
            {/*Start of blog posts*/}
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
            </NavLink>
            {/*End of blog posts*/}

            <body>
      				<Route path="/full-blog" component = {FullBlogPosts}/>

      			</body>

          </Router>
        </div>
    );
  }
}
export default BlogPosts;
