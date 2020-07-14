import React, { Component } from 'react';
import "./sponsors.css";

import Amazon from "./Amazon";
import Atlassian from "./Atlassian";
import Baraja from "./Baraja";
import Commonwealth from "./Commonwealth";
import Deloitte from "./Deloitte";
import EY from "./EY";
import Google from "./Google";
import InsideSherpa from "./InsideSherpa";
import LendLease from "./Lendlease";
import McGrathNicol from "./McGrathNicol";
import Nine from "./Nine";
import Palantir from "./Palantir";
import QPay from "./QPay";
import Quantium from "./Quantium";
import Telstra from "./Telstra";

class Sponsors extends Component {
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
                </div>

                <div id="majorContainer">
                    <Baraja/>
                    <Commonwealth/>
                    <Deloitte/>
                </div>

                <div id="majorContainer">
                    <EY/>
                    <Google/>
                    <McGrathNicol/>
                </div>

                <div id="majorContainer">
                    <Nine/>
                    <Quantium/>
                </div>

                <h1 className='subsponsor'>Support Sponsors</h1>
                <div id="majorContainer">
                    <LendLease/>
                    <Palantir/>
                </div>
                {/* 200x100 */}
                <h1 className='subsponsor'>In-Kind Sponsors</h1>
                
                <div id="majorContainer">
                    <InsideSherpa/>
                    <QPay/>
                </div>
            
                <p className='subheader'>{`Interested in partnering with us? Contact us at `}
                    <a class='subheader' href="mailto:externals@unswwit.com">externals@unswwit.com</a>
                </p>
            </div>
        );
    }
}

export default Sponsors;
