import React from "react";
import PageHeader from ".././header";
import styles from "./joinUs.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NewsletterForm from "./NewsletterForm";
import { Modal, Backdrop, Fade } from "@material-ui/core";

class JoinUs extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      setOpen: false,
    };
    this.hideSpinner = this.hideSpinner.bind(this);
    this.open = this.open.bind(this);
    this.callbackModal = this.callbackModal.bind(this);

    this.socials = {
      spARC: ["https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371W0xQAE", "sparc.png"],
      "Facebook Page": ["https://www.facebook.com/unsw.wit/", "facebook.png"],
      "Facebook Group": ["https://www.facebook.com/groups/unswwit/", "facebook-group.png"],
      LinkedIn: ["https://www.linkedin.com/company/unsw-women-in-technology/", "linkedin.png"],
      Instagram: ["https://www.instagram.com/wit.unsw/", "instagram.png"],
      Youtube: ["https://www.youtube.com/channel/UCQ8PGe3P4ZuDSNCb9vCeTiw/videos/", "youtube.png"],
      Twitch: ["https://www.twitch.tv/unswwit", "twitch.png"],
      Spotify: ["https://open.spotify.com/show/1iWagdei1mVoyzg8TqbB2P", "spotify.png"],
      Discord: ["https://discord.gg/BWY4tzM326", "discord.png"]
    };
  }

  // hides the loading sign
  hideSpinner() { 
    this.setState({ loading: false });
  }

  open() {
    this.setState({ setOpen: true });
  }

  callbackModal() {
    this.setState({ setOpen: false });
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/join-header-2.jpg" title="Join Us" />
        <h2 className={styles.header}>Connect with us</h2>
        <div className={styles.joinUsBody}>
          <div className={styles.joinUsRight}>
            <div className={styles.joinButtons}>
              {Object.keys(this.socials).map((social, index) => {
                return <a 
                  className={styles.joinLink}
                  key={index}
                  href={this.socials[social][0]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/${this.socials[social][1]}`}
                    alt={social}
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              })}
            </div>
          </div>
          <div className={styles.googleMap}>
            {this.state.loading ? 
              (<CircularProgress
                variant="indeterminate"
                size={50}
                thickness={5}
                id={styles.joinLoading}
              />) : null}
            <iframe
              onLoad={this.hideSpinner}
              title="google-maps"
              width="100%"
              height="350"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=UNSW%20Sydney%20High%20St%20Kensington,%20NSW%202052%20Australia+(UNSW%20Sydney)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
        {/* How to join section */}
        <h2 className={styles.header}>How to join</h2>
        <div className={styles.descriptionHowto}>
          <strong>Interact through social media</strong>
          <p>
            Stay up to date with our latest events, blogs, podcasts, videos and streams 
            through connecting with us through our social media and&nbsp;
            <a 
              href="https://www.facebook.com/groups/unswwit/" 
              className={styles.link}
              target="_blank" 
              rel="noopener noreferrer"
            >
                facebook group
            </a>
            .
          </p>
          <strong>Become a LinkedIn Alumni</strong>
          <p>
            For past and current executives, subcommittee members or speakers at WIT events, 
            our&nbsp;
            <a 
              href="https://www.linkedin.com/groups/12373268/" 
              className={styles.link}
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Alumni network
            </a>
            &nbsp;is available to provide advice and resources for our team to convey through 
            our platform. In joining our Alumni Network, you will also be notified of 
            new opportunities that will enable you to engage with our members.
          </p>
          <strong>Subcommittee Recruitment</strong>
          <p>
            Subcommittee recruitment is open at the beginning of 
            UNSW’s first academic term, in February each year, via our&nbsp;
            <a 
              href="https://www.facebook.com/unsw.wit/" 
              className={styles.link}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Facebook page
            </a>
            . To join, search for our subcommittee Facebook event and fill in the 
            registration form attached to the event. The application closing period 
            varies from year to year.
          </p>
        </div>
        {/* What to join section */}
        <h2 className={styles.header}>What to join</h2>
        <div className={styles.descriptionHowto}>
          <p>
            WIT has several specialised portfolios that you can join as a subcommittee member. 
            Each portfolio is led by our executives. Click one of the portfolios to find out 
            more about the portfolio.
          </p>
        </div>
        {/* Portfolios grid */}
        <div className={styles.whatTo}>
          <div className={styles.edu}>
            Education
          </div>
          <div className={styles.events}>
            Events
          </div>
          <div className={styles.externals}>
            Externals
          </div>
          <div className={styles.hr}>
            HR
          </div>
          <div className={styles.it}>
            IT
          </div>
          <div className={styles.marketing}>
            Marketing
          </div>
        </div>
        {/* FAQ section */}
        <h2 className={styles.header}>FAQ</h2>
        <div className={styles.accordion}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
            >
              <Typography id={styles.accordionHeading}>
                <div className={styles.accordionHeading}>
                  <strong>
                    Can non-female students apply for a subcommittee position?
                  </strong>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordionDetails}>
                Yes, WIT encourages all students who are interested to apply for 
                not just our subcommittee positions but also participate in any of our events. 
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
            >
              <Typography id={styles.accordionHeading}>
                <div className={styles.accordionHeading}>
                  <strong>
                  Do I need a tech background to join? 
                  </strong>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordionDetails}> 
                Not at all! We consider applicants from all degrees, 
                as long as you have a passion for technology. 
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
            >
              <Typography id={styles.accordionHeading}>
                <div className={styles.accordionHeading}>
                  <strong>
                    Do I need any prior experience in the portfolio that I applied?
                  </strong>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordionDetails}>
                No. Although some technical experience for IT and Marketing 
                may be beneficial, it is certainly not required.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
            >
              <Typography id={styles.accordionHeading}>
                <div className={styles.accordionHeading}>
                  <strong>
                    How can I make my application stand out?
                  </strong>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordionDetails}>
                Be enthusiastic! Show us that you are excited to 
                become a part of WIT and tell us how you can contribute unique value to the society.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
            >
              <Typography id={styles.accordionHeading}>
                <div className={styles.accordionHeading}>
                  <strong>
                    What is the time commitment like? 
                  </strong>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordionDetails}>
                Like most societies, the time commitment expected 
                for a subcommittee member will be approximately 2-4 hours per week.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
            >
              <Typography id={styles.accordionHeading}>
                <div className={styles.accordionHeading}>
                  <strong>
                    I’m not in 1st year, can I still join as a subcommittee member?
                  </strong>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordionDetails}>
                Yes, we will consider all applicants regardless of year and stage in degrees. 
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Start of newsletter */}
        <div className={styles.stats}>
          <img
            src={`${process.env.PUBLIC_URL}./stats-background-1.png`}
            className={styles.statsBackground}
            alt="banner"
          />
          <button className={styles.subscribeBtn} onClick={ this.open }>
            Subscribe to our newsletter
          </button>
          <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={styles.signUpForm}
          open={ this.open }
          onClose={ this.callbackModal }
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <>
            <Fade in={ this.open }> 
              <NewsletterForm handleClose={ this.callbackModal } />
            </Fade> 
          </>       
        </Modal>
        </div>
        {/* End of Newsletter */}
      </div>
    );
  }
}

export default JoinUs;
