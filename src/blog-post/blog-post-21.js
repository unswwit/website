import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";

class blogPost21 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.png" title="Blog Post #21" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Introducing Madeleine English, Consultant in Engineering at Asset
              Management at KPMG
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>September 9, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Madeleine English is a Consultant in Engineering at Asset
              Management in KPMG. She is passionate about solving complex client
              challenges with the delivery of sustainable and innovative
              solutions. With an active interest in climate change mitigation
              strategies and her strong interest in the water industry,
              Madeleine maintains her passion in effective water planning and
              asset management through practicing sustainable initiatives in her
              daily life and delivering project management, data analytics and
              asset management services at her current role in KPMG.
            </p>
            <br />

            <p className={styles.question}>
              What sparked your interest to join the field of STEM?
            </p>

            <p className={styles.postContent}>
              I always loved maths and science at school, and wanted to apply
              these disciplines in building a more sustainable future. Since
              starting my career however I've also come to really enjoy the
              people side of my job, working with clients and stakeholders to
              deliver the best value to communities.
            </p>
            <br />

            <p className={styles.question}>
              Please provide a short summary of your career journey so far:
            </p>

            <p className={styles.postContent}>
              I am a consultant at KPMG in the Engineering and Asset Management
              team. I’ve had 2.5 years of industry experience, at KPMG for a
              year and previously at AECOM in their water team as a civil
              engineer. I graduated from Sydney University in 2017 with a
              Bachelor of Civil (Environmental) Engineering, and during my
              penultimate year at university I was an undergraduate at AECOM in
              their Urban Systems Advisory team (sustainability planning).
            </p>
            <br />

            <p className={styles.question}>
              Where do you see yourself in the future (career wise)?
            </p>

            <p className={styles.postContent}>
              In the future I see myself in a role more geared towards combating
              climate change and building a sustainable future. I maintain a
              long held interest in environmental justice and climate change,
              and practice a number of related initiatives in my day to day
              life. However, I am interested in getting experience across a
              range of sectors and with different people in the early stages of
              my career.
            </p>
            <br />

            <p className={styles.question}>
              What do you love about your career now?
            </p>

            <p className={styles.postContent}>
              I love the people that I work with in my current role at KPMG,
              there is an inclusive culture with friendly people from diverse
              backgrounds. There are also a wide range of career opportunities
              both at KPMG and in the wider industry with an engineering
              background. People value you for your problem solving capability
              which can be applied to a range of different services.
            </p>
            <br />

            <p className={styles.question}>
              Why do you think it is important to empower women and increase
              their involvement in the STEM industry?
            </p>

            <p className={styles.postContent}>
              I think it's really important to have diverse teams building
              solutions together to get the best outcome for people &
              communities. STEM related industries are responsible for designing
              many things that each of us use in our day to day lives which
              affect both females and males. Did you know that when Siri first
              came out it was 70% more accurate when recognising a males voice
              than a females, and that female car crash dummies only started
              being tested in this decade? If females are not in the room then
              decisions are made without a female perspective, and that affects
              the female customer base. In the case of the car crash dummies,
              that's a matter of female safety. It's the same for all different
              types of diversity. A Harvard study suggests that there needs to
              be at least 3 in 10 of a minority group in the room to impact a
              decision being made and according to Engineers Australia 84% of
              Australian engineering graduates are men, so there is still so
              much work to do to get females into STEM related careers.
            </p>
            <br />

            <p className={styles.question}>
              What are the challenging aspects of your career?
            </p>

            <p className={styles.postContent}>
              As I'm early on in my career I am constantly learning. Being ok
              with not knowing everything all at once or straight away is ok but
              is something that I am sometimes challenged by.
            </p>
            <br />

            <p className={styles.question}>
              How have others inspired you at different periods throughout your
              career?
            </p>

            <p className={styles.postContent}>
              I have been inspired by a range of different people throughout my
              career so far. My peers inspire me and also senior leaders both
              inside the organisations I've worked in and outside of these
              organisations. I take inspiration from those who demonstrate
              leadership, are passionate about what they do, and have a strong
              commitment to social and environmental ethics. I also really value
              mentoring and have been both a mentee and mentor in a number of
              cases, gaining valuable benefits from both sides.
            </p>
            <br />

            <p className={styles.question}>
              What are the hard and soft skills that you advised students who
              are interested in pursuing a similar career path (for
              internship/graduate role) to upskill on?
            </p>

            <p className={styles.postContent}>
              Soft skills such as communication, time management and working in
              a team are really important skills to have in the workforce. The
              hard skills will come through your degree without really any
              further work. Coming into the workforce in a STEM career you are
              hired for your potential and problem solving capability which you
              would have gained through a STEM related degree. The soft skills
              are often what you are assessed on throughout graduate recruitment
              processes - typical questions in a graduate interview for a STEM
              related graduate role will relate to how you work in a team, how
              you have managed difficult conversations such as when someone
              didn't agree with you or how you manage your time. Such skills can
              be built up by casual work through your time at university (that
              doesn't need to be STEM related), plus getting involved in
              volunteering initiatives, university societies and other
              extracurricular activities.
            </p>
            <br />

            <p className={styles.question}>
              What is one piece of advice that you would give to your younger
              self back in university?
            </p>

            <p className={styles.postContent}>
              Work hard but make time for yourself - hobbies, a casual job,
              spending time with family and friends.
            </p>
            <br />

            <p className={styles.question}>Favourite Quote or Motto?</p>

            <p className={styles.postContent}>
              Always make time for yourself, no matter how busy you are.
            </p>
            <br />
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "vivian-wong": [
              "/potraits/blog-authors/vivw.jpg",
              styles.authorProfile,
              "Vivian Wong",
              "Education Executive",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost21;
