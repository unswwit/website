//All necessary imports for this javascript
import React, { Component } from "react";
import ".././marketingArchive.css";
import "./content.css";
import "../.././style.css";
import PageHeader from "../.././header";

import WCW from "../initiatives/wcw";
import Memes from "../initiatives/memes";
import MondayMotivation from "../initiatives/monday-motivation";
import Mascot from "../initiatives/mascot";
import CareersGuide from "../initiatives/careers-guide";
import Other from "../initiatives/other";

class MarketingContent extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/marketing-header.png" title="Marketing Archives" />
        {/*End of Header*/}

        <div id="parent">
          {/*Left intiatives side bar*/}
          {/*List of 2020 intatives*/}
          <div className="initiatives">
            <input type="radio" id="2020" name="categories" />
            <label htmlFor="2020" className="side">
              2020
            </label>
            <input type="radio" id="crush" name="categories" />
            <label htmlFor="crush" className="side">
              WIT Crush Wednesday
            </label>
            <input type="radio" id="memes" name="categories" />
            <label htmlFor="memes" className="side">
              Memes
            </label>
            <input type="radio" id="mondaymot" name="categories" />
            <label htmlFor="mondaymot" className="side">
              Monday Motivation
            </label>
            <input type="radio" id="mascot" name="categories" />
            <label htmlFor="mascot" className="side">
              Mascot
            </label>
            <input type="radio" id="careers" name="categories" />
            <label htmlFor="careers" className="side">
              Careers Guide
            </label>

            {/*Image collage*/}
            <ol className="grid" id="content">             
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2459063954398471"
                imgUrl="/initiatives/memes/end-of-term.jpg"
                alt="End of Term"
                date="20/11/2020"
              />            
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2453280748310125"
                imgUrl="/initiatives/memes/coffee.jpg"
                alt="Coffee"
                date="13/11/2020"
              /> 
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2447434118894788"
                imgUrl="/initiatives/memes/online-lectures.jpg"
                alt="Online Lectures"
                date="6/11/2020"
              />    
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2445796365725230"
                imgUrl="/initiatives/wcw/tanzeemsyeda.jpg"
                alt="Tanzeem Syeda"
                date="4/11/2020"
              />                       
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2441552459482954"
                imgUrl="/initiatives/memes/halloween.jpg"
                alt="Happy Halloween"
                date="30/10/2020"
              />                      
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2439842666320600"
                imgUrl="/initiatives/wcw/calistakusuma.jpg"
                alt="Calista Kusuma"
                date="28/10/2020"
              />  
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2433987083572825"
                imgUrl="/initiatives/wcw/2020execs.png"
                alt="2020 Execs"
                date="21/10/2020"
              />
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2427752177529649"
                imgUrl="/initiatives/wcw/sophiewarner.png"
                alt="Sophie Warner"
                date="14/10/2020"
              />
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2422504541387746"
                imgUrl="/initiatives/wcw/davinaadisusila.jpg"
                alt="Davina Adisusila"
                date="7/10/2020"
              />
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2418739378430929"
                imgUrl="/initiatives/memes/fall-guys.png"
                alt="So...do you play Fall Guys?"
                date="2/10/2020"
              />
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
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2400816276889906"
                imgUrl="/initiatives/memes/buff-sad.png"
                alt="T3 is almost here"
                date="11/9/2020"
              />
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2395474987424035"
                imgUrl="/initiatives/memes/tv-shows.jpg"
                alt="TV shows"
                date="4/9/2020"
              />
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2393647687606765"
                imgUrl="/initiatives/wcw/aneitayang.png"
                alt="Aneita Yang"
                date="2/09/2020"
              />
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2387231141581753"
                imgUrl="/initiatives/wcw/yourcrush.png"
                alt="Who's your crush?"
                date="26/08/2020"
              />
              <MondayMotivation
                fb="https://www.facebook.com/unsw.wit/posts/2385637025074498"
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
                fb="https://www.facebook.com/unsw.wit/posts/2371857333119134"
                imgUrl="/initiatives/memes/final-exams.jpg"
                alt="Final Exams"
                date="7/08/2020"
              />             
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2365454317092769"
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
                fb="https://www.facebook.com/unsw.wit/posts/2361614684143399"
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
                fb="https://www.facebook.com/unsw.wit/posts/2358718497766351"
                imgUrl="/initiatives/monday/pass.png"
                alt="This too shall pass"
                date="20/07/2020"
              />
              <Mascot
                fb="https://www.facebook.com/unsw.wit/posts/2356534517984749"
                imgUrl="/initiatives/mascot/glowing-skin.jpg"
                alt="glowing-skin"
                date="17/07/2020"
              />
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2354984874806380"
                imgUrl="/initiatives/wcw/hannahbeder.png"
                alt="Hannah Beder"
                date="15/07/2020"
              />
              <MondayMotivation
                fb="https://www.facebook.com/unsw.wit/posts/2353502958287905"
                imgUrl="/initiatives/monday/cheer.png"
                alt="You can do it!"
                date="13/07/2020"
              />
              <Memes
                fb="https://www.facebook.com/unsw.wit/posts/2351398365165031"
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
                imgUrl="/initiatives/mascot/dance.png"
                alt="Dance like nobody's watching"
                date="03/07/2020"
              />
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2344785135826354"
                imgUrl="/initiatives/wcw/lanaking.jpg"
                alt="Lana King"
                date="01/07/2020"
              />
              <MondayMotivation
                fb="https://www.facebook.com/unsw.wit/posts/2343190125985855"
                imgUrl="/initiatives/monday/procrastinating-what.png"
                alt="What are you really procrastinating?"
                date="29/06/2020"
              />             
              <WCW
                fb="https://www.facebook.com/unsw.wit/posts/2328983924073142"
                imgUrl="/initiatives/wcw/syinlitan.jpg"
                alt="Syin Li Tan"
                date="10/06/2020"
              />
              <Mascot
                fb="https://www.facebook.com/unsw.wit/posts/2348244162147118"
                imgUrl="/initiatives/mascot/walking.jpg"
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
                fb="https://www.facebook.com/unsw.wit/posts/2370444469927087"
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
