import React, { Component } from "react";
import "./sponsors.css";
import PageHeader from ".././header";

import Principal from "./Principal";
import Major from "./Major";
import SupportInkind from "./SupportInKind";

class Sponsors extends Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/sponsors-header-1.png" title="Sponsors" />

        <div id="sponsors-body">
          <p className="subheader">
            {`Thank you to our sponsors for generously supporting our cause and
               collaborating with us to provide our students invaluable opportunities.`}
          </p>

          {/* Principal Sponsors Area */}
          <h1 className="subsponsor">Principal Sponsors</h1>
          <div id="majorContainer">
            <Principal
              details={{
                Telstra: [
                  "https://www.telstra.com.au/",
                  "/sponsors/telstra-large.png",
                ],
              }}
            />
          </div>

          {/* Major Sponsors Area */}
          <h1 className="subsponsor">Major Sponsors</h1>

          <div id="majorContainer">
            <Major
              details={{
                Amazon: [
                  "https://www.amazon.jobs/en",
                  "/sponsors/amazon-major.png",
                ],
              }}
            />

            <Major
              details={{
                Atlassian: [
                  "https://www.atlassian.com/",
                  "/sponsors/atlassian-major.png",
                ],
              }}
            />

            <Major
              details={{
                Baraja: [
                  "https://www.baraja.com/careers/",
                  "/sponsors/baraja-major.png",
                ],
              }}
            />       

            <Major
              details={{
                Commonwealth: [
                  "https://www.commbank.com.au/about-us/careers.html",
                  "/sponsors/cba-major.png",
                ],
              }}
            />

            <Major
              details={{
                Deloitte: [
                  "https://www2.deloitte.com/au/en/careers/students.html",
                  "/sponsors/deloitte-major.png",
                ],
              }}
            />

            <Major
              details={{
                EY: ["https://www.ey.com/en_au", "/sponsors/ey-major.png"],
              }}
            />

            <Major
              details={{
                Google: [
                  "https://careers.google.com/",
                  "/sponsors/google-major.png",
                ],
              }}
            />

            <Major
              details={{
                McGrathNicol: [
                  "https://www.mcgrathnicol.com/",
                  "/sponsors/mcgrathcicol-major.png",
                ],
              }}
            />
        
            <Major
              details={{
                Nine: [
                  "https://www.nineforbrands.com.au/",
                  "/sponsors/nine-major.png",
                ],
              }}
            />

            <Major
              details={{
                Quantium: [
                  "https://quantium.com/",
                  "/sponsors/quantium-major.png",
                ],
              }}
            />
          </div>

          {/* Support Sponsors Area */}
          <h1 className="subsponsor">Support Sponsors</h1>
          <div id="majorContainer">
            <SupportInkind
              details={{
                LendLease: [
                  "https://www.lendlease.com/au/",
                  "/sponsors/lendlease-support.png",
                ],
              }}
            />

            <SupportInkind
              details={{
                Palantir: [
                  "https://www.palantir.com/",
                  "/sponsors/palantir-support.png",
                ],
              }}
            />
          </div>

          {/* InKind Sponsors Area */}
          <h1 className="subsponsor">In-Kind Sponsors</h1>

          <div id="majorContainer">
            <SupportInkind
              details={{
                InsideSherpa: [
                  "https://www.insidesherpa.com/",
                  "/sponsors/inside-sherpa-inkind.png",
                ],
              }}
            />

            <SupportInkind
              details={{
                Telstra: [
                  "https://webapp.getqpay.com/login",
                  "/sponsors/qpay-inkind.png",
                ],
              }}
            />
          </div>

          <p className="subheader">
            {`Interested in partnering with us? Contact us at `}
            <a className="subheader" href="mailto:externals@unswwit.com">
              externals@unswwit.com
            </a>
          </p>
        </div>

        <footer>
          <div className="footer_area" style={{ marginTop: "8vw" }} />
        </footer>
      </div>
    );
  }
}

export default Sponsors;
