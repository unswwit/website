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
                        "7 July 2020", 
                        "Summer Vacationer", 
                        "Do you know that by being a Summer Vacationer at Telstra you could be considered for early offers and join the Graduate Program as soon as you graduate? Telstra will guide and support you on your journey, as you see what is possible in your career. Applications for Telstra’s Summer Vacation Program start July 7. Don’t miss out on this opportunity! #TeamTelstra #TelstraSummerVac",
                        "https://www.youtube.com/watch?v=4R6Vy7QOgKA&t=4s  "
                    ]}} 
                    />

                    <OppCard
                    details={{"EY":[
                        "/sponsors/ey-major.png", 
                        "7 July 2020", 
                        "Breaking Down Barriers Program", 
                        "When – Tuesday 21st July  Where – Virtual  Time – 10am – 12:30pm. Register at the link below!",
                        "https://globaleysurvey.ey.com/jfe/form/SV_43pqDbzTEfL4Lbf "
                    ]}} 
                    />

                    <OppCard
                    details={{"Who's next?":[
                        "logo-black.png", 
                        "TBA", 
                        "Coming Soon", 
                        "Ready for exciting opportunities? Stay tuned to WIT UNSW's opportunities page and events!",
                        "https://wit.unsw.com"
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
