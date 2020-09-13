import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";

class blogPost22 extends Component {
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
            <h1>Blog Post #22</h1>
          </div>
        </div>

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class="blog-title">
              4 Ways Technology is Changing how we make Art
            </h2>
            <p class="date">13th September 2020</p>
          </div>

          <div class="post">
            <p class="post-content">
              Technology is not all about maths and science. Technology can also be artistic, paving the way for new and exciting expressions of visual creativity. In doing so, artists, engineers and programmers may work together to bring fascinating creations to life. Here, we discuss four of the many ways in which technology may be fused with artistic creativity.
            </p>
            <br />

            <ol class="list">
              <li class="question">Tech-Infused Fashion</li>
              <br />

              <p class="post-content">
                Fashion is one of the broadest and immediate forms of self-expression, showcasing personality, individuality and culture. Technology has fused with this powerful tool in recent times, resulting in something even more expressive and extravagant for both wearers and creators. Such fashion may light up, change colour, produce sound, be interactive, transform, and much more!
              </p><br />

              <p class="post-content">
                MakeFashion is an initiative launched in 2012, fusing fashion and technology on the runway. The MakeFashion community has produced over 100 outfits showcased at over 70 international events. New designs are launched every year at runway events in Calgary, Canada, such as Gamergirls, a pair of dresses that act as the screen of a playable arcade-style video game. Some outfits also fuse technology with tradition, such as Hagoromo, featuring an illuminated kimono that reacts to a hand-held fan motion sensor.
              </p><br />
            </ol>

            <img 
            src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-1.jpg"}
            alt="makeFashion-1"
            resizeMode="contain"
            />

            <img 
            src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-2.jpg"}
            alt="makeFashion-2"
            resizeMode="contain"
            />


            
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "vivian-wong": [
              "/potraits/vivw.jpg",
              "profile_img vivw_img",
              "Vivian Wong",
              "Education Executive"
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost22;
