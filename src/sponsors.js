import React from 'react';
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
                    src={process.env.PUBLIC_URL + "/sponsors/telstra-large.png"}
                    alt="Telstra"
                    resizeMode="contain"
                    style={{'height': '300px', 'width': '600px'}}
                  />
                </a>




                {/* 300x150 */}
                <h1>Major Sponsors</h1>
                <div id="majorContainer">
                    <a href="https://www.amazon.jobs/en">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/amazon-major.png"}
                        alt="Amazon"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>


                    <a href="https://www.atlassian.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/atlassian-major.png"}
                        alt="Atlassian"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.baraja.com/careers/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/baraja-major.png"}
                        alt="Baraja"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                </div>

                <div id="majorContainer">
                    <a href="https://www.commbank.com.au/about-us/careers.html">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/cba-major.png"}
                        alt="Commonwealth Bank"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www2.deloitte.com/us/en/pages/careers/topics/careers.html/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/deloitte-major.png"}
                        alt="Delloite"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://jobs.dxc.technology/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/dxc-major.png"}
                        alt="DXC"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                </div>

                <div id="majorContainer">
                    <a href="https://www.ey.com/en_au">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/ey-major.png"}
                        alt="EY"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.nineforbrands.com.au/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/fairfax-major.png"}
                        alt="Fairfax"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://careers.google.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/google-major.png"}

                        alt="Google"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                </div>

                <div id="majorContainer">
                    <a href="https://www.macquarie.com/au/personal">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/macquarie-group-major.png"}

                        alt="Macquarie Group"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://www.mcgrathnicol.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/mcgrathcicol-major.png"}

                        alt="McGrathNicol"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>

                    <a href="https://quantium.com/">
                      <img
                        src={process.env.PUBLIC_URL + "/sponsors/quantium-major.png"}

                        alt="Quantium"
                        resizeMode="contain"
                        style={{'height': '150px', 'width': '300px'}}
                      />
                    </a>
                </div>

                {/* 200x100 */}
                <h1>Support Sponsors</h1>
                <a href="https://www.palantir.com/">
                  <img
                    src={process.env.PUBLIC_URL + "/sponsors/palantir-support.png"}

                    alt="Palantir"
                    resizeMode="contain"
                    style={{'height': '100px', 'width': '200px'}}
                  />
                </a>


                {/* 200x100 */}
                <h1>In-Kind Sponsors</h1>
                <a href="https://webapp.getqpay.com/login">
                  <img
                    src={process.env.PUBLIC_URL + "/sponsors/qpay-inkind.png"}

                    alt="qPay"
                    resizeMode="contain"
                    style={{'height': '100px', 'width': '200px'}}
                  />
                </a>


                <h3 className='subheader'>{`Interested in partnering with us? Contact us at `}
                    <a className='subheader' href="mailto:externals@unswwit.com">externals@unswwit.com</a>.
                </h3>
            </div>
        );
    }
}

export default Sponsors;
