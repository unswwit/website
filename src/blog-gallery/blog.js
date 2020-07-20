//All necessary imports for this javascript
import React, { Component } from "react";
import "../style.css";
import "./blog.css";
import BlogPreview from "./blog-preview";

class Blog extends Component {
    render() {
        return (
            <div>
                {/*Start of Header*/}
                <div class="coverPhoto">
                    <div class="title">
                        <h1>Blog Posts</h1>
                    </div>
                </div>
                {/*End of Header*/}

                {/*Start of blog posts*/}
                {/*blog post 15*/}
                <BlogPreview
                topMargin="10vw"
                bottomMargin="5vw"
                blogNo="15"
                imgUrl="/blog-covers/15-zitni-handoo.png"
                heading="A Journey in IT with Zitni Handoo"
                date="19/07/2020"
                subheading="In this blog post, we share our Q&A with Zitni, covering everything from her inspiration to study AI to the most challenging aspects of university life. Get ready to take some notes!"
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"]}}
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
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"]}}
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
                authors={{"victoria-ruming":["/potraits/victoria.jpg", "Victoria Ruming"]}}
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
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"],"georgie-mansfield":["/potraits/georgie.jpg", "Georgie Mansfield"]}}
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
                authors={{"elisa-sanjurjo":["/potraits/elisa.jpg", "Elisa Sanjurjo"]}}
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
                authors={{"victoria-ruming":["/potraits/victoria.jpg", "Victoria Ruming"]}}
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
                authors={{"georgie-mansfield":["/potraits/georgie.jpg", "Georgie Mansfield"]}}
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
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"]}}
                />

                {/*blog post 7*/}
                <BlogPreview
                topMargin="5vw"
                bottomMargin="5vw"
                blogNo ="7"
                imgUrl="/blog-covers/07-ace-your-hackathon.png"
                heading="How To Ace Your Hackathon"
                date="21/06/2020"
                subheading="Let's read what past WIT Hackathon winner has to say regarding their best tip to ace for your hackathon."
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"]}}
                />

                {/*blog post 6*/}
                <BlogPreview
                topMargin="5vw"
                bottomMargin="5vw"
                blogNo = "6"
                imgUrl="/blog-covers/06-fontaine-foxworth.png"
                heading="Introducing: Fontaine Foxworth, Product Manager of Google"
                date="17/06/2020"
                subheading="Let’s read what Fontaine had to say about her journey into tech."
                authors={{"victoria-ruming":["/potraits/victoria.jpg","Victoria Ruming"]}}
                />

                {/*blog post 5*/}
                <BlogPreview
                topMargin="5vw"
                bottomMargin="5vw"
                blogNo = "5"
                imgUrl="/blog-covers/05-salina-jantarang.png"
                heading="Interview - Salina Jantarang"
                date="12/06/2020"
                subheading="Explore Salina's research journey as PHD student in chemical engineering as well as advices about finding success in university and beyond"
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"],"victoria-ruming":["/potraits/victoria.jpg","Victoria Ruming"]}}
                />

                {/*blog post 4*/}
                <BlogPreview
                topMargin="5vw"
                bottomMargin="5vw"
                blogNo = "4"
                imgUrl="/blog-covers/04-syin-li-tan.png"
                heading="Introducing: Syin Li Tan, Consultant at Deloitte"
                date="10/06/2020"
                subheading="Another story to cover! Gain insights from Deloite consultant Syin Li Tan on her career-related thoughts and experiences!"
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"]}}
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
                authors={{"georgie-mansfield":["/potraits/georgie.jpg", "Georgie Mansfield"]}}
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
                authors={{"elisa-sanjurjo":["/potraits/elisa.jpg", "Elisa Sanjurjo"],"victoria-ruming":["/potraits/victoria.jpg","Victoria Ruming"]}}
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
                authors={{"vivian-wong":["/potraits/vivw.jpg", "Vivian Wong"]}}
                />
                {/*End of blog posts*/}
            </div>
        );
    }
}
export default Blog;
