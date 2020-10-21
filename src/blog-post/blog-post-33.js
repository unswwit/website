import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost33 extends Component {
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
          title="Blog Post #32"
        />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class="blog-title">
              Familiarising Fintech
            </h2>
            <p class="date">21st October 2020</p>
          </div>

          <div class="post">
            <p class="question">
              What sparked your interest to study a STEM degree?  
            </p> 
            <p class="post-content">
              <strong>Amanda</strong>: I always knew I wanted to have a job that had both a creative and analytical/logical side and studying software was the perfect combination of the two, being able to design and implement products. Technology also interested me because it’s a field where you have to constantly learn and adapt as the fast-paced industry evolves, meaning you’ll never be bored. I also chose engineering, particularly biomedical, to accompany software because I knew I wanted a career which creates a positive impact on the world, and helps others enjoy a better standard of living. 
            </p><br />

            <p class="question">
              Where do you see yourself in the future?
            </p> 
            <p class="post-content">
              <strong>Elizabeth</strong>: In the near future (5 years or so) I still see myself working in a software engineering role hopefully doing something that is still challenging and something I can learn from. I don’t particularly foresee being in a managerial position however I do see myself mentoring others who are just starting their STEM careers because I am passionate about inspiring others to pursue their interests and also encouraging others to see what is beyond just the traditional software engineering role. I also have many aspirations outside my career such as travelling so I hope that I can also achieve those goals as well!
            </p><br />

            <p class="question">
              What is your favourite aspect of being part of WIT Exec Team 2020
            </p> 
            <p class="post-content">
              <strong>Vivian Wong</strong>: I loved how I could get involved in other portfolios, and I was part of the organising committee for Flagship events such as the WIT Hackathon, WIT Industry mentoring program and Case Crack. WIT gave me the opportunity to write the mark scheme and be the moderator for the Hackathon, be the MC of events and attend meetings with sponsors, as well as other societies. This really allowed me to develop myself personally and professionally, and I was able to apply the skills that I learned from the WIT experience into other societies and work. WIT has opened up a world of opportunities for me, allowing me to meet people from diverse backgrounds who are ambitious and passionate about the same thing as I am.
            </p><br />

            <p class="question">
              Who are your personal inspirations and heroes?
            </p> 
            <p class="post-content">
              <strong>Kelly</strong>: From a young age, I was always awed by my mother’s perseverance and diligence. As a first generation immigrant, she is the founder of her very own computer hardware startup, Dotsmart. Thinking back, I witnessed years of her managing her company, learning new and challenging skills that was critical in striving for a better future. Thus, I am also trying to take a page out of her book: “if you work hard on something, someday you will be an expert at it.”
            </p><br />

            <p class="question">
              What is a piece of advice that you would give to your younger self?
            </p> 
            <p class="post-content">
              <strong>Gabby</strong>: Something that my younger self and current self constantly needs reminding is the importance of prioritising tasks and commitments, and to never forget to prioritise your mental and physical health first. As an intrinsically competitive person, it's so important to remind yourself that we can only forge our own futures by competing with the expectations that we hold to ourselves, not others - so avoid spiralling down the rabbit hole of LinkedIn, you are on your way to where you should be.
            </p><br />

            <p class="question">
              What was the greatest challenge you faced? How did you overcome this challenge?
            </p> 
            <p class="post-content">
              <strong>Rhea</strong>: Sometimes, our biggest battles are not with the outside world but within ourselves. As I slowly transition into the workforce,  I cannot help but experience the “Imposter Syndrome”. With all this talent Among Us, I irrationally fear that others will suspect me as an Imposter. 
            </p>
            <p class="post-content">
              However, I’m not alone. The only way to overcome feeling like a fraud is to recognise that you are not one. Don’t devalue your worth and undermine your experience - if you focus on your strengths, destiny will take you where you are most needed. 
            </p><br />

            <p class="question">
              What’s a motto or quote you live by?
            </p> 
            <p class="post-content">
              <strong>Vivian Shen</strong>: Be the change you seek. 
            </p>
            <p class="post-content">
              This is something I live by and I feel so strongly about. It really helps me stay focused, driven and create something that will add value and be a positive influence on people’s lives.There’s always something you can improve that might not be apparent to others. and in times like this it’s extremely important to take the first step towards change. 
            </p><br />
          
            <p class="question">
              How do you stay inspired and creative? What drives you to succeed?
            </p> 
            <p class="post-content">
              <strong>Felicia</strong>: One of the best ways to stay inspired is to surround yourself with inspiring people! Any time I’ve got a creative block, I ask for advice and feedback to get a fresh perspective. In the same vein, working with others is the biggest driver for me - knowing that I have expectations to meet and succeed, and a team to support and push each other.
            </p><br />     

            <p class="question">
              How has technology influenced you in becoming who you are today?
            </p> 
            <p class="post-content">
              <strong>Elicia</strong>: Technology lies at the forefront of almost everything I do. Its influence lies in its power to connect people, information, and stories across the globe. From reading books and listening to music to sharing photos with friends and family, it all feels like an extension of myself as I share my passions and interests with others. And through my degrees in Computer Science combined with Commerce, I aspire to make the most of technology to create a positive impact wherever I am.
            </p><br />    

            <p class="question">
              What are some of the major changes happening to you and do you have any tips in adapting to change?
            </p> 
            <p class="post-content">
              <strong>Alison</strong>: Going into the final year of university, is a pretty daunting change with the realisation that one chapter is closing and the real adult chapter begins from here. Change is inevitable and at every milestone we achieve there’s an uncertainty about the future and nostalgia of passed time. Through my roles within societies, my degree and work the lesson has been that change brings opportunities and unpredictability. If we do not take the chance to embrace the unknown, we will never know if we will succeed or not. Adapting to uncertainty is key in understanding ourselves in future.
            </p><br />   
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard authors={{
            "vivian-wong": [
              "/potraits/vivw.jpg",
              "profile_img vivw_img",
              "Vivian Wong",
              "Education Executive"
            ]
        }}/>
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost33;
