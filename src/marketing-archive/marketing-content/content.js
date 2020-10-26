//All necessary imports for this javascript
import React, { Component } from "react";
import ".././marketingArchive.css";
import "./content.css";
import "../.././style.css";
import PageHeader from "../.././header";

import WCW from "../initiatives/wcw"
import Memes from "../initiatives/memes"
import MondayMotivation from "../initiatives/monday-motivation"
import Mascot from "../initiatives/mascot"
import CareersGuide from "../initiatives/careers-guide"
import Other from "../initiatives/other"

class MarketingContent extends Component {
  render() {
    return (
        <div>
        {/* Cover Photo */}
        <PageHeader
          imgUrl="/marketing-header.png"
          title="Marketing Archive"
        />
            {/*End of Header*/}

            <div id="parent">
            {/*Left intiatives side bar*/}
                  {/*List of 2020 intatives*/}
                  <div class="initiatives">
                    <div id="left-col">
                      <input type="radio" id="2020" name="categories" ></input>
                      <label for="2020" class="side">2020</label>
                      <input type="radio" id="crush" name="categories"></input>
                      <label for="crush" class="side">WIT Crush Wednesday</label>
                      <input type="radio" id="memes" name="categories"></input>
                      <label for="memes" class="side">Memes</label>
                      <input type="radio" id="mondaymot" name="categories"></input>
                      <label for="mondaymot" class="side">Monday Motivation</label>
                      <input type="radio" id="mascot" name="categories"></input>
                      <label for="mascot" class="side">Mascot</label>
                      <input type="radio" id="careers" name="categories"></input>
                      <label for="careers" class="side">Careers Guide</label>
                    </div>
                    
                    {/*Image collage*/}
                    <ol class="grid" id="content">
                      <Other
                        fb="https://www.facebook.com/unsw.wit/posts/2417718931866307"
                        imgUrl="/initiatives/other/twitch.png"
                        alt="Twitch"
                        date="1/10/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2417002581937942"
                        imgUrl="/initiatives/wcw/ankitasingh.png"
                        alt="Ankita Singh"
                        date="30/09/2020"
                      />
                      <Other
                        fb="https://www.facebook.com/unsw.wit/posts/2407199466251587"
                        imgUrl="/initiatives/other/talkwitus.png"
                        alt="Talk WIT us"
                        date="18/09/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2393647687606765"
                        imgUrl="/initiatives/wcw/aneitayang.png"
                        alt="Aneita Yang"
                        date="2/09/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2387231141581753/"
                        imgUrl="/initiatives/wcw/yourcrush.png"
                        alt="Who's your crush?"
                        date="26/08/2020"
                      />
                      <MondayMotivation
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2385637025074498/"
                        imgUrl="/initiatives/monday/doyourbest.jpg"
                        alt="Do your best and forget the rest!"
                        date="24/08/2020"
                      />
                      <MondayMotivation
                          fb="https://www.facebook.com/unsw.wit/posts/2378857132419154"
                          imgUrl="/initiatives/monday/selfcarereminder.png"
                          alt="Self care is important!"
                          date="17/08/2020"
                        />
                      <Memes
                        fb="https://www.facebook.com/unsw.wit/posts/2376522429319291"
                        imgUrl="/initiatives/memes/smile.png"
                        alt="Smile"
                        date="14/08/2020"
                      />
                      <Memes
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2365454317092769/?type=1&theater"
                        imgUrl="/initiatives/memes/studiers.png"
                        alt="Studiers"
                        date="31/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2365204457117755"
                        imgUrl="/initiatives/wcw/natashajones.png"
                        alt="Natasha Jones"
                        date="29/07/2020"
                      />
                      <CareersGuide
                        fb="https://www.facebook.com/watch/?v=730456174163976"
                        imgUrl="/initiatives/careers/careers2020.png"
                        alt="Careers Guide"
                        date="27/07/2020"
                      />
                      <Mascot
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2361614684143399/"
                        imgUrl="/initiatives/mascot/hoodie.jpg"
                        alt="Hoodies"
                        date="24/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2360215444283323"
                        imgUrl="/initiatives/wcw/ericajoybaker.png"
                        alt="Erica Joy Baker"
                        date="22/07/2020"
                      />
                      <MondayMotivation
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2358718497766351/"
                        imgUrl="/initiatives/monday/pass.png"
                        alt="This too shall pass"
                        date="20/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2354984874806380/?type=3"
                        imgUrl="/initiatives/wcw/hannahbeder.png"
                        alt="Hannah Beder"
                        date="15/07/2020"
                      />
                      <MondayMotivation
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2353502958287905/"
                        imgUrl="/initiatives/monday/cheer.png"
                        alt="You can do it!"
                        date="13/07/2020"
                      />
                      <Memes
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2351398365165031/"
                        imgUrl="/initiatives/memes/cat.png"
                        alt="Cat"
                        date="10/07/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2349761751995359"
                        imgUrl="/initiatives/wcw/maddiemackey.png"
                        alt="Maddie Mackey"
                        date="08/07/2020"
                      />
                      <Mascot
                        fb="https://www.facebook.com/unsw.wit/posts/2346183109019890"
                        imgUrl="/initiatives/monday/dance.png"
                        alt="Dance like nobody's watching"
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
                      <Mascot
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2348244162147118/"
                        imgUrl="/initiatives/monday/walking.png"
                        alt="Take a break"
                        date="07/06/2020"
                      />
                      <WCW
                        fb="https://www.facebook.com/unsw.wit/posts/2323194404652094"
                        imgUrl="/initiatives/wcw/marissamayer.png"
                        alt="Marissa Mayer"
                        date="03/06/2020"
                      />

                      <WCW
                        fb="https://www.facebook.com/unsw.wit/photos/a.1570799533224922/2370444469927087/"
                        imgUrl="/initiatives/wcw/shatabdidey.png"
                        alt="Felicia Ee"
                        date="08/05/2020"
                      />
                    </ol>
                  </div>
            </div>
        </div>
    );
  }
}
export default MarketingContent;
