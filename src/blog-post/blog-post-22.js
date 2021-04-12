import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost22 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #22" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              4 Ways Technology is Changing how we make Art
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>September 13, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Technology is not all about maths and science. Technology can also
              be artistic, paving the way for new and exciting expressions of
              visual creativity. In doing so, artists, engineers and programmers
              may work together to bring fascinating creations to life. Here, we
              discuss four of the many ways in which technology may be fused
              with artistic creativity.
            </p>
            <br />

            <ol className={styles.list}>
              <li className={styles.question}>Tech-Infused Fashion</li>
              <br />

              <p className={styles.postContent}>
                Fashion is one of the broadest and immediate forms of
                self-expression, showcasing personality, individuality and
                culture. Technology has fused with this powerful tool in recent
                times, resulting in something even more expressive and
                extravagant for both wearers and creators. Such fashion may
                light up, change colour, produce sound, be interactive,
                transform, and much more!
              </p>
              <br />

              <p className={styles.postContent}>
                <a href="http://www.makefashion.ca/">MakeFashion</a>&nbsp; is an
                initiative launched in 2012, fusing fashion and technology on
                the runway. The MakeFashion community has produced over 100
                outfits showcased at over 70 international events. New designs
                are launched every year at runway events in Calgary, Canada,
                such as Gamergirls, a pair of dresses that act as the screen of
                a playable arcade-style video game. Some outfits also fuse
                technology with tradition, such as Hagoromo, featuring an
                illuminated kimono that reacts to a hand-held fan motion sensor.
              </p>

              <div className={styles.outerBox}>
                <div className={styles.innerBox}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-22-fashion-1.jpg"
                    }
                    alt="gamer girls"
                  />
                  <br />
                  <a href="http://www.makefashion.ca/projects/gamer-girls/">
                    http://www.makefashion.ca/projects/gamer-girls/
                  </a>
                </div>

                <div className={styles.innerBox}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-22-fashion-2.jpg"
                    }
                    alt="Erina Kashihara"
                  />
                  <br />
                  <a href="http://www.makefashion.ca/projects/erina-kashihara/">
                    http://www.makefashion.ca/projects/erina-kashihara/
                  </a>
                </div>
              </div>

              <br />
              <li className={styles.question}>Light Sculptures</li>
              <br />

              <p className={styles.postContent}>
                Sculpting is an extremely popular artistic medium that can be
                found across the world and throughout the centuries. These days,
                light sculptures have become especially popular, giving rise to
                sculpture walks and events. Lights enhance sculptures by adding
                an element of brilliance to a typical artwork, allowing them to
                be seen by a broader audience.
              </p>
              <br />

              <p className={styles.postContent}>
                <a href="https://www.vividsydney.com/">Vivid</a>&nbsp; is
                arguably the most well-known light festival in Sydney,
                showcasing dozens of installations and projections every year.
              </p>
              <br />

              <p className={styles.postContent}>
                <a href="https://www.unswilluminate.com/">UNSW llluminate</a>
                &nbsp; has created works for Vivid, such as Celestial Pancake in
                2019, a hanging audio-visual installment set to alternating
                colour palettes with an enveloping soundscape. The year prior,
                UNSW Illuminate created Synergy. This installment showcased a
                large plywood tree surrounded by ferns. As people wandered close
                to the ferns, they became illuminated and sent a pulsing light
                to the tree through its roots.
              </p>

              <div className={styles.outerBox}>
                <div className={styles.innerBox}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-22-fashion-3.jpg"
                    }
                    alt="Celestial Pancake"
                  />
                  <a className={styles.sourceLink} href="https://www.vividsydney.com/event/light/celestial-pancake">
                    https://www.vividsydney.com/event/light/celestial-pancake
                  </a>
                </div>

                <div className={styles.innerBox}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-22-fashion-4.jpg"
                    }
                    alt="Synergy"
                  />
                  <a className={styles.sourceLink} href="https://www.vividsydney.com/event/light/synergy">
                    https://www.vividsydney.com/event/light/synergy
                  </a>
                </div>
              </div>

              <br />
              <li className={styles.question}>Laser-Cutting</li>
              <br />

              <p className={styles.postContent}>
                Art may incorporate exceptionally fine designs, which require
                precise carving or cutting. Laser-cutters are highly versatile
                pieces of technology that can assist with the creation of such
                artworks. As a result, artists can bring their designs to life
                quickly and effortlessly. Eric Standley, an artist from
                Virginia, USA, creates artworks from laser-cut paper. His work
                is multilayered, inspired by Gothic and Islamic architectural
                elements.
              </p>

              <div className={styles.outerBox}>
                <div className={styles.innerBox}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-22-fashion-5.jpg"
                    }
                    alt="Either/Or Newmarch"
                  />
                  <a className={styles.sourceLink} href="http://www.eric-standley.com/#/eitheror-newmarch/">
                    http://www.eric-standley.com/#/eitheror-newmarch/
                  </a>
                </div>
                
                <div className={styles.innerBox}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/blog-attachments/blog-22-fashion-6.jpg"
                    }
                    alt="Either/Or Newmarch"
                  />
                  <a className={styles.sourceLink} href="http://www.eric-standley.com/#/eitheror-newmarch/">
                    http://www.eric-standley.com/#/eitheror-newmarch/
                  </a>
                </div>                 
              </div>            
              <br />
              

              <p className={styles.postContent}>
                Laser-cutters may also be used to create artwork out of wood.
                Oakland-based artist Gabriel Schama uses such a technique to
                create faces, patterns and religious icons out of laser-cut wood
                layers.
              </p>

              <div className={styles.pic}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/blog-attachments/blog-22-fashion-7.jpg"
                  }
                  alt="Either/Or Newmarch"
                />
                <a className={styles.sourceLink} href="https://www.gabrielschama.com/2016lasercuts/2015/8/16/3ypxfq4rz6nd2mge4h27o2ohkpx480">
                  https://www.gabrielschama.com/2016lasercuts/2015/8/16/3ypxfq4rz6nd2mge4h27o2ohkpx480
                </a>               
              </div>
              <br />

              <li className={styles.question}>Code-Generated Art</li>
              <br />

              <p className={styles.postContent}>
                Art is often structured, geometric or otherwise mathematical in
                some form. As a result, a large variety of artworks may be
                generated from code. This technique takes some of the control
                away from the artist and gives it to a computer. As a result,
                artworks may feature a unique flair, one that may surprise both
                the audience and creators.
              </p>
              <br />

              <p className={styles.postContent}>
                Norwegian artist Espen Kluge created a program that produces
                vector-based images from photographs. The code selects pixels at
                semi-random, then draws lines in between them. The results are
                delightfully severely geometric and fragmented, bearing almost
                no resemblance to the original photograph.
              </p>

              <div className={styles.pic}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/blog-attachments/blog-22-fashion-8.jpg"
                  }
                  alt="Portraiture of Espen Kluge"
                />  
                <a className={styles.sourceLink} href="https://www.artnome.com/news/2019/7/24/generative-portraiture-of-espen-kluge">
                  https://www.artnome.com/news/2019/7/24/generative-portraiture-of-espen-kluge
                </a>                
              </div>
                      
            </ol>
            <br />
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "victoria-ruming": [
              "/potraits/blog-authors/victoria.jpg",
              styles.authorProfile,
              "Victoria Ruming",
              "Education team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost22;
