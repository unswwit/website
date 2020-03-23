import React from 'react';
import ToggleBox from "./sponsors/toggleBox";
import Amazon from "./sponsors/Amazon";
import Atlassian from "./sponsors/Atlassian";
import EY from "./sponsors/EY";
import Google from "./sponsors/Google";
import McGrathNicol from "./sponsors/McGrathNicol";
import NinePublishing from "./sponsors/NinePublishing";
import Palantir from "./sponsors/Palantir";
import Quantium from "./sponsors/Quantium";
import Telstra from "./sponsors/Telstra";
import VMWare from "./sponsors/VMWare";
import QPay from "./sponsors/QPay";

import "./sponsors.css";

class Sponsors extends React.Component {
    render() {
        return (
            <div className='centre'>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
                <div className = 'sponsorHeader'>
                  <img src={process.env.PUBLIC_URL + '/sponsors-header.png'} width = "100%" className="" alt="banner"
                    resizeMode='contain'
                    />

                  <h1>SPONSORS</h1>
                </div>
                <p className='subheader'>{`
                    Thank you to our sponsors for generously supporting our cause and
                    collaborating with us to provide our students invaluable opportunities.
                    `}
                </p>

                {/* 600x300 */}
                <h3 class="subheading">Principal Sponsors</h3>
                <ToggleBox title='/sponsors/Telstra.png'>
                    <Telstra />
                </ToggleBox>

                {/* 300x150 */}
                <h3 class="subheading">Major Sponsors</h3>
                <div class="majorContainer">
                  <a href="https://www.amazon.jobs/en">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/amazon-major.png"}
                      alt="Amazon"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>

                  <a href="https://www.atlassian.com/">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/atlassian-major.png"}
                      alt="Atlassian"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>

                  <a href="https://www.baraja.com/">
                    <img
                      src={process.env.PUBLIC_URL + "/sponsors/baraja-major.png"}
                      alt="Baraja"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                </div>

                <div class="majorContainer">
                  <a href="https://www.commbank.com.au/">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/cba-major.png"}
                      alt="CommonweathBank"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                  
                  <a href="https://www2.deloitte.com/au/en.html">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/deloitte-major.png"}
                      alt="Deloitte"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>

                  <a href="https://www.dxc.technology/">
                    <img
                      src={process.env.PUBLIC_URL + "/sponsors/dxc-major.png"}
                      alt="DXC"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                </div>

                <div class="majorContainer">
                  <a href="https://www.ey.com/en_au">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/ey-major.png"}
                      alt="EY"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                  <a href="https://www.fairfaxmedia.com.au/">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/fairfax-major.png"}
                      alt="Fairfax"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                  <a href="https://careers.google.com/">
                    <img
                      src={process.env.PUBLIC_URL + "/sponsors/google-major.png"}
                      alt="Google"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                </div>

                <div class="majorContainer">
                  <a href="https://www.macquarie.com/au/en.html/">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/macquarie-group-major.png"}
                      alt="MacquarieGroup"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>

                  <a href="https://www.mcgrathnicol.com/">
                    <img
                      class="notLast"
                      src={process.env.PUBLIC_URL + "/sponsors/mcgrathcicol-major.png"}
                      alt="McGrathNicol"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>

                  <a href="https://quantium.com/">
                    <img
                      src={process.env.PUBLIC_URL + "/sponsors/quantium-major.png"}
                      alt="Quantium"
                      resizeMode="contain"
                      style={{'height': '100px', 'width': '220px'}}
                    />
                  </a>
                </div>
    
                {/* 150x150 */}
                <h3 class="subheading">Support Sponsors</h3>
                <ToggleBox title='/sponsors/Palantir.png'>
                    <Palantir />
                </ToggleBox>

                {/* 150x150 */}
                <h3>In-Kind Sponsors</h3>
                <ToggleBox title='/sponsors/qpay.png'>
                    <QPay />
                </ToggleBox>

                <h3 className='subheader'>{`Interested in partnering with us? Contact us at `}
                    <a className='subheader' href="mailto:externals@unswwit.com">externals@unswwit.com</a>.
                </h3>
            </div>
        );
    }
}

export default Sponsors;
