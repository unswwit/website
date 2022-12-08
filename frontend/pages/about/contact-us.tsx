// @ts-nocheck comment
import { useEffect, useState } from 'react';
import PageHeader from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import styles from '../../styles/ContactUs.module.css';
import LoadingScreen from '../../components/LoadingScreen';
import Image from 'next/image';
import Link from 'next/link';

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
                  window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? `${'/willow_contact_dark_mode.png'}`
                    : `${'/willow_contact.png'}`
                }
                width="315px"
                height="415px"
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
                  width="50px"
                  height="50px"
                />
                <h3>Jane Wang</h3>
                <Link href="mailto:president@unswwit.com">
                  <a>president@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile2}>
                <Image
                  src="/icons/pres-icon.png"
                  alt="pres-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Nishimi Kapoor</h3>
                <Link href="mailto:president@unswwit.com">
                  <a>president@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile2}>
                <Image
                  src="/icons/sec-icon.png"
                  alt="sec-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Emily Dang</h3>
                <Link href="mailto:secretary@unswwit.com">
                  <a>secretary@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile2}>
                <Image
                  src="/icons/tr-icon.png"
                  alt="tr-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Tiana Douroudis</h3>
                <Link href="mailto:treasurer@unswwit.com">
                  <a>treasurer@unswwit.com</a>
                </Link>
              </div>
            </div>

            <hr
              className={[styles.lineBreak, styles.solid].join(' ')}
              width="90%"
            />
            <div className={styles.col3}>
              <div className={styles.profile3}>
                <Image
                  src="/icons/careers-icon.png"
                  alt="careers-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Brianna Kim</h3>
                <Link href="mailto:careers@unswwit.com">
                  <a>careers@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/careers-icon.png"
                  alt="careers-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Vivian Wang</h3>
                <Link href="mailto:careers@unswwit.com">
                  <a>careers@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/comps-icon.png"
                  alt="comps-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Vivian Wong</h3>
                <Link href="mailto:competitions@unswwit.com">
                  <a>competitions@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/ex-icon.png"
                  alt="ex-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Gayathri Balaji</h3>
                <Link href="mailto:externals@unswwit.com">
                  <a>externals@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/ex-icon.png"
                  alt="ex-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Tanisha Dasmohaptra</h3>
                <Link href="mailto:externals@unswwit.com">
                  <a>externals@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/hr-icon.png"
                  alt="hr-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Emily Chang</h3>
                <Link href="mailto:hr@unswwit.com">
                  <a>hr@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/it.png"
                  alt="it-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Joanna He</h3>
                <Link href="mailto:it@unswwit.com">
                  <a>it@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/mark-icon.png"
                  alt="mark-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Abigail Joesan Johan</h3>
                <Link href="mailto:marketing@unswwit.com">
                  <a>marketing@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/mark-icon.png"
                  alt="mark-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Gabriella Hartanto</h3>
                <Link href="mailto:marketing@unswwit.com">
                  <a>marketing@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/media-icon.png"
                  alt="media-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Natalie Leroy</h3>
                <Link href="mailto:media@unswwit.com">
                  <a>media@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/pubs-icon.png"
                  alt="pubs-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Chelsea Chaffey</h3>
                <Link href="mailto:publications@unswwit.com">
                  <a>publications@unswwit.com</a>
                </Link>
              </div>
              <div className={styles.profile3}>
                <Image
                  src="/icons/pubs-icon.png"
                  alt="pubs-icon"
                  width="50px"
                  height="50px"
                />
                <h3>Yuhan Zhou</h3>
                <Link href="mailto:publications@unswwit.com">
                  <a>publications@unswwit.com</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
