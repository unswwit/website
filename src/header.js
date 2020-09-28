import React, { Component } from "react";
import "./style.css";
import "./blog-post/blog-post.css";

class PageHeader extends Component {
    render() {
      return (
        <div class="coverPhoto"> 
          {/*dark overlay*/}
          <div class="dark"></div>

          {/*header image*/}
          <img src={process.env.PUBLIC_URL + this.props.imgUrl} alt="blog-header"
          className = "cover_image"/>

          {/*text*/}
          <div class="title">
              <h1>{this.props.title}</h1>
          </div>
        </div>
      );
    }
  }
  export default PageHeader;
