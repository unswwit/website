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
                            degree="Commerce/Science, 4th year"
                            picUrl="/potraits/elisa.jpg"
                            alt="elisa-sanjurjo"
                            transform="vivw_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Georgie Mansfield"
                            degree="Chemical Engineering/Materials Science, 2nd year"
                            picUrl="/potraits/georgie.jpg"
                            alt="georgie-mansfield"
                            transform="vivw_img"/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Victoria Ruming"
                            degree=""
                            picUrl="/potraits/victoria.jpg"
                            alt="victoria-ruming"
                            transform="vivw_img"/>
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
                            picUrl="/potraits/ariane.jpg"
                            alt="ariane-notaras"
                            transform="ariane_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Jane Wang"
                            degree="Commerce/Information Systems, 2nd year"
                            picUrl="/potraits/jane.jpg"
                            alt="jane-wang"
                            transform="jane_img"/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Justin Clarke"
                            degree="Data Science and Decisions, 2nd year"
                            picUrl="/potraits/justin.jpg"
                            alt="justin-clarke"
                            transform="justin_img"/>
                        </div>
                    </div>
                </div>

                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Nishmi Kapoor"
                            degree="Commerce/Advanced Science, 2nd year"
                            picUrl="/potraits/nishmi.jpg"
                            alt="nishimi-kapoor"
                            transform="nishmi_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Shirlee Salaria"
                            degree="Commerce/Information Systems, 2nd year"
                            picUrl=""
                            alt="shirlee-salaria"/>
                        </div>
                    </div>
                </div>
                
            <h3 class="subcom-type">Externals Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Angeni Bai"
                            degree="Computer Science, 1st year"
                            picUrl="/potraits/angeni.jpg"
                            alt="Angeni Bai"
                            transform="angeni_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Rue Teh"
                            degree="Software Engineering, 2nd year"
                            picUrl="/potraits/rue.jpg"
                            alt="rue-teh"
                            transform="rue_img"/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Srija Mukherjee"
                            degree="Software Engineering, 1st year"
                            picUrl="/potraits/srija.jpg"
                            alt="srija-mukherjee"
                            transform="srija_img"/>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">HR Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Claire Yu"
                            degree="Commerce/Information System, 1st year"
                            picUrl="/potraits/claire.jpg"
                            alt="claire-yu"
                            transform="claire_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Victoria Yu"
                            degree=""
                            picUrl=""
                            alt="victoria-yu"/>
                        </div>
                    </div>
                </div>
                
                <h3 class="subcom-type">IT Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Alana Hua"
                            degree="Software Engineering/Biomedical Engineering, 3rd year"
                            picUrl="/potraits/alana.jpg"
                            alt="alana-hua"
                            transform="alana_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Chelsea Chaffey"
                            degree=""
                            picUrl="/potraits/chelsea.jpg"
                            alt="chelsea-chaffey"
                            transform="chelsea_img"/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Gianfelix Goenawan"
                            degree="Computer Science/Commerce, 2nd year"
                            picUrl="/potraits/gian.jpg"
                            alt="gianfelix-goenawan"
                            transform="gian_img"/>
                        </div>
                    </div>
                </div>
                
                <div class="exec_row">
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Lily Yang"
                            degree="Computer Science/Environmental Engineering, 1st year"
                            picUrl=""
                            alt="lily-yang"/>
                        </div>
                    </div>
                </div>

                <h3 class="subcom-type">Marketing Team</h3>
                <div class="exec_row">
                    <div class="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Anisa Islam"
                            degree="Media in Communications and Journalism, 1st year"
                            picUrl="/potraits/anisa.jpg"
                            alt="anisa-islam"
                            transform="anisa_img"/>
                        </div>
                    </div>
                        
                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Connie Shi"
                            degree="Commerce/Information Systems, 3rd year"
                            picUrl="/potraits/connie.jpg"
                            alt="connie-shi"
                            transform="connie_img"/>
                        </div>
                    </div>

                    <div className="exec_col">
                        <div class="profile">
                            <SubcomMember
                            name="Vy Kim Nguyen"
                            degree="Bioinformatics/Biomedical Engineering, 2nd year"
                            picUrl="/potraits/kim.jpg"
                            alt="vy-kim-nguyen"
                            transform="kim_img"/>
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
