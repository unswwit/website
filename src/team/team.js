//All necessary imports for this javascript
import React, { Component } from "react";
import "./team.css";

import Alison from "./Alison";
import Amanda from "./Amanda";
import Elicia from "./Elicia";
import Elizabeth from "./Elizabeth";
import Felicia from "./Felicia";
import Gabrielle from "./Gabrielle";
import Kelly from "./Kelly";
import Rhea from "./Rhea";
import VivianS from "./VivianS";
import VivianW from "./VivianW";
import SubcomMember from "./subcom_member";

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

            {/* Exec section */}
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
            
            {/* Subcommittee section */}
            <hr style={{"width":"50%","height":"2px","backgroundColor":"#D3D3D3"}}/>
            <h2 class="team-heading" style={{"marginTop":"2vw"}}>OUR 2020 SUBCOMMITTEE TEAM</h2>
            <div className="subcom_section">
                <h3 class="subcom-type">Education Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Elisa Sanjurjo"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Georgie Mansfield"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Victoria Ruming"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                </div>
               
                <h3 class="subcom-type">Events Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Ariane Notaras"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Jane Wang"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Justin Clarke"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                </div>

                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Nishmi Kapoor"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Shirlee Salaria"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                        </div>
                    </div>
                </div>
                
            <h3 class="subcom-type">Externals Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Angeni Bai"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Rue Teh"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Srija Mukherjee"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">HR Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Claire Yu"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Victoria Yu"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                    </div>
                </div>
                
                <h3 class="subcom-type">IT Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Alana Hua"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Chelsea Chaffey"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Gianfelix Goenawan"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                </div>
                
                <div class="exec_row">
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Lily Yang"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile"></div>
                    </div>

                    <div className="exec_col">
                        <div class="profile"></div>
                    </div>
                </div>

                <h3 class="subcom-type">Marketing Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Anisa Islam"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Connie Shi"
                            degree=""
                            picUrl=""/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Vy Kim Nguyen"
                            degree=""
                            picUrl=""/>
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
