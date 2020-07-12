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
            <h2 class="team-heading" style={{"marginTop":"2vw","paddingBottom":"5px"}}>OUR 2020 SUBCOMMITTEE TEAM</h2>
            <div className="subcom_section">
                <h3 class="subcom-type">Education Team</h3>
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Elisa Sanjurjo</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce/Science, 4th year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Georgie Mansfield</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Chemical Engineering/Materials Science, 2nd year</p>
                        </div>
                    </div>
                </div>
               
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Victoria Ruming</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Mechatronic Engineering/Biomedical Engineering, 2nd year</p>
                        </div>
                    </div>
                </div>
               
                <h3 class="subcom-type">Events Team</h3>
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Ariane Notaras</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce(Finance)/Information Systems, 2nd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Jane Wang</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce/Information Systems, 2nd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Justin Clarke</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Data Science and Decisions, 2nd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Nishmi Kapoor</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce/Advanced Science, 2nd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Shirlee Salaria</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce/Information Systems, 2nd year</p>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">Externals Team</h3>
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Angeni Bai</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Computer Science, 1st year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Rue Teh</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Software Engineering, 2nd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Srija Mukherjee</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Software Engineering, 1st year</p>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">HR Team</h3>
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Claire Yu</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce/Information System, 1st year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Victoria Yu</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Information Systems, 2nd year</p>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">IT Team</h3>
                
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Alana Hua</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Software Engineering/Biomedical Engineering, 3rd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Chelsea Chaffey</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Computer Science, 1st year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Gianfelix Goenawan</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Computer Science/Commerce, 2nd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Lily Yang</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Computer Science/Environmental Engineering, 1st year</p>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">Marketing Team</h3>
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Anisa Islam</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Media in Communications and Journalism, 1st year</p>
                        </div>
                    </div>
                </div>
               
                <div class="subcom_row">
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Connie Shi</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Commerce/Information Systems, 3rd year</p>
                        </div>
                    </div>
                </div>

                <div class="subcom_row" style={{"marginBottom":"8vw"}}>
                    <div class="subcom_col">
                        <div class="profile">
                            <p className="subcom_profile_name">Vy Kim Nguyen</p>
                        </div>
                    </div>
                        
                    <div className="subcom_longer_col">
                        <div class="profile">
                            <p className="subcom_profile_degree">Bioinformatics/Biomedical Engineering, 2nd year</p>
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
