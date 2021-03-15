import React, { Component } from "react";
import styles from "./sponsors.module.css";
import PageHeader from ".././header";

const Sponsors = () => {
  const majorSponsors = {
    Accenture: [ "https://www.accenture.com/au-en", "accenture.png" ],
    Atlassian: [ "https://www.accenture.com/au-en", "atlassian-major.png" ],
    // Cba: [ "https://www.commbank.com.au/about-us/careers.html", "cba-major.png" ],
    Ey: [ "https://www.ey.com/en_au", "EY.gif" ],
    Fdm: [ "https://www.fdmgroup.com/en-au/au-home/", "fdm-group.png" ],
    Google: [ "https://careers.google.com/", "google-major.png" ],
    JaneStreet: [ "https://www.janestreet.com/", "jane-street.png" ],
    McGrathNicol: [ "https://www.mcgrathnicol.com/", "mcgrathcicol-major.png" ],
    Nine: [ "https://www.nineforbrands.com.au/", "nine-major.png" ],
    Optiver: [ "https://www.optiver.com/", "optiver.png" ],
    Pwc: [ "https://www.pwc.com.au/", "pwc-logo-png-transparent.png" ],
    Quantium: [ "https://quantium.com/", "quantium-major.png" ],
    Resmed: [ "https://www.resmed.com.au/", "ResMed.jpg" ],
    Telstra: [ "https://www.telstra.com.au/", "telstra-large.png" ]
  };
  return (
    <div>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/sponsors-header-1.png" title="Sponsors" />

      <div id={styles.sponsorsBody}>
        <p className={styles.subheader}>
					Thank you to our sponsors for generously supporting our cause and collaborating with us to provide
					our students invaluable opportunities.
        </p>

        {/* Principal Sponsors Area */}
        <h2 className={styles.subsponsor}>Principal Sponsors</h2>
        <div id={styles.majorContainer}>
          <a href="https://www.eucalyptus.vc/" target="_blank" rel="noopener noreferrer">
            <img
              className={styles.principal}
              src={process.env.PUBLIC_URL + "/sponsors/2021/euc-logo.png"}
              alt="Eucalyptus"
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
          <h2 className={styles.subsponsor}>Supporter Sponsors</h2>
          <div id={styles.majorContainer}>
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
          <h2 className={styles.subsponsor}>In-Kind Sponsors</h2>

          <div id={styles.majorContainer}>
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

          <p className={styles.subheader}>
            Interested in partnering with us? Contact us at{" "}
            <a className={styles.subheader} href="mailto:externals@unswwit.com">
              externals@unswwit.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Sponsors;
