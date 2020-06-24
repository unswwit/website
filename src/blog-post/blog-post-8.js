import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";

class blogPost8 extends Component {
    render() {
      return (
            <div>
              {/*Start of Header*/}
              <div class="coverPhoto">
                  <div class="title">
                      <h1>Blog Post #8</h1>
                  </div>
              </div>

              {/*End of Header*/}

              {/*Start of blog post*/}
              <div class="blog-content">
                <div>
                  <h2 class = "blog-title">Introducing: Fontaine Foxworth, Product Manager of Google</h2>
                  <p class = "date"> 17th June 2020 </p>
                </div>

                <div class="post">

                  <p class="post-content">Despite studying Civil Engineering at Stanford University, Fontaine Foxworth discovered her true passions
                  within computer-science and technology, and is now a Mobile Product manager. She is experienced at facilitating projects across
                  all stages of development, previously working as a Product Manager at ModCloth (an online clothing retailer) where she governed
                  the design and production of the company’s mobile web and apps. Foxworth is currently a product-manager at Google, where she
                  worked on Google Analytics, Maps API, and Blogger.</p><br/>

                  <p>Let’s read what Fontaine had to say about her journey into tech below</p>

                  <ol class="list">
                    <li class="question"> What sparked your interest to join the field of STEM?</li>
                    <p class="post-content">I love the fact that technology is a skill that can be applied to almost any field. I like finding problems
                    I care about and using my skills in technology to help make the world a better place.</p><br/>

                    <li class="question"> Please provide a short summary of your career journey so far:</li>
                    <p class="post-content">Since I studied Civil Engineering, I actually started off on a Construction site where I was the only woman!
                    Since then, I've been working in Product Management, building lots of products in various fields, including fashion, data/analytics,
                    mapping, and now blogging.</p><br/>

                    <li class="question">Where do you see yourself in the future (career wise)?</li>
                    <p class="post-content">My big passion in life is teaching people about EMOTIONS! I think I have a unique skill set in that I have
                    both deep technical understanding and an infinite passion for emotions. I want to bring those two together, and ultimately help people
                    better understand themselves. Combining my love for emotions and technology could go in a million directions, but I'm hoping my next
                    role can either be around Mental Health or Ethics & Technology.</p><br/>

                    <li class="question"> What do you love about your career now?</li>
                    <p class="post-content">As a product manager for a blogging platform, I love that I help people express themselves. I care deeply about
                    self-discovery and expression, and blogging is a great way for people to better understand themselves.</p><br/>

                    <li class="question"> Favourite Quote or Motto?</li>
                    <p class="post-content">After my mom got cancer, my family's theme song became "I Hope You Dance", by Lee Ann Womack. It's a reminder to
                    get up and take advantage of life, rather than watching it pass by.</p><br/>
                  </ol>

                </div>
            </div>
              {/*for the blog post author*/}
              <div class = "author">
                <div class = "author-left">
                  <div> {/*note this div is necessary to formatting*/}
                    <img
                    src={process.env.PUBLIC_URL + "/potraits/victoria.jpg"}
                    className="profile_img vivw_img"
                    alt="victoria-ruming"
                    resizeMode="contain"
                    />
                  </div>
                </div>
                <div class = "author-right">
                  <div class="title author-name">Victoria Ruming</div>
                  <div class = "position"> Education Team </div>
                </div>
              </div>
              {/*End of blog posts*/}
            </div>
      );
    }
  }
  export default blogPost8;
