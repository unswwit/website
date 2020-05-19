//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./home.css";
import "./fullBlogPost.css";
import "./blogPosts.css";

class FullBlogPosts extends Component {
    render() {
      return (
          <div>
              {/*Start of Header*/}
              <div class="coverPhoto">
                  <div class="title">
                      <h1>Blog Posts #Number</h1>
                  </div>
              </div>

              {/*End of Header*/}


              {/*Start of blog post*/}
              <div>
                  <h1 class = "blogTitle">Blog Posts Title</h1>
              </div>

              <div class="post">
      						<p>
                  Lorem ipsum dolor sit amet, etiam dignissim disputando mei et,
                  et modus voluptaria temporibus ius. Ad sed libris integre nonumes.
                  Id qui odio constituam, est dicam vocibus in. Latine legimus molestiae
                  ius eu. Qui ex perpetua pericula partiendo, at inani accusamus has,
                  placerat senserit mel ne.
                  Nec cibo modus reprehendunt no, duo id option eripuit. Eos no fugit constituto
                  suscipiantur, quo audiam detracto maiestatis an. Sea tractatos efficiantur ut,
                  no sit regione expetendis, tale doming no usu. Vim et clita detracto elaboraret.
                  Sea summo corpora scribentur ad. Ne quando constituto sit. Te ius putant aeterno,
                  vel an lorem diceret invenire. An dolore scribentur pro, an est mazim propriae interesset,
                  usu unum partiendo assentior eu.
                  Pro utroque pericula ei, est id debet aliquip intellegam. Nibh splendide no eum,
                  cibo deserunt incorrupte ei per, in ius cibo postulant eloquentiam. Vim at cibo tractatos
                  periculis. Latine viderer suscipit no nec, his id utroque reprimique.
                  Has te efficiantur theophrastus, causae suavitate eloquentiam te usu, porro definitiones te duo.
                  Vis at aperiri diceret ullamcorper, labore debitis eam ad. Eos ridens quidam at,
                  sed ei blandit eloquentiam, est ad quot invenire. Ut mea nobis commodo deserunt,
                  eius erroribus ea ius. No eos enim modus.
                    </p>
      				</div>

              {/*for the blog post author*/}
              <div class = "author">
                <div class = "authorLeft">
                  <div> {/*note this div is necessary to formatting*/}
                      <img
                      src={process.env.PUBLIC_URL + "/potraits/kelly.png"}
                      className="profile_img"
                      alt="kelly-liang"
                      resizeMode="contain"
                      />
                  </div>
                </div>
                <div class = "authorRight">
                  <h3> Blog Post Author </h3>
                  <h3 class = "position"> WIT Position if applicable </h3>
                  <p> Date Published </p>
                </div>
              </div>
              {/*End of blog posts*/}
          </div>
      );
    }
  }
  export default FullBlogPosts;
