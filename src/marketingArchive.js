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
                  {/*2020 title*/}
                  <div class="yearSection">
                    <p class="year">2020</p>
                  </div>

                  {/*List of 2020 intatives*/}
                  <div class="initiatives">
                    <p class="init">WIT Crush Wednesday</p>
                    <br></br>
                    <p class="init">Initiative 2</p>
                    <br></br>
                    <p class="init">Initiative 3</p>
                  </div>
                </div>
              </div>

              <div id="grid">
                {/*Image collage*/}
                <div class="gallery">
                  <div class="row">
                      <WCrushTan/>
                      <TechTrivia/>
                  </div>
                  <div class="row">
                      <TechTrivia/>
                      <WCrushMayer/>
                  </div>
                  <div class="row">
                      <WCrushTan/>
                      <TechTrivia/>
                  </div>
                  <div class="row">
                      <TechTrivia/>
                      <WCrushMayer/>
                  </div>
                </div>
              </div>
            </div>



        </div>
    );
  }
}
export default MarketingArchive;
