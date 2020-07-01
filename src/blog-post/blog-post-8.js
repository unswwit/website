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
                  <h2 class = "blog-title">WIT Crush Wednesday - Dr Marguerite Evans-Galea</h2>
                  <p class = "date"> 24th June 2020 </p>
                </div>

                <div class="post">

                  <p class="post-content">Dr. Marguerite Evans-Galea is one of Australia’s leading
                  scientists, respected and known internationally for her research in cell and
                  gene therapies.</p><br/>

                  <p class="post-content">In a 2017 radio interview published by ABC Sunday Extra in 2017, Marguerite
                  reflected on her path into STEM and the challenges women faced entering these
                  professions. But STEM was not her first choice. Initially, Marguerite was drawn
                  to classical music and dreamed of becoming a music therapist. Whilst reading the
                  discovery of the structure of DNA by James Watson, Marguerite fell in love with DNA
                   in high school. She expressed that “I loved the idea of solving something at the
                   molecular level”, and was immediately drawn to the complexities and excited by
                   the challenges in science.</p><br/>


                  <p class="post-content">Graduating with a Ph.D. in Molecular Biology from UNSW, Marguerite was
                  enthusiastic to start her career in the US as a postdoctoral fellow at the University of Utah.
                  Here, she really began to understand the premise of a male-dominant culture in STEM. As a
                  leading advocate for women in technology, Margarite does not believe there is any lack of
                  interest, passion, or ambition for girls and women to enter the STEM field. However, she
                  outlines that the field has not been the most accommodating to women, especially for those
                  who want families. She finds that the rolling contracts and competitive atmosphere in STEM
                  are unforgiving for women who take career breaks to have a child, posing as a significant barrier
                  for women interested in STEM. Nonetheless, she managed to successfully build a family whilst
                  growing her career! </p><br/>


                  <p class="post-content">After her postdoctoral work, Margarite began working at St Jude Children's
                  Research Hospital in Memphis, Tennessee to pursue her passion for helping people, by developing
                  current research to cure patients. Here, she published her first academic article in the Science
                  publication, “Molecular Therapy.” A few years later, she joined the clinical team at the Bruce Lefroy
                  Centre for Genetic Health Research at the Murdoch Children's Research Institute in Australia,
                  where she works to this day and has published 15 more scholarly works. She helped develop cell
                  and gene therapies for Friedreich’s Ataxia, a neurodegenerative disease that affects children.
                  The goal of her research is to understand disease mechanisms and develop safe, effective therapies
                  for Friedreich ataxia that readily translate to the clinic. As a result, therapies services will be
                  more accessible to patients from different backgrounds who are diagnosed with Friedreich’s Ataxia
                  backgrounds.</p><br/>


                  <p class="post-content">As Marguerite’s career has blossomed, she has devoted herself to
                  inspiring more women and students into STEM. In 2017, she became the Executive Director for the
                  Industry Mentoring Network for STEM. ” She serves on the steering committee of the Science in
                  Australia Gender Equity Forum and is the co-founder of Women in Science, Australia. Reflecting on
                  her work, she expresses that “I work with a lot of young people in research and sometimes you have
                  to say to them “don’t worry, be happy!” Try not to worry about the future. Just embrace it and go for it."
                  Having received numerous awards for her research and leadership, Marguerite says all of it was possible
                  due to her “sheer and utter determination.” Marguerite’s success is living, breathing, proof that
                  there is a place for women in STEM, in research, in the hard sciences. She admits that it is a
                  difficult path, yet the obstacles look surmountable, and the rewards large because of women like
                  Marguerite.</p><br/>


                </div>
            </div>
              {/*for the blog post author*/}
              <div class = "author">
              <div class = "author-left">
                <div> {/*note this div is necessary to formatting*/}
                  <img
                  src={process.env.PUBLIC_URL + "/potraits/vivw.jpg"}
                  className="profile_img vivw_img"
                  alt="vivian-wong"
                  resizeMode="contain"
                  />
                </div>
              </div>
            <div class = "author-right">
              <div class="title author-name">Vivian Wong</div>
              <div class = "position"> Education Executive</div>
            </div>
            </div>

              {/*End of blog posts*/}
            </div>
      );
    }
  }
  export default blogPost8;
