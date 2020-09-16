import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost4 extends Component {
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
        title="Blog Post #4"
      />

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class = "blog-title">Introducing: Syin Li Tan, Consultant at Deloitte</h2>
            <p class = "date"> 10th June 2020 </p>
          </div>

          <div class="post">
              <p class="post-content">Syin Li Tan has all the hallmarks of a promising career at Deloitte Consulting in Australia. Upon graduating with a master’s degree in Information Systems from Monash University in 2017, she became a graduate in Deloitte Melbourne's Enterprise Applications (SAP) practice. Just 18 months later, Syin advanced to an SAP Consultant role, specializing in implementing SAP S/4HANA Project Systems. </p><br/>
              <p class="post-content">Most young professionals don’t land their dream job right out of university. But before Deloitte welcomed Syin to their team, she had completed four internships for tech companies, earned awards for academic excellence, and volunteered as a photographer and musician. </p><br/>
              <p class="post-content">Let’s read what Syin had to say about her journey into tech below. </p>

              <p class="question">  What sparked your interest to join the field of STEM? </p>
              <p class="post-content">Modern. Evergreen. Fast-paced. Constantly moving. That’s what drew me to the field of Technology!</p>
              <br/>

              <p class="question">Please provide a short summary of your career journey so far:</p>
              <p class="post-content"> After completing my degree, I started at Deloitte as a Graduate in Deloitte’s Graduate Program where I was equipped with foundational consulting skills and started building my knowledge in SAP. I am now an SAP Consultant, building a speciality in SAP project systems within Deloitte’s SAP Practice in Melbourne.</p>
              <br/>

              <p class="question">Where do you see yourself in the future (career wise)?</p>
              <p class = "post-content">In the future, I hope to be seen as the “go-to person” for SAP Project Systems and other modules in finance and procurement. I also aspire to be a great manager of people and teams.</p>
              <br/>

              <p class = "question">What do you love about your career now?</p>
              <p class = "post-content">I love that I work with individuals who uphold integrity in their lives and work, and individuals who have ambition to constantly improve and achieve excellence.</p>
              <br/>

              <p class = "question">Favourite Quote or Motto?</p>
              <p class = "post-content">“Whatever you do, work at it with all your heart.</p>
              <br/>
          </div>
      </div>

        {/*for the blog post author*/}
        <AuthorCard
        authors={{"vivian-wong":["/potraits/vivw.jpg", "profile_img vivw_img", "Vivian Wong", "Education Executive"]}}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost4;
