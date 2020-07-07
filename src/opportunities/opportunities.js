//All necessary imports for this javascript
import React, { Component } from "react";
import ".././style.css";
import "./opportunities.css";
import OppCard from "./oppCard.js";


class Opportunities extends Component {
  render() {
    return (
        <div>

            {/*Start of Header*/}
            <div class="coverPhoto">
                <div class="title">
                    <h1>Opportunities</h1>
                </div>
            </div>
            {/*End of Header*/}

            {/*Start of opportunities grid table*/}    
            <div style={{ margin:"125px"}}>  
                
                <div class="container">
                    <OppCard
                    details={{"Telstra":[
                        "/sponsors/telstra-large.png", 
                        "July 7", 
                        "Summer Vacationer", 
                        "Do you know that by being a Summer Vacationer at Telstra you could be considered for early offers and join the Graduate Program as soon as you graduate? Telstra will guide and support you on your journey, as you see what is possible in your career. Applications for Telstra’s Summer Vacation Program start July 7. Don’t miss out on this opportunity! #TeamTelstra #TelstraSummerVac",
                        "https://www.youtube.com/watch?v=4R6Vy7QOgKA&t=4s  "
                    ]}} 
                    />

                    <OppCard
                    details={{"Nine":[
                        "/sponsors/nine-major.png", 
                        "Publised date", 
                        "Job Position", 
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                        "https://en.wikipedia.org/wiki/Lorem_ipsum"
                    ]}} 
                    />

                    <OppCard
                    details={{"Quantium":[
                        "/sponsors/quantium-major.png", 
                        "Publised date", 
                        "Job Position", 
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                        "https://en.wikipedia.org/wiki/Lorem_ipsum"
                    ]}} 
                    />
                

                    <OppCard
                    details={{"Atlassian":[
                        "/sponsors/atlassian-major.png", 
                        "Publised date", 
                        "Job Position", 
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                        "https://en.wikipedia.org/wiki/Lorem_ipsum"
                    ]}} 
                    />

                    <OppCard
                    details={{"Atlassian":[
                        "/sponsors/atlassian-major.png", 
                        "Publised date", 
                        "Job Position", 
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
                        "https://en.wikipedia.org/wiki/Lorem_ipsum"
                    ]}} 
                    />

            </div>
            </div>
            {/*End of opportunities grid table*/}
        </div>
    );
  }
}
export default Opportunities;
