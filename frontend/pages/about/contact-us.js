import React, { useEffect, useState } from "react";
import PageHeader from "../../components/header";
import ContactForm from "./contactForm";
import styles from "../../styles/contactUs.module.css";
import LoadingScreen from "../../components/LoadingScreen";
import Image from "next/image";

const ContactUs = () => {
  const [sourceLoading, setSourceLoading] = useState(true);
  const [headerLoading, setHeaderLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // control when to stop loading
  useEffect(() => {
    setTimeout(() => {
      setSourceLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {sourceLoading && headerLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/2021-exec-header.jpg"
            title="Contact Us"
            imageLoading={setHeaderLoading}
          />
          <div className={styles.form}>
            <h2 className={styles.inquiry}>Send Through a General Inquiry</h2>
            <div className={styles.formRight}>
              <Image
                src={
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? `${"/willow_contact_dark_mode.png"}`
                    : `${"/willow_contact.png"}`
                }
                width="90%"
                height="400px"
                className={styles.centre}
                alt="contact us"
              />
            </div>
            <div className={styles.formLeft}>
              <ContactForm />
            </div>
          </div>

          <h2 className={styles.contactTeam}>CONTACT OUR TEAM</h2>
          <div className={styles.newEmails}>
            <div className={styles.col2}>
              <div className={styles.profile2}>
                <Image
                  src="/icons/pres-icon.png"
                  alt="pres-icon"
                />
                <h3>Jane Wang</h3>
                <a href="mailto:president@unswwit.com">president@unswwit.com</a>
              </div>
              <div className={styles.profile2}>
                <Image
                  src="/icons/pres-icon.png"
                  alt="pres-icon"
                />
                <h3>Nishimi Kapoor</h3>
                <a href="mailto:president@unswwit.com">president@unswwit.com</a>
              </div>
              <div className={styles.profile2}>
                <Image
                  src="/icons/sec-icon.png"
                  alt="sec-icon"
                />
                <h3>Emily Dang</h3>
                <a href="mailto:secretary@unswwit.com">secretary@unswwit.com</a>
              </div>
              <div className={styles.profile2}>
                <Image
                  src="/icons/tr-icon.png"
                  alt="tr-icon"
                />
                <h3>Tiana Douroudis</h3>
                <a href="mailto:treasurer@unswwit.com">treasurer@unswwit.com</a>
              </div>
            </div>

            <hr
              className={[styles.lineBreak, styles.solid].join(" ")}
              width="90%"
            />
            <div className={styles.col3}>
              <div className={styles.profile3}>
                <Image
                  src="/icons/careers-icon.png"
                  alt="careers-icon"
                />
                <h3>Brianna Kim</h3>
                <a href="mailto:careers@unswwit.com">careers@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/careers-icon.png"
                  alt="careers-icon"
                />
                <h3>Vivian Wang</h3>
                <a href="mailto:careers@unswwit.com">careers@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/comps-icon.png"
                  alt="comps-icon"
                />
                <h3>Vivian Wong</h3>
                <a href="mailto:competitions@unswwit.com">competitions@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/ex-icon.png"
                  alt="ex-icon"
                />
                <h3>Gayathri Balaji</h3>
                <a href="mailto:externals@unswwit.com">externals@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/ex-icon.png"
                  alt="ex-icon"
                />
                <h3>Tanisha Dasmohaptra</h3>
                <a href="mailto:externals@unswwit.com">externals@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/hr-icon.png"
                  alt="hr-icon"
                />
                <h3>Emily Chang</h3>
                <a href="mailto:hr@unswwit.com">hr@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/it.png"
                  alt="it-icon"
                />
                <h3>Joanna He</h3>
                <a href="mailto:it@unswwit.com">it@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/mark-icon.png"
                  alt="mark-icon"
                />
                <h3>Abigail Joesan Johan</h3>
                <a href="mailto:marketing@unswwit.com">marketing@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/mark-icon.png"
                  alt="mark-icon"
                />
                <h3>Gabriella Hartanto</h3>
                <a href="mailto:marketing@unswwit.com">marketing@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/media-icon.png"
                  alt="media-icon"
                />
                <h3>Natalie Leroy</h3>
                <a href="mailto:media@unswwit.com">media@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/pubs-icon.png"
                  alt="pubs-icon"
                />
                <h3>Chelsea Chaffey</h3>
                <a href="mailto:publications@unswwit.com">publications@unswwit.com</a>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/pubs-icon.png"
                  alt="pubs-icon"
                />
                <h3>Yuhan Zhou</h3>
                <a href="mailto:publications@unswwit.com">publications@unswwit.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
