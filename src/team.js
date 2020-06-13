//All necessary imports for this javascript
import React, { Component } from "react";
import "./team.css";

import Alison from "./team/Alison";
import Amanda from "./team/Amanda";
import Elicia from "./team/Elicia";
import Elizabeth from "./team/Elizabeth";
import Felicia from "./team/Felicia";
import Gabrielle from "./team/Gabrielle";
import Kelly from "./team/Kelly";
import Rhea from "./team/Rhea";
import VivianS from "./team/VivianS";
import VivianW from "./team/VivianW";
class OurTeam extends Component {
  render() {
    return (
        <div>
            <div className="crop">
            {/* Cover Photo */}
            {/* Main Title, and Subtitle Area */}
                <div className="title_area">
                    <h1 className="centre">Meet Our Team</h1>
                </div>
                </div>

                <div className="profile_section_heading">
                <h2 class="team-heading">
                    {`
                                OUR 2020 EXECUTIVE TEAM
                            `}
                </h2>
            </div>

            <div className="all_execs_section">
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <VivianS/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <Amanda/>
                        </div>
                    </div>
                </div>

                <div className="exec_row">    
                    <div className="exec_col">
                        <div class="profile">
                            <Kelly/>
                        </div>
                    </div>
                
                    <div className="exec_col">
                        <div class="profile">
                            <Elizabeth/>
                        </div>
                    </div>
                </div>

                <div class="exec_row">
                    <div class="exec_col">
                        <div className="profile"> 
                            <VivianW/>
                        </div>
                    </div>

                    <div class="exec_col">
                        <div className="profile"> 
                            <Gabrielle/>
                        </div>
                    </div>
                </div>
            
                <div class="exec_row">
                    <div class="exec_col">
                        <div className="profile"> 
                            <Rhea/>
                        </div>
                    </div>

                    <div class="exec_col">
                        <div className="profile"> 
                            <Alison/>
                        </div>
                    </div>
                </div>

                <div class="exec_row">
                    <div class="exec_col">
                    <div className="profile"> 
                        <Elicia/>
                    </div>
                    </div>

                    <div class="exec_col">
                    <div className="profile"> 
                        <Felicia/>
                    </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer_area"></div>
            </footer>
        </div>
    );
  }
}
export default OurTeam;
