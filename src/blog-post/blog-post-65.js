import React, { Component } from "react";
import { Link } from "react-router-dom";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost65 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #65" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Is Data Privacy Taken for Granted?
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 15, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Ever heard of Big Data? Well, they are large sets of unstructured,
              complex information containing greater variety, volumes, and
              velocity! In today’s interconnected world, mass amounts of “Big
              Data” are coming together in smaller footprints to expand
              exponentially, however, with the revolution and presence of
              computational algorithms to discover intrinsic, microscopic
              information, <b>data privacy</b> for individuals and businesses
              arises.
            </p>

            <p className={styles.postContent}>
              It is difficult to remain anonymous when your activities are
              constantly monitored by data everywhere. As users of social media,
              web browsers, smart devices, we expose our vulnerabilities to
              cyber threats unknowingly. Nowadays, it is “completely okay” to
              share information online as means of engaging with global
              happenings and performing transactions. Therefore, data privacy is
              not effectively addressed by public institutions despite having
              robust safeguards in place and I believe many of us should start
              taking our data privacy more seriously.
            </p>
            <br />

            <p className={styles.question}>
              Data Privacy is Everyone’s Concern
            </p>

            <p className={styles.postContent}>
              How much personal data should be shared online? Although we are
              adapting to the technological shift, the fear of being
              CYBER-ATTACKED still lingers. With the risk of computer viruses,
              hackers, and malfunctioning systems leaking data to the public,
              there is digital unrest as our privacy is significantly
              compromised.
            </p>

            <p className={styles.postContent}>
              Integrated technologies like Cloud Computing, Artificial
              Intelligence, and Internet of Things leverage the collection,
              storage and analysis of large datasets pooled from populations.
              This indicates regardless of commercial, medical, or political
              purposes, some of our data is already exploited without seeking
              permission first.
            </p>

            <p className={styles.postContent}>
              Accessing web browsers and various applications, pop-up site
              cookies are always requesting to accept data collection on their
              webpages. Sure! We are given the option of restricting it, but
              many of us tend to proceed as some sites only display contents if
              the ‘allow’ option is clicked. Hence, despite many advertising
              claims of data privacy assurance, how much protection rights and
              ownership do we actually have control over our data?
            </p>
            <br />

            <p className={styles.question}>
              Current Technologies and Legal Policies
            </p>

            <p className={styles.postContent}>
              Perhaps we should also ask ourselves: Is our data privacy taken
              for granted? If so, what can we do about it?
            </p>

            <p className={styles.postContent}>
              Legal frameworks such as Personal Data Protection, T&amp;Cs
              agreements, compliance checks entail stringent regulations around
              the professional use of personal data and obligation to preserve
              for appropriate business uses which are mainly centered around
              data sovereignty - in compliance with assigned guidelines.
              Personally, this assures that our data privacy is well managed
              since there is proof of authorized documentation. For technology,
              there are security tools such as encryption, multi-factor
              authentication, secured repositories, tokenization, cloud
              protection, data access governance, and much more.
            </p>

            <p className={styles.postContent}>
              Experts have adopted a data-centric approach in ensuring data is
              securely protected from cybercriminals and confidential policies
              remain in effect. However, data privacy is inevitably exploited
              for public use within some institutions. Personal data is nearly
              impossible to be retained and our data privacy is bound to be
              taken for granted.
            </p>

            <p className={styles.postContent}>
              Take the example of 2 largest data breaches:
            </p>
            <p className={styles.postContent}>
              <ol type="1">
                <li>
                  Yahoo 2013 incident disclosing 3 billion user accounts
                  including names, date of birth, email addresses, and
                  passcodes, significantly resulting in over $350 million
                  valuation losses.
                </li>
                <li>
                  Facebook 2017 incident reporting 533 million user accounts
                  stolen and exposed online, resulting in $5 billion settlement.
                </li>
              </ol>
            </p>

            <p className={styles.postContent}>
              Data breaches are also found in other large companies, perhaps
              making us feel skeptical, frantic, vulnerable, and questioning the
              reliability of data protection services! How can they guarantee
              substantial confidentiality? Do they preserve data seriously?
            </p>

            <p className={styles.postContent}>
              On one hand, we can vent out frustrations and anger towards the
              liable institutions. Alternatively, we should recognise that
              technology and human practices are not perfect. There are
              occasional flaws that cyberattacks can penetrate through and the
              only solution is to constantly enhance existing security systems
              and polish data regulations.
            </p>
            <br />

            <p className={styles.question}>
              Recommendations for Data Confidentiality
            </p>

            <p className={styles.postContent}>
              The proliferation of cybercrime activities prevails among the
              internet community as more and more people become digitally savvy.
              In data privacy, there are 4 mitigation strategies to reduce
              likelihood of information compromise for businesses:
            </p>
            <p className={styles.postContent}>
              <ol type="1">
                <li>
                  Businesses need to remain vigilant and invest in security
                  teams that can learn latest technology with consistent
                  training support. It is also great to have multiple data
                  copies stored in numerous locations within companies.
                </li>
                <li>
                  Businesses can deploy monitoring technology and penetration
                  testing to identify external sources of data inflows and
                  credibility.
                </li>
                <li>
                  Construct redundancy plan for backup data storage and
                  antivirus software, endpoint protection procedures at all
                  times.
                </li>
                <li>
                  Strict compliance audits and risk assessments will oversee
                  company devices and alert any suspicious activities during or
                  after work hours.
                </li>
              </ol>
            </p>

            <p className={styles.postContent}>
              Individually, we can minimise personal attacks by using strong
              passwords, screening for fraudulent websites by checking if the
              website URL shows “HTTPS”. Most importantly, set up account alerts
              in applications and purchase antivirus credible VPN protection
              packages for your devices.
            </p>

            <p className={styles.postContent}>
              Overall each of us have a role to play in ensuring our own data
              confidentiality and with the rapid advancement of technology,
              lurking cyber threats will become smarter and harder to detect. It
              is important that all of us stay aware, updated and informed about
              the available security protection methods to prevent us from
              becoming cyber-victims.
            </p>

            <p className={styles.postContent}>
              <i>
                Want more tips on staying secure? Check out{" "}
                <Link to="/media/blog/50">this blog!</Link>
              </i>
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "erika-shi": [
              "/potraits/blog-authors/erika-shi.png",
              styles.anonProfile,
              "Erika Shi",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost65;
