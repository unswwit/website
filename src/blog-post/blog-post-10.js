import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";

class blogPost10 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div>
        {/*Start of Header*/}
        <div class="coverPhoto">
            <div class="title">
                <h1>Blog Post #10</h1>
            </div>
        </div>

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class = "blog-title">Introducing: Lana King, Senior Consultant of Deloitte</h2>
            <p class = "date"> 1st July 2020 </p>
          </div>

          <div class="post">            
            <p class="post-content">Lana King is a Senior Consultant at Deloitte Australia, specialising in Enterprise Technology exploring how information technology resources and data are used across businesses and projects. King undertook a Bachelor of Science and Engineering at Monash University where she majored in Mechanical Engineering, Applied Mathematics, and Astrophysics. After completing her degree, she took a Summer Internship role at Deloitte which then provided her with the opportunity to become an analyst and then consultant. </p><br/>

            <ol class="list">
              <li class="question">What sparked your interest to join the field of STEM?</li>

              <p class="post-content">Growing up I always liked finding out how something worked, being able to pull it apart and put it back together. Studying engineering was the logical step for me and I loved the problem solving that came with it.</p><br/>

              <li class="question">Please provide a short summary of your career journey so far:</li>

              <p class="post-content">I joined Deloitte after completing a Vacation Program 3 years ago in the Enterprise Technology SAP team and have been here ever since.</p><br/>

              <li class="question">Where do you see yourself in the future (career wise)? </li>

              <p class="post-content">I would like to continue growing my career with Deloitte, learning as much as I can and taking every opportunity that comes my way.</p><br/>
              
              <li class="question">What do you love about your career now?</li>
              
              <p class="post-content">I love that I get to work with such a diverse group of people with different backgrounds, skill sets, and time-zones on different exciting projects. It gives me the opportunity to build relationships with people I never would have met otherwise.</p><br/>
                        
              <li class="question">Favourite Quote or Motto?</li>
              
              <p class="post-content">Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind <br/>– Dr. Seuss</p><br/>
            </ol>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
        authors={{"victoria-ruming":["/potraits/victoria.jpg", "profile_img vivw_img", "Victoria Ruming","Education team"]}}
        />        
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost10;
