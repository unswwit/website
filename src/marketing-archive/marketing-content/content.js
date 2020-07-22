//All necessary imports for this javascript
import React, { Component } from "react";
import ".././marketingArchive.css";
import "./content.css";
import "../.././style.css";

import WCW from "./wcw"
import Memes from "./memes"
import MondayMotivation from "./monday-motivation"

class MarketingContent extends Component {
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
                    <input type="radio" id="memes" name="categories"></input>
                    <label for="memes" id="side">Memes</label>
                    <input type="radio" id="mondaymot" name="categories"></input>
                    <label for="mondaymot" id="side">Monday Motivation</label>

                    {/*Image collage*/}
                    <ol class="grid" id="content">
                      <MondayMotivation
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2348244162147118/"
                        imgUrl="/initiatives/monday/pass.png"
                        alt="Monday Motivation"
                        date="07/20/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2354984874806380/?type=3"
                        imgUrl="/initiatives/wcw/hannahbeder.png"
                        alt="Hannah Beder"
                        date="15/07/2020"
                      />
                      <Memes
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2351398365165031/"
                        imgUrl="/initiatives/memes/cat.png"
                        alt="Meme"
                        date="10/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2349761751995359"
                        imgUrl="/initiatives/wcw/maddiemackey.png"
                        alt="Maddie Mackey"
                        date="08/07/2020"
                      />
                      <MondayMotivation
                        fb="https://www.facebook.com/unsw.wit/posts/2346183109019890"
                        imgUrl="/initiatives/monday/dance.png"
                        alt="Monday Motivation"
                        date="03/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2344785135826354/"
                        imgUrl="/initiatives/wcw/lanaking.jpg"
                        alt="Lana King"
                        date="01/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2328983924073142/"
                        imgUrl="/initiatives/wcw/syinlitan.jpg"
                        alt="Syin Li Tan"
                        date="10/06/2020"
                      />
                      <MondayMotivation
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2348244162147118/"
                        imgUrl="/initiatives/monday/walking.png"
                        alt="Monday Motivation"
                        date="07/06/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2323194404652094"
                        imgUrl="/initiatives/wcw/marissamayer.png"
                        alt="Marissa Mayer"
                        date="03/06/2020"
                      />
                    </ol>
                  </div>
            </div>
        </div>
    );
  }
}
export default MarketingContent;
