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
import SubCom from "./subcom";

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
            <h2 class="team-heading" style={{"marginTop":"2vw","paddingBottom":"5px"}}>OUR 2020 SUBCOMMITTEE TEAM</h2>
            <div className="subcom_section">
                <h3 class="subcom-type">Education Team</h3>
                <SubCom
                name="Elisa Sanjurjo"
                degree="Commerce/Science"
                year="4th"
                />

                <SubCom
                name="Georgie Mansfield"
                degree="Chemical Engineering/Materials Science"
                year="2nd"
                />

                <SubCom
                name="Victoria Ruming"
                degree="Mechatronic Engineering/Biomedical Engineering"
                year="2nd"
                />

                <h3 class="subcom-type">Events Team</h3>
                <SubCom
                name="Ariane Notaras"
                degree="Commerce(Finance)/Information Systems"
                year="2nd"
                />

                <SubCom
                name="Jane Wang"
                degree="Commerce/Information Systems"
                year="2nd"
                />

                <SubCom
                name="Justin Clarke"
                degree="Data Science and Decisions"
                year="2nd"
                />

                <SubCom
                name="Nishmi Kapoor"
                degree="Commerce/Advanced Sciences"
                year="2nd"
                />

                <SubCom
                name="Shirlee Salaria"
                degree="Commerce/Information Systems"
                year="2nd"
                />

                <h3 class="subcom-type">Externals Team</h3>
                <SubCom
                name="Angeni Bai"
                degree="Computer Science"
                year="1st"
                />

                <SubCom
                name="Rue Teh"
                degree="Software Engineering"
                year="2nd"
                />

                <SubCom
                name="Srija Mukherjee"
                degree="Software Engineering"
                year="1st"
                />

                <h3 class="subcom-type">Human Resources Team</h3>
                <SubCom
                name="Claire Yu"
                degree="Commerce/Information System"
                year="1st"
                />

                <SubCom
                name="Victoria Yu"
                degree="Information Systems"
                year="2nd"
                />

                <h3 class="subcom-type">Information Technology Team</h3>
                <SubCom
                name="Alana Hua"
                degree="Software Engineering/Biomedical Engineering"
                year="3rd"
                />

                <SubCom
                name="Chelsea Chaffey"
                degree="Computer Science"
                year="1st"
                />

                <SubCom
                name="Gianfelix Goenawan"
                degree="Computer Science/Commerce"
                year="2nd"
                />

                <SubCom
                name="Lily Yang"
                degree="Computer Science/Environmental Engineering"
                year="1st"
                />

                <h3 class="subcom-type">Marketing Team</h3>
                <SubCom
                name="Anisa Islam"
                degree="Media in Communications and Journalism"
                year="1st"
                />

                <SubCom
                name="Connie Shi"
                degree="Commerce/Information Systems"
                year="3rd"
                />

                <SubCom
                name="Vy Kim Nguyen"
                degree="Bioinformatics/Biomedical Engineering"
                year="2nd"
                />

            </div>

            <footer>
                <div className="footer_area" style={{"marginTop":"8vw"}}></div>
            </footer>
        </div>
    );
  }
}
export default OurTeam;
