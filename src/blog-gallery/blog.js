//import React, { useState, useEffect } from "react";
import React from "react";
import "../style.css";
import "./blog.css";
import BlogPreview from "./blog-preview";
import PageHeader from ".././header";
//import database from "../config/firebase";

const Blog = () => {
  /*const db = database.firestore();
  
  const [blogs, setBlogs] = useState([]);
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    // set blogs to preview
    db
      .collection("blog-previews")
      .orderBy("date")
      .get()
      .then(querySnapshot => {
        let blogsTemp = [];
        querySnapshot.forEach(doc => blogsTemp.push(doc.data()));    
        setBlogs(blogsTemp);      
      });

    // set the blog authors
    db
      .collection("blog-authors")
      .get()
      .then(querySnapshot => {
        let authorsTemp = {}
        querySnapshot.forEach((doc) => {
          authorsTemp[doc.id] = doc.data();        
        });
        setAuthors(authorsTemp);
      });
  }, [db]);*/

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/blog-header.png" title="Blog Posts" />
      <div className="blogGallery">

        {/* Start of blog categories */}
        <input type="radio" id="blogCateg" name="categories" defaultChecked />
        <label id="allBlogs" htmlFor="blogCateg" className="side">
        Categories
        </label>
        <input type="radio" id="WITCrush" name="categories" />
        <label htmlFor="WITCrush" className="side">
        WIT Crush Wednesday
        </label>
        <input type="radio" id="lifestyle" name="categories" />
        <label htmlFor="lifestyle" className="side">
        Lifestyle
        </label>
        <input type="radio" id="upskill" name="categories" />
        <label htmlFor="upskill" className="side">
        Upskill
        </label>
        <input type="radio" id="tech" name="categories" />
        <label htmlFor="tech" className="side">
        Topical Technology
        </label>
        <input type="radio" id="innovation" name="categories" />
        <label htmlFor="innovation" className="side">
        Perception and Innovation
        </label>
        <input type="radio" id="careers" name="categories" />
        <label htmlFor="careers" className="side">
        Careers
        </label>

        {/*Start of blog posts*/}
        {/*blog post 39*/}
        <div className="blogPosts">
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="39"
            imgUrl="/blog-covers/39-how-to-take-notes.png"
            heading="How to Take Notes Effectively, Professionally, and Academically"
            date="15/11/2020"
            subheading="Taking notes is part of a uni student's everyday life. In this week's blog post we look at some of the best note-taking methods, and how to get the most out of your notes!"
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="lifestyle"
          />

          {/*blog post 38*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="38"
            imgUrl="/blog-covers/38-exsight.png"
            heading="WIT Personal Project Series - eXsight"
            date="9/11/2020"
            subheading="Join us on the second part of WIT's Personal Project Series, with start-up eXsight!"
            authors={{
              "srija-mukherjee": ["/potraits/srija.jpg", "Srija Mukherjee"],
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="innovation"
          />

          {/*blog post 37*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="37"
            imgUrl="/blog-covers/37-tanzeem-syeda.png"
            heading="Introducing Tanzeem Syeda, Software Engineer at WiseTech Global"
            date="4/11/2020"
            subheading="From achieving her first internship at 15-years-old, this week we feature Tanzeem Syeda and her incredible journey in tech."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 36*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="36"
            imgUrl="/blog-covers/36-the-byte.png"
            heading="The Small, the Powerful…The Byte"
            date="1/11/2020"
            subheading="The byte is an elemental component in every piece of technology that we use. So how is that relevant to us?"
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="innovation"
          />

          {/*blog post 35*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="35"
            imgUrl="/blog-covers/35-calista-kusuma.png"
            heading="Introducing: Calista Kusuma, Information Systems and Marketing Student"
            date="28/10/2020"
            subheading="This week, we explore the interdisciplinary nature of technology, and the opportunities for a successful career with Calista Kusuma."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
              "elisa-sanjurjo": ["/potraits/elisa.jpg", "Elisa Sanjurjo"],
            }}
            category="WITCrush"
          />

          {/*blog post 34*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="34"
            imgUrl="/blog-covers/34-what-i-learnt-from-shadiyah-lim.png"
            heading="What I Learnt From Shadiyah Lim"
            date="25/10/2020"
            subheading="In the latest blog post, Angeni reflects on the key lessons from her Talk WIT Us episode with Shadiyah Lim, Innovation Advisory Consultant at AWS, who overcame current uncertainties and more!"
            authors={{
              "angenie-bai": ["/potraits/angenie-bai.jpg", "Angenie Bai"],
            }}
            category={["careers", "innovation"].join(" ")}
          />

          {/*blog post 33*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="33"
            imgUrl="/blog-covers/33-execs-2020.png"
            heading="WCW ~ ALL WIT Exec Team 2020"
            date="21/10/2020"
            subheading="For this week's WIT Crush Wednesday, we'll be hearing an exciting Q&A with 2020's WIT Exec Team!"
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="WITCrush"
          />

          {/*blog post 32*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="32"
            imgUrl="/blog-covers/32-familiarising-fintech.png"
            heading="Familiarising Fintech"
            date="18/10/2020"
            subheading="Have you ever wanted to learn more about the elusive world of fintech? Read more to find out about the intricate details of this commonly used buzzword!"
            authors={{
              "jane-wang": ["/potraits/jane-wang.png", "Jane Wang"],
            }}
            category="tech"
          />

          {/*blog post 31*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="31"
            imgUrl="/blog-covers/31-sophie-warner.png"
            heading="Introducing Sophie Warner, Tech Intern at National Australia Bank"
            date="14/10/2020"
            subheading="Here, we interview Sophie about her amazing journey and lessons she’s learnt along the way."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 30*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="30"
            imgUrl="/blog-covers/30-technical-interviews2.png"
            heading="Technical Interview Walkthrough with Amanda Li and Vivian Shen (Part 2)"
            date="11/10/2020"
            subheading="In Part 2, Vivian and Amanda offer a comprehensive breakdown of a typical technical interview for software engineering, complete with tips and tricks for giving yourself the best possible chance of succeeding."
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="careers"
          />

          {/*blog post 29*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="29"
            imgUrl="/blog-covers/29-davina-adisusila.png"
            heading="Introducing Davina Adisusila, Engineering Team Lead at Eucalyptus"
            date="7/10/2020"
            subheading="In this blog post, we learn about the experiences of Davina Adisusila, the Engineering Team Lead at Eucalyptus, as well as the some of the insights she has gained during her incredible journey."
            authors={{
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="WITCrush"
          />

          {/*blog post 28*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="28"
            imgUrl="/blog-covers/28-technical-interviews.png"
            heading="Technical Interview Walkthrough with Amanda Li and Vivian Shen (Part 1)"
            date="4/10/2020"
            subheading="In this Q&A, Vivian Shen and Amanda Li, the President and Vice President of WIT respectively, offer the useful advice they have gathered from their own experiences to help you succeed in your next technical interview."
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="careers"
          />

          {/*blog post 27*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="27"
            imgUrl="/blog-covers/27-ankita-singh.png"
            heading="Introducing: Ankita Singh, PHD Student"
            date="30/09/2020"
            subheading="We are excited to share a recent Q&A we had with Ankita Singh regarding her journey in tech."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 26*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="26"
            imgUrl="/blog-covers/26-linkup.png"
            heading="Personal Project Series #1: LinkUp"
            date="27/09/2020"
            subheading="In this blog post, we’ll be hearing from the founders of LinkUp! Perhaps you used LinkUp to discover WIT or other societies. Just like any great tool, it started with the recognition of a need, followed by a great idea. Let’s dive into our conversation with the three founders!"
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="innovation"
          />
          {/*blog post 25*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="25"
            imgUrl="/blog-covers/25-cindy-russel-sia.png"
            heading="Introducing: Cindy Russel Sia, Senior Consultant of Deloitte"
            date="23/09/2020"
            subheading="We are excited to share a recent Q&A we had with Cindy about her career journey in STEM"
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 24*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="24"
            imgUrl="/blog-covers/24-whywesleep.png"
            heading="Sleep and Study"
            date="20/09/2020"
            subheading="Have you ever wondered what goes on in the mind while we sleep? Or how sleep can help your exam results? This blog post delves into the world of sleep and learning and how you can enhance not only your marks but your health through a good night's sleep."
            authors={{
              "elisa-sanjurjo": ["/potraits/elisa.jpg", "Elisa Sanjurjo"],
            }}
            category="lifestyle"
          />

          {/*blog post 23*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="23"
            imgUrl="/blog-covers/23-danni-ovens.png"
            heading="Introducing Danni Ovens, Forward Deployed Software Engineer"
            date="16/09/2020"
            subheading="During her training at UNSW, she volunteered her time to share her technical know-how with fellow students and children through Code Create, Tutorial Demonstrator, and Code Like a Girl. Let’s dive into our interview with this rising star!"
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="WITCrush"
          />

          {/*blog post 22*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="22"
            imgUrl="/blog-covers/22-tech-and-art.png"
            heading="4 Ways Technology is Changing how we make Art"
            date="13/09/2020"
            subheading="Technology is not all about maths and science. Technology can also be artistic, paving the way for new and exciting expressions of visual creativity. In doing so, artists, engineers and programmers may work together to bring fascinating creations to life. Here, we discuss four of the many ways in which technology may be fused with artistic creativity."
            authors={{
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="innovation"
          />

          {/*blog post 21*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="21"
            imgUrl="/blog-covers/21-madeleine-english.png"
            heading="Introducing Madeleine English, Consultant in Engineering at Asset Management at KPMG"
            date="09/09/2020"
            subheading="We are excited to share a recent Q&A we had with Madeleine regarding passion, journey into STEM as well as advice for students."
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="WITCrush"
          />

          {/*blog post 20*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="20"
            imgUrl="/blog-covers/20-aneita-yang.png"
            heading="Introducing : Aneita Yang, Product Manager At Atlassian"
            date="02/09/2020"
            subheading="Keep reading to learn more about Aneita’s philosophy, journey in STEM, and how computer science has constantly changed her perception!"
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 19*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="19"
            imgUrl="/blog-covers/19-shatabdi-dey.png"
            heading="Introducing : Shatabdi De, Web Developer at Nine Entertainment Co."
            date="05/08/2020"
            subheading="We are excited to share a recent Q&A we had with Shatabdi about career journey in STEM!"
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
            }}
            category="WITCrush"
          />

          {/*blog post 18*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="18"
            imgUrl="/blog-covers/18-which-degree-are-you.png"
            heading="Which technology degrees are you?"
            date="02/08/2020"
            subheading="Software Engineering. Computer Science. Information Systems. What makes these degrees unique? Which career paths can they lead to? Take the quiz to find out which degree you are!"
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="innovation"
          />

          {/*blog post 17*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="17"
            imgUrl="/blog-covers/17-natasha-jones.png"
            heading="Introducing: Natasha Jones, SAP Consultant at Deloitte"
            date="29/07/2020"
            subheading="This week, we join Natasha as she reflects on her journey through STEM, and how she has continued to strive for success."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 16*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="16"
            imgUrl="/blog-covers/16-erica-joy-baker.png"
            heading="Introducing Erica Joy Baker, Director of Engineering at GitHub"
            date="22/07/2020"
            subheading="Erica Baker is a unique role model and voice for women and minorities in tech. She’s a force to be reckoned with, and gives us all hope there will be a place for our skills, enthusiasm and ideas in whatever area of the tech field we choose."
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="WITCrush"
          />

          {/*blog post 15*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="15"
            imgUrl="/blog-covers/15-zitni-handoo.png"
            heading="A Journey in IT with Zitni Handoo"
            date="19/07/2020"
            subheading="In this blog post, we share our Q&A with Zitni, covering everything from her inspiration to study AI to the most challenging aspects of university life. Get ready to take some notes!"
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="WITCrush"
          />

          {/*blog post 14*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="14"
            imgUrl="/blog-covers/14-hannah-beder.png"
            heading="Introducing: Hannah Beder, Creative Technologist at Creatable and NSW Young Woman of the Year 2020"
            date="15/07/2020"
            subheading="We’re excited to share a recent Q&A we had with Hannah about her career journey in STEM."
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="WITCrush"
          />

          {/*blog post 13*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="13"
            imgUrl="/blog-covers/13-mechatronics.png"
            heading="Upskill yourself in: MECHATRONICS"
            date="13/07/2020"
            subheading="Learn about this powerful and evolving field cranking out computer-controlled machines like robotics and autonomous-driving cars. Find out the tools and software used in this field, and if it’s for you! 🤔🤔"
            authors={{
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="upskill"
          />

          {/*blog post 12*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="12"
            imgUrl="/blog-covers/12-maddie-mackey.png"
            heading="WIT Crush Wednesday - Maddie Mackey"
            date="08/07/2020"
            subheading="Let's read about what Maddie Mackey has to say about her journey into tech."
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="WITCrush"
          />

          {/*blog post 11*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="11"
            imgUrl="/blog-covers/11-ai-jobs.png"
            heading="AI in the Workplace"
            date="04/07/2020"
            subheading="Have you ever wondered 'Will AI take my Job?', 'How does AI function in the workplace?', 'Can AI make me Pizza?'🍕🍕🍕 Well look no further, because this blog post answers your burning questions."
            authors={{
              "elisa-sanjurjo": ["/potraits/elisa.jpg", "Elisa Sanjurjo"],
            }}
            category="tech"
          />

          {/*blog post 10*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="10"
            imgUrl="/blog-covers/10-lana-king.png"
            heading="Introducing: Lana King, Senior Consultant of Deloitte"
            date="01/07/2020"
            subheading="Let's read about what Lana King has to say about her journey into tech."
            authors={{
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="WITCrush"
          />

          {/*blog post 9*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="9"
            imgUrl="/blog-covers/09-procrastinating.png"
            heading="What Are You REALLY Procrastinating?"
            date="29/06/2020"
            subheading="Inspired by Tim Urban’s TED Talk, we look at challenging procrastination, and how it really exists in all of us,
                even the non-procrastinators."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category="lifestyle"
          />

          {/*blog post 8*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="8"
            imgUrl="/blog-covers/08-marguerite-evans-galea.png"
            heading="WIT Crush Wednesday - Dr Marguerite Evans-Galea"
            date="24/06/2020"
            subheading="Take a look at Dr Marguerite Evans-Galea's journey into STEM as well as advice for students who are interested in pursuing a career in STEM."
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="WITCrush"
          />

          {/*blog post 7*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="7"
            imgUrl="/blog-covers/07-ace-your-hackathon.png"
            heading="How To Ace Your Hackathon"
            date="21/06/2020"
            subheading="Let's read what past WIT Hackathon winner has to say regarding their best tip to ace for your hackathon."
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="upskill"
          />

          {/*blog post 6*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="6"
            imgUrl="/blog-covers/06-fontaine-foxworth.png"
            heading="Introducing: Fontaine Foxworth, Product Manager of Google"
            date="17/06/2020"
            subheading="Let’s read what Fontaine had to say about her journey into tech."
            authors={{
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="WITCrush"
          />

          {/*blog post 5*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="5"
            imgUrl="/blog-covers/05-salina-jantarang.png"
            heading="Interview - Salina Jantarang"
            date="12/06/2020"
            subheading="Explore Salina's research journey as PHD student in chemical engineering as well as advices about finding success in university and beyond"
            authors={{
              "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"],
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="WITCrush"
          />

          {/*blog post 4*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="4"
            imgUrl="/blog-covers/04-syin-li-tan.png"
            heading="Introducing: Syin Li Tan, Consultant at Deloitte"
            date="10/06/2020"
            subheading="Another story to cover! Gain insights from Deloite consultant Syin Li Tan on her career-related thoughts and experiences!"
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="WITCrush"
          />

          {/*blog post 3*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="3"
            imgUrl="/blog-covers/03-marissa-mayer.png"
            heading="4 Lessons From Marissa Mayer's Life in Tech"
            date="03/06/2020"
            subheading="Take a look at 4 lessons we can learn from Marissa's amazing life, and how she continues to redefine technology as we know it today."
            authors={{
              "georgie-mansfield": ["/potraits/georgie.jpg", "Georgie Mansfield"],
            }}
            category={["careers", "WITCrush"].join(" ")}
          />

          {/*blog post 2*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="5vw"
            blogNo="2"
            imgUrl="/blog-covers/02-lisa-harvey-smith.png"
            heading="Introducing: Professor Lisa Harvey Smith, Astrophysicist and Australia’s First Women In STEM Ambassador"
            date="27/05/2020"
            subheading="Explore Professor Harvey Smith’s experiences, influential nature and numerous achievements proving that women in the tech industry are NOT to be underestimated."
            authors={{
              "elisa-sanjurjo": ["/potraits/elisa.jpg", "Elisa Sanjurjo"],
              "victoria-ruming": ["/potraits/victoria.jpg", "Victoria Ruming"],
            }}
            category="WITCrush"
          />

          {/*blog post 1*/}
          <BlogPreview
            topMargin="5vw"
            bottomMargin="10vw"
            blogNo="1"
            imgUrl="/blog-covers/01-silvia-lin.png"
            heading="Introducing: Silvia Lin, Senior Consultant of PWC and WIT Co-founder"
            date="20/05/2020"
            subheading="Learn more about our co-founder and now PWC Senior Consultant Silvia Lin and her journey into technology!"
            authors={{ "vivian-wong": ["/potraits/2020-exec/vivw.jpg", "Vivian Wong"] }}
            category="WITCrush"
          />
        </div>
        {/*End of blog posts*/}
      </div>
    </>
  );

}

export default Blog;
