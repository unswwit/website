import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost25 extends Component {
    //start webpage at the top
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {/* Cover Photo */}
                <PageHeader
                    imgUrl="/blog-header.png"
                    title="Blog Post #25"
                />
                {/*End of Header*/}

                {/*Start of blog post*/}
                <div class="blog-content">
                    <div>
                        <h2 class="blog-title">
                            Introducing: Cindy Russel Sia, Senior Consultant of Deloitte
                        </h2>
                        <p class="date">23rd September 2020</p>
                    </div>

                    <div class="post">
                        <p class="post-content">
                            Cindy Russel Sia is a Senior Consultant at Deloitte in Enterprise Technology. 
                            At university, Russell Sia undertook Human Biology. She has received numerous 
                            awards including Best Energy Project and Gold Award at International Genetically 
                            Engineered Machine Competition, and has been involved in a diverse range of projects 
                            ranging from her study in medical issues as a research assistant at Macquarie 
                            University to managing customer relationships and supply chain management at Deloitte.
                        </p><br/>

                        <p class="question">
                            What sparked your interest to join the field of STEM?
                        </p>

                        <p class="post-content">
                            I love that STEM allows  me to observe technological expansion happening in 
                            this world as businesses shift to automation.
                        </p><br/>

                        <p class="question">
                            Please provide a short summary of your career journey so far:
                        </p>

                        <p class="post-content">
                            I have gone from working in Science, both in academia and industry, to joining 
                            Deloitte in Consulting. I have no regrets about doing so as the opportunities 
                            I’ve had at Deloitte has helped me to develop skills that I wouldn’t have been 
                            able to acquire in the academic field.  
                        </p><br/>

                        <p class="question">
                            Where do you see yourself in the future (career wise)?
                        </p>

                        <p class="post-content">
                            Looking into the future, I hope to become an industry leader within Consulting!
                        </p><br/>

                        <p class="question">What do you love about your career now?</p>

                        <p class="post-content">
                            I love that the opportunities at Deloitte never ends. At Deloitte, I get to own 
                            my ideas and see, first-hand, the impact that my work has made when I work with 
                            clients.
                        </p><br/>

                        <p class="question">Favourite Quote or Motto?</p>

                        <p class="post-content">
                            10 years from now, make sure that you can say you chose your life, you didn’t 
                            settle for it.
                        </p><br/>

                    </div>
                </div>

                {/*for the blog post author*/}
                    <AuthorCard
                        authors={{
                            "georgie-mansfield": [
                                "/potraits/georgie.jpg",
                                "profile_img vivw_img",
                                "Georgie Mansfield",
                                "Education Team",
                            ],
                        }}
                    />
                {/*End of blog posts*/}
            </div>
        );
    }
}
export default blogPost25;
