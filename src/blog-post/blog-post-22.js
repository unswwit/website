import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost22 extends Component {
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
        title="Blog Post #22"
      />

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



              <li class="question">Light Sculptures</li>
              <br />

              <p class="post-content">
              Sculpting is an extremely popular artistic medium that can be found across the world and throughout the centuries. These days, light sculptures have become especially popular, giving rise to sculpture walks and events. Lights enhance sculptures by adding an element of brilliance to a typical artwork, allowing them to be seen by a broader audience.
              </p><br />

              <p class="post-content">
              Vivid is arguably the most well-known light festival in Sydney, showcasing dozens of installations and projections every year.
              </p><br />

              <p class="post-content">
              UNSW llluminate has created works for Vivid, such as Celestial Pancake in 2019, a hanging audio-visual installment set to alternating colour palettes with an enveloping soundscape. The year prior, UNSW Illuminate created Synergy. This installment showcased a large plywood tree surrounded by ferns. As people wandered close to the ferns, they became illuminated and sent a pulsing light to the tree through its roots.
              </p><br />

              <img
              src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-3.jpg"}
              alt="makeFashion-1"
              resizeMode="contain"
              />

              <img
              src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-4.jpg"}
              alt="makeFashion-2"
              resizeMode="contain"
              />


              <li class="question">Laser-Cutting</li>
              <br />

              <p class="post-content">
              Art may incorporate exceptionally fine designs, which require precise carving or cutting. Laser-cutters are highly versatile pieces of technology that can assist with the creation of such artworks. As a result, artists can bring their designs to life quickly and effortlessly. Eric Standley, an artist from Virginia, USA, creates artworks from laser-cut paper. His work is multilayered, inspired by Gothic and Islamic architectural elements.
              </p><br />

              <img
              src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-5.jpg"}
              alt="makeFashion-1"
              resizeMode="contain"
              />

              <img
              src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-6.jpg"}
              alt="makeFashion-2"
              resizeMode="contain"
              />

              <p class="post-content">
              Laser-cutters may also be used to create artwork out of wood. Oakland-based artist Gabriel Schama uses such a technique to create faces, patterns and religious icons out of laser-cut wood layers.
              </p><br />

              <img
              src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-7.jpg"}
              alt="makeFashion-1"
              resizeMode="contain"
              />



              <li class="question">Code-Generated Art</li>
              <br />

              <p class="post-content">
              Art is often structured, geometric or otherwise mathematical in some form. As a result, a large variety of artworks may be generated from code. This technique takes some of the control away from the artist and gives it to a computer. As a result, artworks may feature a unique flair, one that may surprise both the audience and creators.
              </p><br />


              <p class="post-content">
              Norwegian artist Espen Kluge created a program that produces vector-based images from photographs. The code selects pixels at semi-random, then draws lines in between them. The results are delightfully severely geometric and fragmented, bearing almost no resemblance to the original photograph.
              </p><br />

              <img
              src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-8.jpg"}
              alt="makeFashion-2"
              resizeMode="contain"
              />


            </ol>

            <img
            src={process.env.PUBLIC_URL + "/blog-attachments/blog-22-fashion-1.jpg"}
            alt="makeFashion-1"
            resizeMode="contain"
            />



            <br /> <p class="post-content">
            How would you describe technology? Innovative? Practical? Nerdy? How about artistic? WIT’s upcoming blog post explores the relationship between art and technology, in which the combination of aesthetics and engineering can create spectacular creative works.
            </p><br />

            <p class="post-content">
            Through this blog post, we hope to enlighten you with the unlikely relationship between engineers and artists, and help you unlock your own inner artist. Find the link below, and start creating!
            </p><br />



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
