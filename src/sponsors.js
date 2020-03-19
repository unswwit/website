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

                  <h1 className='sponsorHeaderText'>SPONSORS</h1>
                </div>
                <p className='subheader'>{`
                    Thank you to our sponsors for generously supporting our cause and
                    collaborating with us to provide our students invaluable opportunities
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
                    <ToggleBox title='/sponsors/Amazon.png'>
                        <Amazon />
                    </ToggleBox>
                    <ToggleBox title='/sponsors/Atlassian.png'>
                        <Atlassian />
                    </ToggleBox>
                    <ToggleBox title='/sponsors/EY.png'>
                        <EY />
                    </ToggleBox>
                </div>
                <div id="majorContainer">
                    <ToggleBox title='/sponsors/Google.png'>
                        <Google />
                    </ToggleBox>
                    <ToggleBox title='/sponsors/McGrathNicol.png'>
                        <McGrathNicol />
                    </ToggleBox>
                    <ToggleBox title='/sponsors/Nine-Publishing.png'>
                        <NinePublishing />
                    </ToggleBox>
                </div>
                <div id="majorContainer">
                    <ToggleBox title='/sponsors/Quantium.png'>
                        <Quantium />
                    </ToggleBox>
                    <ToggleBox title='/sponsors/vmware.png'>
                        <VMWare />
                    </ToggleBox>
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
