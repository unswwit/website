import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../components/header";
import ShareBtns from "./ShareBtns";

class blogPost46 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #46" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>Mass Production of a Vaccine</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>March 12, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              As a seemingly isolated sickness turned into a global pandemic,
              the implications and relevance of biotechnology are quickly
              becoming normalised in public conversation. The race to the
              production and worldwide distribution of the COVID-19 vaccine,
              after its discovery and testing has been the most recent example
              of this. So, in response to this seemingly commonplace rhetoric
              around the distribution of billions of doses of a vaccine during a
              global pandemic, we raise the question... how are vaccines in
              general mass produced and shipped?
            </p>
            <br />

            <p className={styles.postSubheading}>
              <strong>Mass Producing a Vaccine</strong>
            </p>
            <ol>
              <li className={styles.question}>Culturing the Antigen</li>
              <p className={styles.postContent}>
                An antigen is anything that your immune system recognises as
                foreign and consequently “attacks”. Examples of this include
                bacteria, viruses, other microorganisms, or even pollen. The
                antigen that the vaccine is protecting against is taken from an
                original petri-dish culture (cultured meaning grown) and are
                cultured in a large-scale lab where temperature, pH, oxygen
                rate, sterility, and homogeneity (sameness) are constantly
                measured and maintained. This culturing step can take anywhere
                between 2 days – 3 months depending on the antigen being
                cultured.
              </p>
              <p className={styles.postContent}>
                The antigen is then purified and inactivated to stop it from
                causing disease, but still enabling it to activate an immune
                response when the vaccine has been administered.
              </p>

              <li className={styles.question}>Formulation</li>
              <div className={styles.postContent}>
                Next, the vaccine formula is determined, typically including:
              </div>
              <ul>
                <li className={styles.postContent}>
                  Stabilisers – to maintain the ingredients of the vaccine
                </li>
                <li className={styles.postContent}>
                  Adjuvants – to assist in triggering an immune response
                </li>
                <li className={styles.postContent}>
                  Preservatives – to prevent bacterial/fungal contamination
                </li>
                <li className={styles.postContent}>The inactivate antigen</li>
              </ul>
              <br />

              <li className={styles.question}>Filling</li>
              <p className={styles.postContent}>
                The vaccine formula is filled into vials or syringes from which
                the vaccine will be administered, and closed with sterile
                stoppers. It is then inspected both visually and with high
                quality machinery to ascertain quality.
              </p>
              <p className={styles.postContent}>
                In this stage, samples from the vaccine batch may be sent to
                important countries or health authorities for testing, and if
                the vaccine batch does not meet standards, it is destroyed.
              </p>
            </ol>
            <br />

            <p className={styles.postSubheading} style={{ padding: 0 }}>
              <strong>Shipping the Vaccine</strong>
            </p>
            <ol start="4">
              <li className={styles.question}>Packaging</li>
              <p className={styles.postContent}>
                Most vaccines need to be kept at 2&deg;C to 8&deg;C. To maintain
                this temperature, cool rooms are used for storage, as well as
                refrigerated shipping containers with a temperature-tracking
                device.isothermal packaging is also used to keep the vaccine
                safe throughout transportation.
              </p>
              <li className={styles.question}>Distribution</li>
              <p className={styles.postContent}>
                After packaging, the vaccine is distributed worldwide whether by
                plane or truck. Widely available vaccines are taken to
                wholesalers, pharmacies, or local health authorities after which
                the vaccine is administered to the public.
              </p>
              <p className={styles.postContent}>
                Vaccine production is complex, but is a carefully monitored
                process to ensure quality of the product. It is a well
                established and long-existing vaccination production process
                that has allowed for vaccines to be mass produced on a worldwide
                level, and play its part in helping people through a global
                pandemic.
              </p>
            </ol>
            <br />

            <p className={styles.question}>
              <strong>References</strong>
            </p>
            <p className={styles.postContent}>
              <a
                href="https://www.chop.edu/centers-programs/vaccine-education-center/vaccine-ingredients#:~:text=Stabilizers-,Stabilizers,polysorbate%2080%20as%20a%20stabilizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.chop.edu/centers-programs/vaccine-education-center/vaccine-ingredients#:~:text=Stabilizers-,Stabilizers,polysorbate%2080%20as%20a%20stabilizer
              </a>
            </p>
            <p className={styles.postContent}>
              <a
                href="https://www.sanofi.com/en/your-health/vaccines/production/journey-of-vaccine"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sanofi.com/en/your-health/vaccines/production/journey-of-vaccine
              </a>
            </p>
            <p className={styles.postContent}>
              <a
                href="https://www.vaccineseurope.eu/about-vaccines/how-are-vaccines-produced"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.vaccineseurope.eu/about-vaccines/how-are-vaccines-produced
              </a>
            </p>
            <p className={styles.postContent}>
              <a
                href="https://www.weforum.org/agenda/2020/09/covid-19-vaccine-the-greatest-logistics-challenge-in-a-lifetime/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.weforum.org/agenda/2020/09/covid-19-vaccine-the-greatest-logistics-challenge-in-a-lifetime/
              </a>
            </p>
            <p className={styles.postContent}>
              <a
                href="https://medlineplus.gov/ency/article/002224.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://medlineplus.gov/ency/article/002224.htm
              </a>
            </p>
            <p className={styles.postContent}>
              <a
                href="https://www.medicalnewstoday.com/articles/how-did-we-develop-a-covid-19-vaccine-so-quickly#Other-coronaviruses"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.medicalnewstoday.com/articles/how-did-we-develop-a-covid-19-vaccine-so-quickly#Other-coronaviruses
              </a>
            </p>
            <br />

            <p className={styles.postContent}>
              <em>
                Disclaimer: The purpose of this blog post is purely to provide
                basic information on an interesting topic that relates to
                current events. This work has been put together to the best of
                our ability, and should not be used for medical advice. For
                information on the Covid-19 vaccine in NSW visit{" "}
                <a
                  href="https://www.health.gov.au/initiatives-and-programs/covid-19-vaccines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.health.gov.au/initiatives-and-programs/covid-19-vaccines
                </a>
              </em>
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "georgie-mansfield": [
              "/potraits/blog-authors/georgie2021.jpg",
              styles.authorProfile,
              "Georgie Mansfield",
              "Education Executive",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost46;
