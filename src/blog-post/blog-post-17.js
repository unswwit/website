import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost17 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
      {/* Cover Photo */}
      <PageHeader
        imgUrl="/blog-header.png"
        title="Blog Post #17"
      />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class = "blog-title">Introducing: Natasha Jones, SAP Consultant at Deloitte</h2>
            <p class = "date">29th July 2020</p>
          </div>

          <div class="post">
          <p class="post-content">
          Natasha Jones’ journey began with her studies in Marketing and Business Information Systems at university. She excelled in this area and was twice awarded as a High Achiever in Database Design and Information Systems. Her professional career began as a Junior Marketing Analyst for BRITA, after which she moved into consulting continuing to make an impact with 180 Degrees Consulting, where she was awarded Most Valuable Consultant, and with her team, voted Most Collaborative. With this amazing success, she moved to her current role at Deloitte. This week, we join Natasha as she reflects on her journey through STEM, and how she has continued to strive for success.
          </p><br/>

          <p class="question">What sparked your interest to join the field of STEM?</p>
          <p class="post-content">
          I’ve always felt naturally geared towards STEM. I’ve explored STEM and non-STEM subjects in high school, and whilst I enjoy both areas, I was most curious and interested in Technology. My passion in STEM grew from here and I went on to study a Bachelor’s degree in Information Systems at University.
          </p><br/>

          <p class="question">Please provide a short summary of your career journey so far:</p>
          <p class="post-content">
          After completing my Bachelor’s, I worked in different areas including Operation-driven analytics and Social Media. Then, I joined Deloitte as a Graduate in the SAP Consulting practise almost three years ago. During my time with Deloitte, I have specialised in the design and delivery of modern financial consolidation, budgeting and planning solutions across resource, public, and consumer product industries!
          </p><br/>

          <p class="question">Where do you see yourself in the future (career wise)?</p>
          <p class="post-content">
          I see myself leading valuable technology-driven transformation programs to help businesses maximise company-wide success.
          </p><br/>

          <p class="question"> What do you love about your career now?</p>
          <p class="post-content">
          I enjoy consulting, designing and delivering transformative solutions that help businesses improve their internal processes and efficiencies. I also love the amount of exposure I get in working with clients  across different industries.
          </p><br/>

          <p class="question"> Favourite Quote or Motto?</p>
          <p class="post-content">When you want to succeed as bad as you want to breathe, then you will be successful</p>
          <p class="post-content">- E. Thomas</p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
        authors={{"georgie-mansfield":["/potraits/georgie.jpg", "profile_img vivw_img", "Georgie Mansfield","Education Team"]}}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost17;
