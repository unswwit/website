import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost50 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #50" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>You’re Insecure (And You Might Not Know)</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>April 6, 2021</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
             A suspicious link has been sent to you by one of your close friends on Facebook. You’re tired and without thinking, you click it. The website is taking quite a while to load, and it registers that your friend might be hacked. Quickly, you exit the page and clear your browsing history. Phew. That was a close one. But little did you realise; it’s too late.
            </p>
            <p className={styles.postContent}>
             You’ve compromised your data. You’re insecure.
            </p>
            <p className={styles.postContent}>
             Insecurities and scams come in various forms and are disguised on the Internet. The example above is a type of phishing link cyber-attack. These are cybercrimes, forcing information from someone; personal details, banking credentials and more.
            </p>
            <p className={styles.postContent}>
             We are all digital citizens and must be aware of our digital footprint so even if information is leaked, we are able to trace our tracks. We all have an Internet connection IP address associated with our “machine name.” The string of information is permanently attached to you and may disclose your geographic location. If the machine name is only a version of the IP address, there’s less concern but often, that is not the case. It follows you. Most companies have cybersecurity teams to help secure information but what can we do as an individual?
            </p>
            <br />

            <p className={styles.postSubheading}>
              <strong>How to Find Out if You’re Insecure</strong>
            </p>

            <p className={styles.postContent}>
             Former CISCO CEO John Chambers stated, “There are two types of companies: those that have been hacked, and those who don’t yet know they have been hacked.”
            </p>
            <p className={styles.postContent}>
             There are multiple ways to find out if you’re insecure, whether that be an email detailing someone signing in from across the country, or a post made on your social media that you didn’t make. However, there are ways to avoid being hacked in the first place.
            </p>
            <p className={styles.postContent}>
              A website called ‘Have I been pwned?’ https://haveibeenpwned.com/ lets you check your email to tell you if there has been a data breach. If there has been a data breach, then it will proceed to give more information about when data was exposed and where from. There are also details of what type of information was leaked whether that be your full name or password. These details help you trace what passwords need to be changed immediately.
            </p>
            <br />
            
            <p className={styles.postSubheading}>
              <strong>How to Stay Secure Online</strong>
            </p>
            
            <p className={styles.postContent}>
             There are the obvious ones such as not making your password, ‘password’ and not sharing around your private information. There are also firewalls, VPNs and software such as Malwarebytes that can help detect malware and erase them. However, there are simple adjustments that you can make to add another layer of security for your information as well.
            </p>

            <ol>
              <li className={styles.question}>Two Step Authentication</li>
              <p className={styles.postContent}>It is important to enable two step authentication for services you use. A good place to start is your email. This adds another security layer on top of the minimum password required. There are multiple options to choose from so if you’re not comfortable with putting your phone number straight in, you can use Authenticator apps including ‘Google Authenticator’ and ‘Authy.’ The apps are easy to use and provide a code to input when signing into platforms to confirm that it is you.
              </p>
              <p className={styles.postContent}>It is important to enable two step authentication for services you use. A good place to start is your email. This adds another security layer on top of the minimum password required. There are multiple options to choose from so if you’re not comfortable with putting your phone number straight in, you can use Authenticator apps including ‘Google Authenticator’ and ‘Authy.’ The apps are easy to use and provide a code to input when signing into platforms to confirm that it is you.
              </p>
              <li className={styles.question}>Password and Documentation Management</li>
              <p className={styles.postContent}>If you struggle memorising passwords or have trouble coming up with complex ones, a password and documentation management is something to look into. There are several to choose from where they can help store your passwords, such as 1Password.
              </p>
            </ol>
            <br />

            <p className={styles.postContent}>
            There will always be threats online and it is impossible to stay 100% secure. We must be aware of our Internet presence and be wary as we wander from websites. Through various methods we can create more barriers to keep our information safe. Doing so, we can feel more secure.
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "natalie-leroy": [
              "/potraits/blog-authors/anon.png",
              styles.authorProfile,
              "Natalie Leroy",
              "Education Team"
            ]
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost50;