import React, { useEffect } from "react";
import styles from "./sponsors.module.css";
import PageHeader from ".././header";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import SponsorsModal from "./sponsorsModal";
import LoadingScreen from "../LoadingScreen";

const Sponsors = () => {
  const [open, setOpen] = React.useState(false);
  const [currSponsor, setCurrSponsor] = React.useState("");
  const [sourceLoading, setSourceLoading] = React.useState(true);

  // control when to stop loading
  useEffect(() => {
    setTimeout((loading) => {
      if (!loading) {
        setSourceLoading(false);
      }
    }, 1000);
  }, []);

  // Getting the eucalyptus description
  const eucalyptusDescription = () => {
    return (
      <>
        Eucalyptus is a pioneer in telehealth, making a significant mark on the
        industry through their house of online healthcare brands. This fast
        growing startup has built a patient-centric technology platform that
        powers{" "}
        <a
          className={styles.link}
          href="https://pilot.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pilot
        </a>{" "}
        (a medical health navigator for men),{" "}
        <a
          className={styles.link}
          href="https://kinfertility.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kin
        </a>{" "}
        (subscription service delivering the contraceptive pill to your door and
        services for the fertility journey),{" "}
        <a
          className={styles.link}
          href="https://skin.software/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software
        </a>{" "}
        (personalised skincare) and{" "}
        <a
          className={styles.link}
          href="http://itsnormal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Normal
        </a>{" "}
        (sexual wellness).
      </>
    );
  };

  // Getting the eucalyptus description
  const mcGrathNicolDescription = () => {
    return (
      <>
        McGrathNicol is a specialist Advisory and Restructuring firm. Their
        experts work with corporates, banks, law firms, private companies and
        government across all industry sectors and business sizes to deliver
        valuable advice and high-quality outcomes. McGrathNicol’s Technology
        team specialise in complex forensic investigations, time critical
        cybersecurity incident response activities and helping our clients to
        design strategies and implement frameworks to mitigate digital and
        information risk. To gain insight into the type of work they do, check
        out their Technology virtual experience at{" "}
        <a
          className={styles.link}
          href="https://www.theforage.com/show-firm-programs/oiHtSBFcPM2KnaEGJ/McGrathNicol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forage
        </a>
        .
      </>
    );
  };

  // Getting EY description
  const eyDescription = () => {
    return (
      <>
        <p>
          Your ambition is as bold as ours. To solve the world’s toughest
          problems. To ask questions that have never been asked before. To
          innovate, to grow, to learn, to lead, to belong bringing out the best
          in yourself and in others.
        </p>
        <p>
          Here at EY, you’ll build the tech skillsets and growth mindsets to
          become the leader you want to be.
        </p>
        <p>
          We’ll provide the culture, the tech, the teams, the scale, the
          learning and the relationships for you to personalise your career.
        </p>
        <p>
          You’ll learn and innovate here while asking better questions to seek
          better answers and building a better working world. Together.
        </p>
        <p>It’s yours to build.</p>
      </>
    );
  };

  // Getting FDM description
  const fdmDescription = () => {
    return (
      <>
        <p>
          FDM Group launches careers in tech! We recruit tech potential from all
          disciplines, train our grads with the skills and knowledge they need,
          and deploy them out to big name clients as FDM tech consultants to
          deliver on real world tech solutions.
        </p>
        <p>
          Fast track your tech specialisation with paid training, gain two years
          experience with a major brand company and then choose your own
          adventure - with huge demand for tech skills and experience, you
          choose where you go next!
        </p>
      </>
    );
  };

  // Getting PWC description
  const pwcDescription = () => {
    return (
      <>
        In an increasingly complex world, PwC works with businesses, Government
        and the community to help Australia continue to thrive and grow.
        <br />
        PwC Australia delivers quality in audit, assurance, consulting and tax
        services to more than 5,000 clients.
        <br />
        We’re part of a network of firms in 158 countries with over 250,000
        people. PwC is one of the top 50 brands worldwide and PwC Australia is
        among LinkedIn’s top companies for where Australians want to work.
        <br />
        We are bold about our commitment to diversity and inclusion, and we
        empower flexible working.
        <br />
        Our purpose is to build trust in society and solve important problems.
        <br />
        <br />
        <p>At PwC, we call this The Together Effect.</p>
      </>
    );
  };

  // Getting Amstelveen description
  const amstelveenDescription = () => {
    return (
      <>
        <p>
          Amstelveen is a specialist provider of risk, assurance, performance,
          and technology expertise, operating across numerous business sectors.
          At our core, we work with our clients to help them make risk-informed
          strategic choices and raise the bar in risk and compliance; like by
          building a new risk strategy, performing project technology reviews,
          or helping them drive digital transformation.
        </p>
        <p>
          Our strong relationships with our clients are reflected in their
          continued trust in the delivery of our work and our rapid growth, with
          Amstelveen making AFR’s Fast Starters lists in FY18 and FY19!
        </p>
      </>
    );
  };

  // Getting Cochlear description
  const cochlearDescription = () => {
    return (
      <>
        Cochlear’s mission is to help people hear and be heard. As the global
        leader in implantable hearing solutions, Cochlear is dedicated to
        helping people with moderate to profound hearing loss experience a life
        full of hearing. We aim to give people the best lifelong hearing
        experience and access to innovative future technologies. We collaborate
        with the industry’s best clinical, research and support networks. That’s
        why more people choose Cochlear than any other hearing implant company.
        Learn and grow with us as we tackle the most complex challenges in
        helping people to
        <em>
          <strong> Hear Now. And Always.</strong>
        </em>
      </>
    );
  };

  const sponsors = {
    // name, website, img, type, description
    Accenture: [
      "Accenture",
      "https://www.accenture.com/au-en",
      "accenture.png",
      "MAJOR",
      "Accenture is a Fortune 500 company that offers Strategy, Consulting, Interactive, Operational and technological solutions and services across 19 industries and over 200 cities around the world. The company offers its management consulting services in customer relationship management, finance and enterprise performance, operations, risk management, strategy, and talent and organization service areas. Accenture is focused on bringing together talent, applying industry expertise, diverse skill sets and next-generation technology to each business challenge, to produce solutions that drive change in the lives of their clients and communities.",
    ],
    Airwallex: [
      "Airwallex",
      "https://www.airwallex.com/au",
      "Airwallex.png",
      "MAJOR",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
    Atlassian: [
      "Atlassian",
      "https://www.atlassian.com/au-en",
      "atlassian-major.png",
      "MAJOR",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
    Appian: [
      "Appian",
      "https://appian.com/",
      "appian_2021.jpg",
      "MAJOR",
      "Appian helps organisations build apps and workflows rapidly, with a low-code automation platform. Combining people, technologies, and data in a single workflow, Appian can help companies maximise their resources and improve business results. Our employees create opportunities to drive hands-on impact both with our customers and throughout the organisation, which creates an environment where meaningful work is met with career growth and opportunity. ",
    ],
    Amstelveen: [
      "Amstelveen",
      "https://amstelveen.com/",
      "Amstelveen_notchecked.png",
      "MAJOR",
      amstelveenDescription(),
    ],
    Canva: [
      "Canva",
      "https://www.canva.com/en_au/",
      "canva_notchecked.png",
      "IN-KIND",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
    Cochlear: [
      "Cochlear",
      "https://www.cochlear.com/au/en/home",
      "cochlear.png",
      "SUPPORTER",
      cochlearDescription(),
    ],
    Commonwealth: [
      "Commonwealth Bank (CBA)",
      "https://www.commbank.com.au/about-us/careers.html",
      "2021_commbank.jpg",
      "MAJOR",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
    Eucalyptus: [
      "Eucalyptus",
      "https://www.eucalyptus.vc/",
      "euc-logo.png",
      "PRINCIPAL",
      eucalyptusDescription(),
    ],
    EY: ["EY", "https://www.ey.com/en_au", "EY.gif", "MAJOR", eyDescription()],
    Fdm: [
      "FDM Group",
      "https://www.fdmgroup.com/en-au/au-home/",
      "fdm-group.png",
      "MAJOR",
      fdmDescription(),
    ],
    Google: [
      "Google",
      "https://careers.google.com/",
      "google-major.png",
      "MAJOR",
      "Larry Page and Sergey Brin founded Google in September 1998 with a mission “to organise the world’s information and make it universally accessible and useful”. Since then, Google has grown to more than 130, 000 employees worldwide, with a wide range of popular products and platforms like Search, Maps, Cloud, Ads, Gmail, Android, the Assistant, Made by Google devices and YouTube.",
    ],
    JaneStreet: [
      "JaneStreet",
      "https://www.janestreet.com/",
      "jane-street.png",
      "MAJOR",
      "Jane Street is a proprietary trading firm that operates around the clock and around the globe focusing primarily on equities and equity derivatives. Founded in 2000, Jane Street has offices in New York, London, Amsterdam and Hong Kong. The environment at Jane Street is open, informal, intellectual and fun. You can wear a t-shirt and jeans to the office every day, the kitchen is stocked, and discussions are always lively. Teaching and learning are central activities through classes, mentoring and discussion.",
    ],
    McGrathNicol: [
      "McGrathNicol",
      "https://www.mcgrathnicol.com/",
      "mcgrathcicol-major.png",
      "MAJOR",
      mcGrathNicolDescription(),
    ],
    Microsoft: [
      "Microsoft",
      "https://www.microsoft.com/en-au",
      "microsoft_notchecked.png",
      "MAJOR",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
    Nine: [
      "Nine",
      "https://www.nineforbrands.com.au/",
      "nine-major.png",
      "MAJOR",
      "Nine is Australia’s largest locally owned media company and the home of Australia’s most trusted and popular brands spanning news, business and finance, lifestyle, entertainment and sport. Nine News, The Sydney Morning Herald, 9Now, The Age and The Australian Financial Review are among many of the brands, reaching millions of users everyday and providing significant opportunities for Nine employees to be involved in solving challenging and interesting problems.",
    ],
    Optiver: [
      "Optiver",
      "https://www.optiver.com/",
      "optiver.png",
      "MAJOR",
      "Optiver is a proprietary trading firm with nine locations across Europe, Asia-Pacific and North America.  Powered by technological might and guided by intellectual rigor, we trade our own money, at our own risk for our own reward.  But not solely for our own benefit.  By offering competitive, two sided prices to buyers and sellers, we provide liquidity and inject stability into the world’s financial markets.  That’s good for all markets participants, from financial pros to the pensioner next door.",
    ],
    Pwc: [
      "Pwc",
      "https://www.pwc.com.au/",
      "pwc-logo-png-transparent.png",
      "MAJOR",
      pwcDescription(),
    ],
    Quantium: [
      "Quantium",
      "https://quantium.com/",
      "quantium-major.png",
      "MAJOR",
      "Quantium is Australia’s leading data science company working with iconic brand in over 20 countries. We combine a diverse team of experts all dedicated to harnessing the power of data to drive transformational outcomes for our clients. Working across 11 offices worldwide and 12 different industries, we truly believe data is the footprint of human behaviour and our unique analytical capability helps organisations be more responsive to the people they serve. We believe in data powering possibilities.",
    ],
    Resmed: [
      "Resmed",
      "https://www.resmed.com.au/",
      "ResMed.jpg",
      "MAJOR",
      "ResMed is a global leader in sleep technology that aspires to provide people with the means to awaken their best and enjoy healthier lives by promoting good sleep habits and creating awareness for sleep disorders such as sleep apnea. With 7,500 employees and a presence in over 140 countries, ResMed’s world leading products and treatments improve the quality of life for millions of patients globally, reducing the impact of chronic disease and saving healthcare costs.",
    ],
    Telstra: [
      "Telstra",
      "https://www.telstra.com.au/",
      "Telstra-large.png",
      "MAJOR",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
    VMware: [
      "VMware",
      "https://www.vmware.com/au.html",
      "VMware-Logo.png",
      "MAJOR",
      "VMware provides the essential software foundation for customers’ digital transformations. We help customers move to the cloud – and back if they want to. We are at the forefront of the industry with breakthrough innovations in IoT, machine learning, blockchain, 5G and other emerging technologies which will take us through the next century. We are committed to solving our customers toughest challenges whilst making a positive global impact and using tech for good to benefit our people and our planet.",
    ],
    WooliesX: [
      "WooliesX",
      "https://wooliesx.com.au/",
      "WooliesX.png",
      "MAJOR",
      "More information will be added shortly! Check out the above website for now for more information about our sponsor!",
    ],
  };

  const affiliations = {
    Arc: ["https://www.arc.unsw.edu.au/", "arc.png"],
    "Business School": [
      "https://www.unsw.edu.au/business/",
      "business_school.png",
    ],
    "Engineering Faculty": ["https://www.unsw.edu.au/engineering/", "eng.png"],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const callbackModal = () => {
    setOpen(false);
  };

  return (
    <div>
      {sourceLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {/* Cover Photo */}
          <PageHeader
            imgUrl="/headers/sponsors-header-2.jpg"
            title="Sponsors and Affiliations"
          />

          <div id={styles.sponsorsBody}>
            <p className={styles.subheader}>
              Thank you to our sponsors for generously supporting our cause and
              collaborating with us to provide our students invaluable
              opportunities.
            </p>

            {/* Principal Sponsors Area */}
            <h2 className={styles.subsponsor}>Principal Sponsors</h2>
            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "PRINCIPAL")
                .map((key, _) => (
                  <img
                    className={styles.principal}
                    src={`${process.env.PUBLIC_URL}/sponsors/2021/${sponsors[key][2]}`}
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                  />
                ))}
            </div>

            {/* Major Sponsors Area */}
            <h2 className={styles.subsponsor}>Major Sponsors</h2>

            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "MAJOR")
                .map((key, _) => (
                  <img
                    className={styles.major}
                    src={`${process.env.PUBLIC_URL}/sponsors/2021/${sponsors[key][2]}`}
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                  />
                ))}
            </div>

            {/* Supporter Sponsors Area */}
            <h2 className={styles.subsponsor}>Supporter Sponsors</h2>

            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "SUPPORTER")
                .map((key, _) => (
                  <img
                    className={styles.supporter}
                    src={`${process.env.PUBLIC_URL}/sponsors/2021/${sponsors[key][2]}`}
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                  />
                ))}
            </div>

            {/* In-Kind Sponsors Area */}
            <h2 className={styles.subsponsor}>In-Kind Sponsors</h2>

            <div id={styles.majorContainer}>
              {Object.keys(sponsors)
                .sort()
                .filter((key) => sponsors[key][3] === "IN-KIND")
                .map((key, _) => (
                  <img
                    className={styles.supportInKind}
                    src={`${process.env.PUBLIC_URL}/sponsors/2021/${sponsors[key][2]}`}
                    alt={key}
                    onClick={() => {
                      setOpen(true);
                      setCurrSponsor(key);
                    }}
                    key={key}
                  />
                ))}
            </div>

            {/* Affiliations Area */}
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
                    <img
                      className={styles.affiliations}
                      src={`${process.env.PUBLIC_URL}/affiliations/${affiliations[key][1]}`}
                      alt={key}
                    />
                  </a>
                ))}
            </div>

            <p className={styles.subheader}>
              Interested in partnering with us? Contact us at{" "}
              <a
                className={styles.subheader}
                href="mailto:externals@unswwit.com"
              >
                externals@unswwit.com
              </a>
            </p>
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
};

export default Sponsors;
