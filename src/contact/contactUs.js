import React from "react";
import PageHeader from ".././header";
import ContactForm from "./contactForm";
import styles from "./contactUs.module.css";

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/2021-exec-header.jpg" title="Contact Us" />
        <div className={styles.form}>
          <h2 className={styles.inquiry}>Send Through a General Inquiry</h2>
          <div className={styles.formRight}>
            <img
              src={process.env.PUBLIC_URL + "/contact-image.png"}
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
              <img
                src={process.env.PUBLIC_URL + "/icons/pres-icon.png"}
                alt="pres-icon"
              />
              <h3>Gabrielle Younes</h3>
              <a href="mailto:gabrielle@unswwit.com">gabrielle@unswwit.com</a>
              <a href="mailto:president@unswwit.com">president@unswwit.com</a>
            </div>
            <div className={styles.profile2}>
              <img
                src={process.env.PUBLIC_URL + "/icons/pres-icon.png"}
                alt="pres-icon"
              />
              <h3>Vivian Wong</h3>
              <a href="mailto:vivianwong@unswwit.com">vivianwong@unswwit.com</a>
              <a href="mailto:president@unswwit.com">president@unswwit.com</a>
            </div>
            <div className={styles.profile2}>
              <img
                src={process.env.PUBLIC_URL + "/icons/sec-icon.png"}
                alt="sec-icon"
              />
              <h3>Victoria Yu</h3>
              <a href="mailto:victoriayu@unswwit.com">victoriayu@unswwit.com</a>
              <a href="mailto:secretary@unswwit.com">secretary@unswwit.com</a>
            </div>
            <div className={styles.profile2}>
              <img
                src={process.env.PUBLIC_URL + "/icons/tr-icon.png"}
                alt="tr-icon"
              />
              <h3>Connie Shi</h3>
              <a href="mailto:connie@unswwit.com">connie@unswwit.com</a>
              <a href="mailto:treasurer@unswwit.com">treasurer@unswwit.com</a>
            </div>
          </div>

          <hr
            className={[styles.lineBreak, styles.solid].join(" ")}
            width="90%"
          />
          <div className={styles.col3}>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/ev-icon.png"}
                alt="ev-icon"
              />
              <h3>Jane Wang</h3>
              <a href="mailto:jane@unswwit.com">jane@unswwit.com</a>
              <a href="mailto:events@unswwit.com">events@unswwit.com</a>
            </div>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/ev-icon.png"}
                alt="ev-icon"
              />
              <h3>Nishmi Kapoor</h3>
              <a href="mailto:nishmi@unswwit.com">nishmi@unswwit.com</a>
              <a href="mailto:events@unswwit.com">events@unswwit.com</a>
            </div>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/edu-icon.png"}
                alt="edu-icon"
              />
              <h3>Georgie Mansfield</h3>
              <a href="mailto:georgie@unswwit.com">georgie@unswwit.com</a>
              <a href="mailto:education@unswwit.com">education@unswwit.com</a>
            </div>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/ex-icon.png"}
                alt="ex-icon"
              />
              <h3>Srija Mukherjee</h3>
              <a href="mailto:srija@unswwit.com">srija@unswwit.com</a>
              <a href="mailto:externals@unswwit.com">externals@unswwit.com</a>
            </div>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/hr-icon.png"}
                alt="hr-icon"
              />
              <h3>Claire Yu</h3>
              <a href="mailto:claire@unswwit.com">claire@unswwit.com</a>
              <a href="mailto:hr@unswwit.com">hr@unswwit.com</a>
            </div>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/it.png"}
                alt="it-icon"
              />
              <h3>Alana Hua</h3>
              <a href="mailto:alana@unswwit.com">alana@unswwit.com</a>
              <a href="mailto:it@unswwit.com">it@unswwit.com</a>
            </div>
            <div className={styles.profile3}>
              <img
                src={process.env.PUBLIC_URL + "/icons/mark-icon.png"}
                alt="mark-icon"
              />
              <h3>Vy Kim Nguyen</h3>
              <a href="mailto:kim@unswwit.com">Kim@unswwit.com</a>
              <a href="mailto:marketing@unswwit.com">marketing@unswwit.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
