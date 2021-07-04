import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";
import Tabletop from "tabletop";
import Chip from "@material-ui/core/Chip";
import BlogEndPreview from "./blog-end-preview";
import { Link } from "react-router-dom";

class blogPost60 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
      currentBlogNo: 0,
      currentBlog: "",
      previousBlogs: [],
      currentBlogCategories: [],
    };
  }

  render() {
    // Get Previous 2 Blog Info
    var currBlogNo = parseInt(
      String(this.props.match.url).split("/").reverse()[0]
    );
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        const blogOriginal = googleData["blog-previews"]["elements"];
        let blogPreviews = googleData["blog-previews"]["elements"];
        const authorList = googleData["blog-authors"]["elements"];
        blogOriginal.forEach((blogPreview, index) => {
          const tempAuthor = {};
          blogPreview.authors.split(",").forEach((authorKey) => {
            const result = authorList.filter(
              (authorItem) => authorItem.authors === authorKey
            )[0];
            tempAuthor[authorKey] = [
              `/potraits/blog-authors/${result.img}`,
              result.name,
            ];
          });
          blogPreviews[index].authors = tempAuthor;
        });

        var lastTwoBlogPreviews = blogPreviews.slice(
          currBlogNo - 3,
          currBlogNo - 1
        );

        var currBlogCategories = blogPreviews[currBlogNo - 1].category.split(
          ","
        );

        this.setState({
          previousBlogs: lastTwoBlogPreviews,
          currentBlog: blogPreviews[currBlogNo - 1],
          currentBlogNo: currBlogNo,
          currentBlogCategories: currBlogCategories,
        });
      },
      simpleSheet: false,
    });

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #60" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Is Bitcoin overrated?</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>June 22, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              One Bitcoin is worth around $50,000 AUD currently. There are 21
              million finite Bitcoins. However, with all this being said,
              Bitcoin (BTC) in most cases is overrated.
              <br />
              <br />
              Bitcoin is a type of cryptocurrency. To truly understand BTC, one
              must understand cryptocurrency and the technology behind it-
              blockchain.
            </p>
            <br />

            <p className={styles.question}>Cryptocurrency explained</p>

            <p className={styles.postContent}>
              Cryptocurrency is a digital exchange where the transactions are
              done through cryptography maintained by a decentralised system
              rather than a centralised authority. This means that there is not
              only one person or government as the owner but rather a
              collective. Likewise, with physical cash, the coins that are a
              part of cryptocurrency are essentially worthless but the ability
              they have, with making transactions, is what gives it worth. The
              currency is also nearly impossible to forge due to the technology
              that it is built on- blockchain.
            </p>
            <br />

            <p className={styles.question}>Blockchain explained</p>

            <p className={styles.postContent}>
              Blockchain is a system of recording information - a digital ledger
              of transactions that are duplicated and spread across an entire
              network of computers. If a change has been made as part of the
              blockchain, every computer in the network will update to reflect
              that modification. This technology is why it is hard to hack into
              blockchain.
              <br />
              <br />
              The technology of blockchain will be used for several tasks such
              as reducing a large amount of paperwork and becoming the
              foundation of currencies in some countries. This can be seen with
              China’s government researching a potential blockchain-type
              currency, despite attempting to criminalise all other
              cryptocurrency exchanges. Companies and individuals have also
              turned to embrace blockchain, such as IBM investing over $200
              million into research of the technology and Elon Musk having a
              great influence over the cryptocurrency market, as can be seen
              with Dogecoin. Musk’s company Tesla, is another notable example of
              this, owning hundreds of millions of dollars worth of BTC in its
              reserves.
            </p>
            <br />

            <p className={styles.question}>Future of blockchain</p>

            <p className={styles.postContent}>
              The future of blockchain is already taking shape with the ability
              to ensure the safety of public records, which will be more secure
              and resistant to corruption attempts. This can also remove the
              possibility of voter fraud and speculation, making online voting
              much more accessible and protected. The ability of storing data
              will not only help the government, but also those of the public
              with eliminating third-party interference that is often done by
              the bank with transacting currencies. Already, a platform called
              ‘Ecoinmerce’ has used blockchain to reduce 60% of the product
              price.
              <br />
              <br />
              There will also be ‘smart contracts’ which are basically real-life
              contracts but in the digital world stored in blockchain. This will
              transform the way people ‘sign’ contracts in a more efficient,
              accurate and transparent manner. Some currencies already support
              ‘smart contracts’ such as Ethereum, which was made for this very
              purpose. Bitcoin also has this application but is much more
              limited in its capabilities. All these pathways brought about by
              blockchain, will definitely change the future.
            </p>
            <br />

            <p className={styles.question}>Why Bitcoin is overrated</p>
            <p className={styles.postContent}>
              As stated above, the technology behind cryptocurrency, has a lot
              of potential, however, BTC fails to effectively utilise
              blockchain’s abilities.
              <br />
              <br />
              The founding process of BTC is largely ambiguous, having an
              unknown inventor and being unable to trace the coin to its
              origins. In addition to this, the currency itself is slow to
              transfer from one electronic wallet to another, inflexible and
              very environmentally unfriendly due to the excessive use of
              electricity to mine the coin.
              <br />
              <br />
              In comparison to another form of cryptocurrency, Ethereum (ETH)
              for example, BTC cannot compete. ETH works at a much faster pace,
              is flexible and with a new update coming soon, it will become much
              more environmentally friendly. Although, it must be acknowledged
              that BTC is the ‘grandfather’ coin and thus started the trend for
              cryptocurrency.
              <br />
              <br />
              However, for now, if you choose to invest into Bitcoin – proceed
              with caution, as it you might find yourself with a large profit
              margin from trading or; you could be left with major losses
              wondering if the investment was worth it. With hundreds of coins
              on offer, one begs to question if Bitcoin is just overrated.
              <br />
              <br />
              A simple visual explanation of how cryptocurrency works:
              <br />
              <a
                href="https://www.dailymotion.com/video/x6er6zc"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.dailymotion.com/video/x6er6zc
              </a>
            </p>
            <br />
          </div>
        </div>

        <div className={styles.chipContent}>
          <div className={styles.BlogCategories}>
            {this.state.currentBlogCategories.map((category) => {
              const chipColour = "#7F7F7F";
              return (
                <Link
                  to={{ pathname: "/media/blog", category }}
                  style={{ textDecoration: "none" }}
                >
                  <Chip
                    size="medium"
                    label={category}
                    style={{
                      textTransform: "uppercase",
                      backgroundColor: chipColour,
                      color: "white",
                      margin: "5px",
                    }}
                    onClick={() => {}}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "erika-shi": [
              "/potraits/blog-authors/natalie-leroy.png",
              styles.anonProfile,
              "Natalie Leroy",
              "Education Team",
            ],
          }}
        />

        {/*Bottom Share Buttons*/}
        <div className={styles.shareContent}>
          <p className={styles.shareTextPosition}>Share this blog post</p>
          <ShareBtns />
        </div>

        {/*More From WIT Section*/}
        <div className={styles.moreFromWITContent}>
          <p className={styles.moreFromWITTextPosition}>More From WIT</p>
          {this.state.previousBlogs.map((blog) => {
            return (
              <div className={styles.scaleDown}>
                <BlogEndPreview
                  key={blog.blogNo}
                  blogNo={blog.blogNo}
                  imgUrl={`/blog-covers/${blog.img}`}
                  heading={blog.heading}
                  date={blog.date}
                  subheading={blog.subheading}
                  authors={blog.authors}
                  category={blog.category.split(",")}
                />
              </div>
            );
          })}
        </div>

        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost60;
