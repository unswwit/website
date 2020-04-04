import React from 'react';

import "./sponsors.css";

import Amazon from "./sponsors/Amazon";
import Atlassian from "./sponsors/Atlassian";
import Baraja from "./sponsors/Baraja";
import Commonwealth from "./sponsors/Commonwealth";
import Deloitte from "./sponsors/Deloitte";
import DXC from "./sponsors/DXC";
import EY from "./sponsors/EY";
import Fairfax from "./sponsors/Fairfax";
import Google from "./sponsors/Google";
import LendLease from "./sponsors/Lendlease";
import McGrathNicol from "./sponsors/McGrathNicol";
import Palantir from "./sponsors/Palantir";
import QPay from "./sponsors/QPay";
import Quantium from "./sponsors/Quantium";
import Telstra from "./sponsors/Telstra";

class Sponsors extends React.Component {
    render() {
        return (
            <div className='centre'>
                <div className="sponsorHeader">
                {/* Cover Photo */}
                {/* Main Title, and Subtitle Area */}
                    <div className="title_area">
                        <h1 className="centre">Sponsors</h1>
                    </div>
                </div>
                
                <p className='subheader'>{`
                    Thank you to our sponsors for generously supporting our cause and
                    collaborating with us to provide our students invaluable opportunities.
                    `}
                </p>

                {/* 600x300 */}
                <h1 className='subsponsor'>Principal Sponsors</h1>
                <Telstra/>

                {/* 300x150 */}
                <h1 className='subsponsor'>Major Sponsors</h1>
                <div id="majorContainer">
                    <Amazon/>
                    <Atlassian/>
                    <Baraja/>
                </div>

                <div id="majorContainer">
                    <Commonwealth/>
                    <Deloitte/>
                    <DXC/>
                </div>

                <div id="majorContainer">
                    <EY/>
                    <Fairfax/>
                    <Google/>
                </div>

                <div id="majorContainer">
                    <McGrathNicol/>
                    <Quantium/>
                </div>

                <h1 className='subsponsor'>Support Sponsors</h1>
                <div id="majorContainer">
                    <LendLease/>
                    <Palantir/>
                </div>
                {/* 200x100 */}
                <h1 className='subsponsor'>In-Kind Sponsors</h1>
                <QPay/>
    
                <p className='subheader'>{`Interested in partnering with us? Contact us at `}
                    <a class='subheader' href="mailto:externals@unswwit.com">externals@unswwit.com</a>
                </p>
            </div>
        );
    }
}

export default Sponsors;
