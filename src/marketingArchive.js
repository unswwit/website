//All necessary imports for this javascript
import React, { Component } from "react";
import "./style.css";
import "./marketingArchive.css";

import WCrushTan from "./initiatives/WCrushTan";
import WCrushMayer from "./initiatives/WCrushMayer";
import TechTrivia from "./initiatives/TechTrivia";

class MarketingArchive extends Component {
  render() {
    return (
        <div>

            {/*Start of Header*/}
            <div class="marketingCoverPhoto">
                <div class="title">
                    <h1>Marketing Archive</h1>
                </div>
            </div>
            {/*End of Header*/}

            <div id="parent">
            {/*Left intiatives side bar*/}
              <div id="side">
                <div class="sideBar">

                  {/*List of 2020 intatives*/}
                  <div id="initiatives">
                    <button class="init year active" onclick="filterSelection('2020')">2020</button>
                    <button class="init" onclick="filterSelection('crush')">WIT Crush Wednesday</button>
                    <br></br>
                    <button class="init" onclick="filterSelection('init2')">Initiative 2</button>
                    <br></br>
                    <button class="init" onclick="filterSelection('init3')">Initiative 3</button>
                  </div>
                </div>
              </div>

              <div id="grid">
                {/*Image collage*/}
                <div class="gallery">
                  <div class="row">
                      <div class="image crush"><WCrushTan/></div>
                      <div class="image trivia"><TechTrivia/></div>
                  </div>
                  <div class="row">
                      <div class="image trivia"><TechTrivia/></div>
                      <div class="image crush"><WCrushMayer/></div>
                  </div>
                  <div class="row">
                      <div class="image crush"><WCrushTan/></div>
                      <div class="image trivia"><TechTrivia/></div>
                  </div>
                  <div class="row">
                      <div class="image trivia"><TechTrivia/></div>
                      <div class="image crush"><WCrushMayer/></div>
                  </div>
                </div>
              </div>
            </div>



        </div>
    );
  }
}
export default MarketingArchive;
