import React from "react";
import styles from "./sponsors.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const sponsorsModal = ({ handleClose }) => {

  const majorSponsors = {
    // website, img, type, description
    Accenture: ["https://www.accenture.com/au-en", 
                "accenture.png", 
                "major", 
                "Accenture is a Fortune 500 company that offers Strategy, Consulting, Interactive, Operational and technological solutions and services across 19 industries and over 200 cities around the world. The company offers its management consulting services in customer relationship management, finance and enterprise performance, operations, risk management, strategy, and talent and organization service areas. Accenture is focused on bringing together talent, applying industry expertise, diverse skill sets and next-generation technology to each business challenge, to produce solutions that drive change in the lives of their clients and communities."
               ],
    // Atlassian: ["https://www.accenture.com/au-en", "atlassian-major.png"],
    // Cba: [ "https://www.commbank.com.au/about-us/careers.html", "cba-major.png" ],
    Ey: ["https://www.ey.com/en_au", 
         "EY.gif",
         "major",
         "Your ambition is as bold as ours. To solve the world’s toughest problems. To ask questions that have never been asked before. To innovate, to grow, to learn, to lead, to belong bringing out the best in yourself and in others. Here at EY, you’ll build the tech skillsets and growth mindsets to become the leader you want to be. We’ll provide the culture, the tech, the teams, the scale, the learning and the relationships for you to personalise your career. You’ll learn and innovate here while asking better questions to seek better answers and building a better working world. Together. It’s yours to build."
        ],
    Fdm: ["https://www.fdmgroup.com/en-au/au-home/", 
          "fdm-group.png",
          "major",
          "FDM Group launches careers in tech! We recruit tech potential from all disciplines, train our grads with the skills and knowledge they need, and deploy them out to big name clients as FDM tech consultants to deliver on real world tech solutions. Fast track your tech specialisation with paid training, gain two years experience with a major brand company and then choose your own adventure - with huge demand for tech skills and experience, you choose where you go next!"
         ],
    Google: ["https://careers.google.com/", 
             "google-major.png",
             "major",
             "Larry Page and Sergey Brin founded Google in September 1998 with a mission “to organise the world’s information and make it universally accessible and useful”. Since then, Google has grown to more than 130, 000 employees worldwide, with a wide range of popular products and platforms like Search, Maps, Cloud, Ads, Gmail, Android, the Assistant, Made by Google devices and YouTube."
            ],
    JaneStreet: ["https://www.janestreet.com/", 
                 "jane-street.png",
                 "major",
                 "Jane Street is a proprietary trading firm that operates around the clock and around the globe focusing primarily on equities and equity derivatives. Founded in 2000, Jane Street has offices in New York, London, Amsterdam and Hong Kong. The environment at Jane Street is open, informal, intellectual and fun. You can wear a t-shirt and jeans to the office every day, the kitchen is stocked, and discussions are always lively. Teaching and learning are central activities through classes, mentoring and discussion."
                ],
    McGrathNicol: ["https://www.mcgrathnicol.com/", 
                   "mcgrathcicol-major.png",
                   "major",
                   "McGrathNicol is a specialist Advisory and Restructuring firm.  Their experts work with corporates, banks, law firms, private companies and government across all industry sectors and business sizes to deliver valuable advice and high-quality outcomes.  McGrathNicol’s Technology team specialise in complex forensic investigations, time critical cybersecurity incident response activities and helping our clients to design strategies and implement frameworks to mitigate digital and information risk.  To gain insight into the type of work they do, check out their Technology virtual experience at Forage."
                  ],
    Nine: ["https://www.nineforbrands.com.au/", 
           "nine-major.png",
           "major",
           "Nine is Australia’s largest locally owned media company and the home of Australia’s most trusted and popular brands spanning news, business and finance, lifestyle, entertainment and sport. Nine News, The Sydney Morning Herald, 9Now, The Age and The Australian Financial Review are among many of the brands, reaching millions of users everyday and providing significant opportunities for Nine employees to be involved in solving challenging and interesting problems."
          ],
    Optiver: ["https://www.optiver.com/", 
              "optiver.png",
              "major",
              "Optiver is a proprietary trading firm with nine locations across Europe, Asia-Pacific and North America.  Powered by technological might and guided by intellectual rigor, we trade our own money, at our own risk for our own reward.  But not solely for our own benefit.  By offering competitive, two sided prices to buyers and sellers, we provide liquidity and inject stability into the world’s financial markets.  That’s good for all markets participants, from financial pros to the pensioner next door."
              ],
    Pwc: ["https://www.pwc.com.au/",
          "pwc-logo-png-transparent.png",
          "major",
          "In an increasingly complex world, PwC works with businesses, Government and the community to help Australia continue to thrive and grow. PwC Australia delivers quality in audit, assurance, consulting and tax services to more than 5,000 clients. We’re part of a network of firms in 158 countries with over 250,000 people. PwC is one of the top 50 brands worldwide and PwC Australia is among LinkedIn’s top companies for where Australians want to work. We are bold about our commitment to diversity and inclusion, and we empower flexible working. Our purpose is to build trust in society and solve important problems. We believe the most important problems are better solved together. PwC is a powerful multiplier of connections and innovation. It’s what we do best: connecting people, businesses, technology and ideas to solve important problems. At PwC, we call this The Together Effect."
         ],
    Quantium: ["https://quantium.com/", 
               "quantium-major.png",
               "major",
               "Quantium is Australia’s leading data science company working with iconic brand in over 20 countries. We combine a diverse team of experts all dedicated to harnessing the power of data to drive transformational outcomes for our clients. Working across 11 offices worldwide and 12 different industries, we truly believe data is the footprint of human behaviour and our unique analytical capability helps organisations be more responsive to the people they serve. We believe in data powering possibilities."
              ],
    Resmed: ["https://www.resmed.com.au/", 
             "ResMed.jpg",
             "major",
             "ResMed is a global leader in sleep technology that aspires to provide people with the means to awaken their best and enjoy healthier lives by promoting good sleep habits and creating awareness for sleep disorders such as sleep apnea. With 7,500 employees and a presence in over 140 countries, ResMed’s world leading products and treatments improve the quality of life for millions of patients globally, reducing the impact of chronic disease and saving healthcare costs."
            ],
    // Telstra: ["https://www.telstra.com.au/", "telstra-large.png"],
  };




  return (
    <div className={styles.paper}>
      <IconButton aria-label="close newsletter subscribe form" onClick={handleClose} className={styles.closeBtn}>
        <CloseIcon className={styles.closeSymbol}/>
      </IconButton>     
      <br />
      <br />
      {Object.keys(majorSponsors)
            .sort()
            .map((key, index) => (
              <>
                <img className={styles.sponsorImage}
                  src={`${process.env.PUBLIC_URL}/sponsors/2021/${majorSponsors[key][1]}`}
                  alt={key}
                />
                <h1 className={styles.sponsorType}>MAJOR SPONSOR</h1>
                <div className={styles.inLine}>
                  <p className={styles.sponsorWebsite}>Website: </p>
                  <a className={styles.sponsorLink} href={majorSponsors[key][0]} target="_blank" rel="noopener noreferrer">{majorSponsors[key][0]}</a>
                </div>
                <p className={styles.sponsorDescription}>{majorSponsors[key][3]} </p>
              </>
            ))}
      
    </div>
  );
};

export default sponsorsModal;
