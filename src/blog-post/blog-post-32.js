import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost32 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #32" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Familiarising Fintech</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>October 18, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              With UNSW introducing its new Financial Technology major, many
              students have been scratching their heads as to what the term
              fintech means.
            </p>{" "}
            <p className={styles.postContent}>
              We’ve all heard it thrown around casually in conversation, we may
              even be the one initiating a conversation about this unfathomable
              subject matter, but what truly is fintech? What lies within the
              murky depths of this commonly uttered buzzword, and how has it
              unknowingly intertwined itself with our existing day to day life?
            </p>{" "}
            <p className={styles.postContent}>
              Broadly speaking, fintech refers to the use of technology and
              innovation to improve the efficiency and effectiveness of
              traditional financial services. Although often portrayed as niche
              specialism, fintech encapsulates a range of subcategories, from
              cryptocurrencies and mobile payments, to lending.
            </p>
            <br />
            <p className={styles.question}>Cryptocurrency</p>
            <p className={styles.postContent}>
              Cryptocurrencies are a form of digital assets that are often
              designed to be a medium of exchange. These currencies are often
              based upon blockchain technology, which provides a more
              transparent way of tracking the life cycle of a financial
              transaction, thus eliminating the need for a third party (i.e.
              banks) to be present when transferring funds. Due to the
              decentralized and distributed nature of cryptocurrencies, in
              conjunction with the disablement of government manipulation, they
              foster a deeper level of customer confidence.
            </p>
            <br />
            <p className={styles.question}>Lendtech</p>
            <p className={styles.postContent}>
              Lendtech refers to digital platforms that facilitate a more
              streamlined approach to matching lenders with borrowers. Lendtech
              platforms utilize artificial intelligence and machine learning
              algorithms to verify credentials, match borrowers to lenders, and
              predict a suitable interest rate. The rise of lendtech has created
              a space for borrowers with lower credit ratings to have the
              ability to obtain loans, while more pro-risk lenders have the
              chance to recoup higher returns.
            </p>
            <br />
            <p className={styles.question}>Paytech</p>
            <p className={styles.postContent}>
              With PayPal, AfterPay, ZipPay, and many others becoming peripheral
              actors in our online shopping regimes, the new digitized way of
              spending has incorporated itself seamlessly into our everyday
              lives. Beneath the surface of a more convenient checkout, Paytech
              integrates its digital platform with expansive networks to create
              more efficient digital connectivity for its customers.
            </p>
            <br />
            <p className={styles.question}>Mobile Payments</p>
            <p className={styles.postContent}>
              Fintech has further facilitated the streamlining of the payment
              process through mobile payments such as Apple Pay, Google Wallet,
              and more. The creation of digital wallets eliminates the barriers
              and inefficiencies associated with traditional means of payment,
              removing the unnecessary resources required for cash payments.
              Furthermore, mobile payments improve customer service by analyzing
              trends in purchase history information, making the relationship
              between the seller and buyer more personalized than ever.
            </p>
            <br />
            <p className={styles.question}>The Future and Beyond</p>
            <p className={styles.postContent}>
              So what does the rise of fintech mean for us?
            </p>
            <p className={styles.postContent}>
              As users, we can now enjoy a more efficient transaction process,
              with real-time payments, easier access to credit, and a higher
              level of service. The banking sector, however, is facing a
              different story. Thousands of new and up and coming fintech
              start-ups are offering products and services that were
              traditionally encompassed by traditional players in the banking
              industry. While there will be losses in some areas, namely routine
              and easily automatable tasks, these will be recouped through a
              culture of innovation and collaboration. With most banks having a
              deep and thorough understanding of financial services, as well as
              generations of consumer trust, fintech companies are centered
              around employees from a background other than finance. Thus, a
              collaborative effort between the up and coming financial
              technology sector and the traditional finance industry will carve
              the future towards a more equitable, and accessible financial
              services industry.
            </p>
            <br />
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "jane-wang": [
              "/potraits/blog-authors/jane-wang.jpg",
              styles.authorProfile,
              "Jane Wang",
              "Events Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost32;
