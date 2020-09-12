import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost16 extends Component {
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
        title="Blog Post #16"
      />

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class = "blog-title">Introducing Erica Joy Baker, Director of Engineering at GitHub</h2>
            <p class = "date">22nd July 2020</p>
          </div>

          <div class="post">
          <p class="question">Summary of Career/notoriety</p>

          <p class="post-content">Erica Joy Baker has worked in impressive engineer and management roles at some of the world's top tech companies such as GitHub, Google, Slack and Microsoft but she is best known for her outspoken advocacy for diversity and inclusion in the tech world. </p><br/><br/>



          <p class="question">Path into Stem</p>

          <p class="post-content">Erica’s childhood was unique in many ways. Born in Germany to parents in the US Air Force, she moved frequently, living in many US states. While computers were primitive and novel during the 1980s, Erica had access to them earlier than most kids. Her mum created combat plans for the Air Force on a computer in their home, which Erica got to play on. In fifth grade, her teacher selected her to go to a training for the precursor to the World Wide Web and she was hooked. In an <a href="https://techiesproject.com/erica-baker/">interview she had with Techies Project</a>, Erica recalls thinking, “I love this. I want to do this.” From that moment on, Erica delved into the world of technology, learning how to install programs, hack, and write code. Naturally, she decided to study computer science at university. But attending the University of Miami was not what she expected and she didn’t like it. She was one of the only women and one of the only black students. She felt like an outsider that wasn’t accepted, so she transferred to the University of Alaska Fairbanks, where she earned an associate’s degree in what we would refer to today as information technology. From there, she launched her career at the university. </p><br/>

          <p class="post-content">Erica’s experience at the University of Miami was the first of many uncomfortable experiences she would have as a black woman working in tech. Whilst working at Google a decade after graduation, she recalls that the CEO mistook her as an assistant instead of an engineer. When the CEO discovered she was an engineer, he wanted to work with a male instead, and advised her to hang a door sign that explained her role, unlike any other engineers. The situation was not unique, and Erica grew frustrated that her colleagues did not see her as capable as her white, male counterparts. She came to realize that there were some workplace cultures where she would not be able to succeed, no matter how hard she was willing to work. This inspired her to advocate that companies should not only hire but retain minority employees. It also sparked her idea to create an internal spreadsheet where Google employees reported their salary data to better understand pay disparities within the company.</p><br/><br/>



          <p class="question">Career Success</p>

          <p class="post-content">In addition to Google, Erica has worked for other well known companies in Silicon Valley including GitHub, Slack, Patreon, and Microsoft. She’s come a long way since she began her career working in tech support for her university! Today, she serves as the Director of Engineering at Github. </p><br/><br/>



          <p class="question">Advocacy</p>

          <p class="post-content">Along with her commitment to excellence in her work, Erica is passionate about diversity and inclusion in STEM, by creating environments that are welcoming toward women and people of color. </p><br/>

          <p class="post-content">As a coveted public speaker who has appeared on the TED stage, Erica embraces the opportunity to use her voice to start conversations about sexism and racism to propel change in the workplace. In a 2016 interview with Techies Project, Erica said, “Right now I get to have this voice—people listen to me for some reason, and I have support at work to continue speaking about these things; and permission to say whatever I feel from the CEO of my company—which is super rare, Not everybody gets that. And it’s a huge privilege, and so I’m not going to waste that privilege. I want to use it to speak up so that we can make improvements. I think the first step is talking about what’s going on and then getting uncomfortable... And then we can move on to fixing it.”</p><br/>

          <p class="post-content">In addition to speaking on diversity and inclusion, Erica advocates expanding access to tech education. She has served as a tech mentor for Black Girls Who Code, served as a Diversity Council Member for over two years, and currently serves on the advisory board for Hack the Hood. </p><br/>

          <p class="post-content">She has also used her online platform to advance inclusion and diversity in tech. Erica was behind #RealDiversityNumbers, a movement on Twitter to acquire retention numbers and lawsuits for various companies. She also emphasises the importance of  prominent figures using their platform to advance diversity and inclusion. </p><br/>

          <p class="post-content">Erica Baker is a unique role model and voice for women and minorities in tech. She’s a force to be reckoned with, and gives us all hope there will be a place for our skills, enthusiasm and ideas in whatever area of the tech field we choose. </p><br/><br/>

          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
        authors={{"vivian-wong":["/potraits/vivw.jpg", "profile_img vivw_img", "Vivian Wong","Education Executive"]}}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost16;
