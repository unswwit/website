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
                <h1>Principal Sponsors</h1>
                <ToggleBox title='/sponsors/Telstra.png'>
                    <Telstra />
                </ToggleBox>

                {/* 300x150 */}
                <h1>Major Sponsors</h1>
                <div id="majorContainer">
                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/Amazon.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.atlassian.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/Atlassian.png"}
                        alt="Atlassian"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.ey.com/en_au">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/EY.png"}
                        alt="EY"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>


                </div>
                <div id="majorContainer">

                    <a href="https://careers.google.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/Google.png"}
                        alt="Google"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.mcgrathnicol.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/McGrathNicol.png"}
                        alt="McGrathNicol"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.nineforbrands.com.au/about/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/Nine-Publishing.png"}
                        alt="Nine-Publishing"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                </div>
                <div id="majorContainer">

                    <a href="https://quantium.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/Quantium.png"}
                        alt="Quantium"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.vmware.com/au.html">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/vmware.png"}
                        alt="Vmware"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                </div>

                {/* 150x150 */}
                <h1>Support Sponsors</h1>
                <ToggleBox title='/sponsors/Palantir.png'>
                    <Palantir />
                </ToggleBox>

                {/* 150x150 */}
                <h1>In-Kind Sponsors</h1>
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
