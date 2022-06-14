import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "semantic-ui-react";
import styles from "../../styles/sponsors.module.css";
import PageHeader from "../../components/header";
import SponsorsModal from "../../components/sponsorsModal";
import LoadingScreen from "../../components/LoadingScreen";
import { sponsors, affiliations, partnerships } from "../../components/sponsorData";
import Image from "next/image";

function Sponsors() {
  const [open, setOpen] = React.useState(false);
  const [currSponsor, setCurrSponsor] = React.useState("");
  const [sourceLoading, setSourceLoading] = React.useState(true);
  const [headerLoading, setHeaderLoading] = React.useState(true);

  // control when to stop loading
  useEffect(() => {
    setTimeout((loading) => {
      if (!loading) {
        setSourceLoading(false);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const callbackModal = () => {
    setOpen(false);
  };

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/sponsors-header-2.jpg"
            title="Sponsors and Affiliations"
            imageLoading={setHeaderLoading}
          />

          <div id={styles.sponsorsBody}>
            <p className={styles.subheader}>
              Thank you to our sponsors for generously supporting our cause and
              collaborating with us to provide our students invaluable
              opportunities.
            </p>

            <p className={styles.subheader}>
              Interested in partnering with us? Contact us at{" "}
              <a
                className={styles.subheader}
                href="mailto:externals@unswwit.com"
              >
                externals@unswwit.com
              </a>
            </p>

            {/* Start of Diamond Sponsors Section */}
            <h2 className={styles.subsponsor}>Diamond Sponsors</h2>
            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "DIAMOND")
                .map((key, _) => (
                  <Image
                    className={styles.logo}
                    src={
                      window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? `/sponsors/2022/dark-mode/${sponsors[key][2]}`
                        : `/sponsors/2022/${sponsors[key][2]}`
                    }
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                    width="206px"
                    height="74px"
                  />
                ))}
            </div>
            {/* End of Diamond sponsors section */}

            {/* Start of Gold Sponsors Section */}
            <h2 className={styles.subsponsor}>Gold Sponsors</h2>

            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "GOLD")
                .map((key, _) => (
                  <Image
                    className={styles.logo}
                    src={
                      window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? `/sponsors/2022/dark-mode/${sponsors[key][2]}`
                        : `/sponsors/2022/${sponsors[key][2]}`
                    }
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                    width="206px"
                    height="74px"
                  />
                ))}
            </div>
            {/* End of Gold Sponsors Section */}

            {/* Start of Silver Sponsors Section */}
            <h2 className={styles.subsponsor}>Silver Sponsors</h2>

            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "SILVER")
                .map((key, _) => (
                  <Image
                    className={styles.logo}
                    src={
                      window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? `/sponsors/2022/dark-mode/${sponsors[key][2]}`
                        : `/sponsors/2022/${sponsors[key][2]}`
                    }
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                    width="206px"
                    height="74px"
                  />
                ))}
            </div>
            {/* End of Silver Sponsors Section */}

            {/* Start of Bronze Sponsors Section */}
            <h2 className={styles.subsponsor}>Bronze Sponsors</h2>

            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "BRONZE")
                .map((key, _) => (
                  <Image
                    className={styles.logo}
                    src={
                      window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? `/sponsors/2022/dark-mode/${sponsors[key][2]}`
                        : `/sponsors/2022/${sponsors[key][2]}`
                    }
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                    width="206px"
                    height="74px"
                  />
                ))}
            </div>
            {/* End of Bronze Sponsors Section */}

            {/* Start of Affliations Section */}
            <h2 className={styles.subsponsor}>Affiliations</h2>

            <div id={styles.majorContainer}>
              {Object.keys(affiliations)
                .sort()
                .map((key, index) => (
                  <a
                    key={index}
                    href={affiliations[key][0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.logo}
                      src={
                        window.matchMedia &&
                        window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
                          ? `/affiliations/dark-mode/${affiliations[key][1]}`
                          : `/affiliations/${affiliations[key][1]}`
                      }
                      alt={key}
                      width="206px"
                      height="74px"
                    />
                  </a>
                ))}
            </div>
            {/* End of Affliations Section*/}

            {/* Start of Partnerships Section */}
            <h2 className={styles.subsponsor}>Partnerships</h2>
            <div id={styles.majorContainer}>
              {Object.keys(partnerships)
                .sort()
                .map((key, index) => (
                  <a
                    key={index}
                    href={partnerships[key][0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.logo}
                      src={
                        window.matchMedia &&
                        window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
                          ? `/partnerships/dark-mode/${partnerships[key][1]}`
                          : `/partnerships/${partnerships[key][1]}`
                      }
                      alt={key}
                      width="206px"
                      height="74px"
                    />
                  </a>
                ))}
            </div>
            {/* End of Partnerships */}
          </div>

          {/* Start of Modal */}
          <div className={styles.modalContainer}>
            <Modal
              className={styles.modal}
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={() => setOpen(false)}
              trigger={<Button>Scrolling Content Modal</Button>}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <>
                <Fade in={open}>
                  <SponsorsModal
                    sponsors={sponsors}
                    handleClose={callbackModal}
                    sponsorName={currSponsor}
                  />
                </Fade>
              </>
            </Modal>
          </div>
          {/* End of Modal */}
        </div>
      )}
    </div>
  );
}

export default Sponsors;
