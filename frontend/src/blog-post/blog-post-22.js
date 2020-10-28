import React, { Component } from 'react';
import '.././style.css';
import './blog-post.css';
import AuthorCard from './authorCard';
import PageHeader from '.././header';

class blogPost22 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/blog-header.png" title="Blog Post #22" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class="blog-title">4 Ways Technology is Changing how we make Art</h2>
            <p class="date">13th September 2020</p>
          </div>

          <div class="post">
            <p class="post-content">
							Technology is not all about maths and science. Technology can also be artistic, paving the
							way for new and exciting expressions of visual creativity. In doing so, artists, engineers
							and programmers may work together to bring fascinating creations to life. Here, we discuss
							four of the many ways in which technology may be fused with artistic creativity.
            </p>
            <br />

            <ol class="list">
              <li class="question">Tech-Infused Fashion</li>
              <br />

              <p class="post-content">
								Fashion is one of the broadest and immediate forms of self-expression, showcasing
								personality, individuality and culture. Technology has fused with this powerful tool in
								recent times, resulting in something even more expressive and extravagant for both
								wearers and creators. Such fashion may light up, change colour, produce sound, be
								interactive, transform, and much more!
              </p>
              <br />

              <p class="post-content">
                <a href="http://www.makefashion.ca/">MakeFashion</a>&nbsp; is an initiative launched in
								2012, fusing fashion and technology on the runway. The MakeFashion community has
								produced over 100 outfits showcased at over 70 international events. New designs are
								launched every year at runway events in Calgary, Canada, such as Gamergirls, a pair of
								dresses that act as the screen of a playable arcade-style video game. Some outfits also
								fuse technology with tradition, such as Hagoromo, featuring an illuminated kimono that
								reacts to a hand-held fan motion sensor.
              </p>

              <div class="img-box outer-box">
                <div class="inner-box">
                  <img
                    src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-1.jpg'}
                    alt="makeFashion-1"
                    resizeMode="contain"
                  />
                  <br />
                  <a href="http://www.makefashion.ca/projects/gamer-girls/">
										http://www.makefashion.ca/projects/gamer-girls/
                  </a>
                </div>

                <div class="inner-box">
                  <img
                    src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-2.jpg'}
                    alt="makeFashion-2"
                    resizeMode="contain"
                  />
                  <br />
                  <a href="http://www.makefashion.ca/projects/erina-kashihara/">
										http://www.makefashion.ca/projects/erina-kashihara/
                  </a>
                </div>
              </div>

              <br />
              <li class="question">Light Sculptures</li>
              <br />

              <p class="post-content">
								Sculpting is an extremely popular artistic medium that can be found across the world and
								throughout the centuries. These days, light sculptures have become especially popular,
								giving rise to sculpture walks and events. Lights enhance sculptures by adding an
								element of brilliance to a typical artwork, allowing them to be seen by a broader
								audience.
              </p>
              <br />

              <p class="post-content">
                <a href="https://www.vividsydney.com/">Vivid</a>&nbsp; is arguably the most well-known
								light festival in Sydney, showcasing dozens of installations and projections every year.
              </p>
              <br />

              <p class="post-content">
                <a href="https://www.unswilluminate.com/">UNSW llluminate</a>&nbsp; has created works
								for Vivid, such as Celestial Pancake in 2019, a hanging audio-visual installment set to
								alternating colour palettes with an enveloping soundscape. The year prior, UNSW
								Illuminate created Synergy. This installment showcased a large plywood tree surrounded
								by ferns. As people wandered close to the ferns, they became illuminated and sent a
								pulsing light to the tree through its roots.
              </p>

              <div class="img-box outer-box">
                <div class="inner-box">
                  <img
                    src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-3.jpg'}
                    alt="makeFashion-3"
                    resizeMode="contain"
                  />
                  <a href="https://www.vividsydney.com/event/light/celestial-pancake">
										https://www.vividsydney.com/event/light/celestial-pancake
                  </a>
                </div>

                <div class="inner-box">
                  <img
                    src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-4.jpg'}
                    alt="makeFashion-4"
                    resizeMode="contain"
                  />
                  <a href="https://www.vividsydney.com/event/light/synergy">
										https://www.vividsydney.com/event/light/synergy
                  </a>
                </div>
              </div>

              <br />
              <li class="question">Laser-Cutting</li>
              <br />

              <p class="post-content">
								Art may incorporate exceptionally fine designs, which require precise carving or
								cutting. Laser-cutters are highly versatile pieces of technology that can assist with
								the creation of such artworks. As a result, artists can bring their designs to life
								quickly and effortlessly. Eric Standley, an artist from Virginia, USA, creates artworks
								from laser-cut paper. His work is multilayered, inspired by Gothic and Islamic
								architectural elements.
              </p>

              <div class="img-box">
                <img
                  src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-5.jpg'}
                  alt="makeFashion-5"
                  resizeMode="contain"
                />

                <img
                  src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-6.jpg'}
                  alt="makeFashion-6"
                  resizeMode="contain"
                />
                <br />

                <a href="http://www.eric-standley.com/#/eitheror-newmarch/">
									http://www.eric-standley.com/#/eitheror-newmarch/
                </a>
              </div>
              <br />

              <p class="post-content">
								Laser-cutters may also be used to create artwork out of wood. Oakland-based artist
								Gabriel Schama uses such a technique to create faces, patterns and religious icons out
								of laser-cut wood layers.
              </p>

              <div class="img-box">
                <img
                  src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-7.jpg'}
                  alt="makeFashion-7"
                  resizeMode="contain"
                />
              </div>
              <br />

              <li class="question">Code-Generated Art</li>
              <br />

              <p class="post-content">
								Art is often structured, geometric or otherwise mathematical in some form. As a result,
								a large variety of artworks may be generated from code. This technique takes some of the
								control away from the artist and gives it to a computer. As a result, artworks may
								feature a unique flair, one that may surprise both the audience and creators.
              </p>
              <br />

              <p class="post-content">
								Norwegian artist Espen Kluge created a program that produces vector-based images from
								photographs. The code selects pixels at semi-random, then draws lines in between them.
								The results are delightfully severely geometric and fragmented, bearing almost no
								resemblance to the original photograph.
              </p>

              <div class="img-box">
                <img
                  src={process.env.PUBLIC_URL + '/blog-attachments/blog-22-fashion-8.jpg'}
                  alt="makeFashion-8"
                  resizeMode="contain"
                />
                <br />

                <a href="https://www.artnome.com/news/2019/7/24/generative-portraiture-of-espen-kluge">
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
            'victoria-ruming': [
              '/potraits/victoria.jpg',
              'profile_img vivw_img',
              'Victoria Ruming',
              'Education team'
            ]
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost22;
