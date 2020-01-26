import React from 'react';
// import {Dropdown, ButtonToolbar, DropdownButton } from 'react-dropdown';
import ToggleBox from "./sponsors/toggleBox";
import Telstra from "./sponsors/Telstra";
import EY from "./sponsors/EY";
import Google from "./sponsors/Google";
import Palantir from "./sponsors/Palantir";

class Sponsors extends React.Component {
    render() {
        return (
            <div className='centre'>
                <img src={process.env.PUBLIC_URL + '/wit_cover_sponsors.jpg'} className="" alt="banner" 
                    resizeMode='contain'
                    style={{
                    maxHeight: 768,
                    maxWidth: 1366
                    }} />
                <h1>Sponsors</h1>
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
                {/* <div className="row">
                    <div class="column">
                        <img src="img_snow.jpg" alt="Snow" style="width:100%">
                    </div>
                    <div class="column">
                        <img src="img_forest.jpg" alt="Forest" style="width:100%">
                    </div>
                    <div class="column">
                        <img src="img_mountains.jpg" alt="Mountains" style="width:100%">
                    </div>
                </div> */}

                <div className='row'>
                    <div className='column'>
                        <ToggleBox title='/sponsors/EY.png'>
                            <EY />
                        </ToggleBox>
                    </div>
                    <div className='column'>
                        <ToggleBox title='/sponsors/Google.png'>
                            <Google />
                        </ToggleBox>
                    </div>
                </div>
                
                {/* 150x150 */}
                <h1>Support Sponsors</h1>
                <ToggleBox title='/sponsors/Palantir.png'>
                    <Palantir />
                </ToggleBox>
            
                <h3 className='subheader'>{`Interested in partnering with us? Contact us at `}
                    <a className='subheader' href="mailto:external.unswwit@gmail.com">external.unswwit@gmail.com</a>.
                </h3>
            </div>
        );
    }
}

export default Sponsors;