//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";

class BlogTemplate extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div>
            {/*Start of Header*/}
            <div class="coverPhoto">
                <div class="title">
                    <h1>Blog Post #{this.props.blogNum}</h1>
                </div>
            </div>

            {/*End of Header*/}

            {/*Start of blog post*/}
            <div class="blog-content">
                
                <div>
                <h2 class = "blog-title">{this.props.title}</h2>
                <p class="date">{this.props.date}</p>
                </div>
            
                <div class="post">
                    {
                        Object.keys(this.props.content).map((key, index) => ( 
                            <div key={index}>
                                ( (this.props.content[key][0] === "list" && this.props.content[key][2] === "start") ? <ol> : null }
                                { this.props.content[key][0] === "list" ? 
                                    <li class="list">{this.props.content[key][1]}</li> : <p class={this.props.content[key][0]}>{this.props.content[key][1]}</p>
                                }
                                { this.props.content[key][2] === "end" ? </ol> : null }
                                { this.props.content[key][2] === "break" ? <br/> : null }
                            </div>
                    ))}
                </div>  
            </div>

            {/*for the blog post author*/}
                <AuthorCard authors={this.props.authors} />
            {/*End of blog posts*/}
        </div>
    );
  }
}
export default BlogTemplate;
