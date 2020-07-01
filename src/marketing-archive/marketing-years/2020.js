//All necessary imports for this javascript
import React, { Component } from "react";
import ".././marketingArchive.css";
import "./year.css";
import "../.././style.css";

import WCrushTan from ".././initiatives/WCrushTan";
import WCrushMayer from ".././initiatives/WCrushMayer";
import TechTrivia from ".././initiatives/TechTrivia";

class twentyTwenty extends Component {
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
                  {/*List of 2020 intatives*/}
                  <div class="initiatives">
                    <input type="radio" id="2020" name="categories" ></input>
                    <label for="2020" id="side">2020</label>
                    <input type="radio" id="crush" name="categories"></input>
                    <label for="crush" id="side">WIT Crush Wednesday</label>
                    <input type="radio" id="init2" name="categories"></input>
                    <label for="init2" id="side">Intiative 2</label>
                    <input type="radio" id="init3" name="categories"></input>
                    <label for="init3" id="side">Initiative 3</label>

                    {/*Image collage*/}
                    <ol class="grid" id="content">
                      <li class="image crush"><WCrushTan/></li>
                      <li class="image trivia"><TechTrivia/></li>
                      <li class="image trivia"><TechTrivia/></li>
                      <li class="image crush"><WCrushMayer/></li>
                      <li class="image crush"><WCrushTan/></li>
                      <li class="image trivia"><TechTrivia/></li>
                    </ol>
                  </div>
            </div>
        </div>
    );
  }
}
export default twentyTwenty;
