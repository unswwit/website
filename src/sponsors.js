{/*import React from 'react';
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
import QPay from "./sponsors/QPay";*/}


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
                    collaborating with us to provide our students invaluable opportunities
                    `}
                </p>

                {/* 600x300 */}
                <h1>Principal Sponsors</h1>
                <a href="https://www.telstra.com.au/">
                  <img
                    src={process.env.PUBLIC_URL + "/sponsors/Telstra.png"}
                    alt="Telstra"
                    resizeMode="contain"
                    style={{'height': '300px', 'width': '600px'}}
                  />
                </a>

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


                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/Atlassian.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>


                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/EY.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>


                </div>
                <div id="majorContainer">

                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                    <ToggleBox title='/sponsors/Google.png'>
                        <Google />
                    </ToggleBox>


                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                    <ToggleBox title='/sponsors/McGrathNicol.png'>
                        <McGrathNicol />
                    </ToggleBox>


                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                    <ToggleBox title='/sponsors/Nine-Publishing.png'>
                        <NinePublishing />
                    </ToggleBox>
                </div>
                <div id="majorContainer">

                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                    <ToggleBox title='/sponsors/Quantium.png'>
                        <Quantium />
                    </ToggleBox>


                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/icon_email.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                    <ToggleBox title='/sponsors/vmware.png'>
                        <VMWare />
                    </ToggleBox>
                </div>

                {/* 150x150 */}
                <h1>Support Sponsors</h1>
                <a href="https://www.amazon.jobs/en">
                  <img
                    src={process.env.PUBLIC_URL + "/icon_email.png"}
                    alt="Amazon"
                    resizeMode="contain"
                    style={{'height': '150px', 'width': '150px'}}
                  />
                </a>
                <ToggleBox title='/sponsors/Palantir.png'>
                    <Palantir />
                </ToggleBox>

                {/* 150x150 */}
                <h1>In-Kind Sponsors</h1>
                <a href="https://www.amazon.jobs/en">
                  <img
                    src={process.env.PUBLIC_URL + "/icon_email.png"}
                    alt="qPay"
                    resizeMode="contain"
                    style={{'height': '150px', 'width': '150px'}}
                  />
                </a>
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
