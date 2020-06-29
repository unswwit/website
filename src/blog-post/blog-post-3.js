import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import BlogTemplate from "./blogTemplate";

class blogPost3 extends Component {
    render() {
      let blogContent = {
        0: ["post-content","High achiever, resilience, and persistence are not unknown to tech CEO Marissa Mayer. Mayer has an inspirational journey, from becoming the first female software engineer at Google while Google was still a start-up, the CEO of Yahoo! despite the criticism surrounding her, all the way to founding her own AI start-up. She has continually broken barriers in technology and has been the talk of the world.","break"],
  
        1: ["post-content","In this week’s blog, we take a look at 4 lessons we can learn from her amazing life, and how she continues to redefine technology as we know it today.","break"],
  
        2: ["question","Lesson 1: Computer Science is a form of Art","break"],
        3: ["post-content","Perhaps “art” is not the first thing that comes to our mind when considering technology.",""],
        4: ["post-content","Yet this is what sparked Mayer’s interest in technology when she undertook a degree in Symbolic Systems at Stanford University. It involved exploring philosophy, linguistics, computer science and examining the complexity and depth in how people think and seeing how computers can reflect that same logic.",""],
        5: ["post-content","Mayer took this view to her tech projects, resulting in an impact in tech that goes beyond computers, and redefines the way people think.","break"],

        6: ["question","Lesson 2: Feeling Confident Even When Feeling Unprepared.","break"],

        7: ["post-content","Big decisions are daunting. Marissa Mayer was no stranger to feeling unprepared when making big decisions at certain stages of her life.",""],
        8: ["post-content","Mayer had a whopping 14 job offers lined up after finishing her studies from Stanford University. Each offer was diverse and exciting, but after weeks of anxiety, stress, and support from her mentors, she chose her life-changing role at Google, based on two things:",""],
        9: ["list","Surrounding herself with smart, ambitious and like-minded people.","start"],

        10: ["list","Pursuing a role that she didn’t feel totally prepared for, a role that would challenge her, pushing her out of her comfort zone, thus allowing her to grow personally and professionally.","end"],

        11: ["question","Lesson 3: Dealing with Scrutiny","break"],

        12: ["post-content","Our daring goals in life, though exciting for us, are often matched with scrutiny from others."],

        13: ["post-content","For Mayer, this arises when she began working as a CEO at Yahoo!",""],
        14: ["post-content","Instead of receiving support as a female executive who was working in a male-dominated industry, she found criticism. Instead of receiving optimism for new ideas, she was handed pessimism.",""],
        15: ["post-content","As she redefined business models, strategizing for both the company’s short and long term goals, and implementing new initiatives in response to the constant disruption in the tech industry (for the better), the media took the opportunity to slam and criticize her decisions as well as her work ethic.", ""],
        16: ["post-content","But Mayer didn’t let it phase her. Instead, she took the progressive side of the criticism, pulling out valuable feedback that had been made, and was motivated by it to keep achieving more.", "break"],
        
        17: ["question","Lesson 4: The Daring Side of Reinventing","break"],
        18: ["Starting something brand-new, challenging the convention, and fear of failure is something we all grapple with."],
        19: ["post-content","Mayer’s work at Google began as the internet began to change the world. She designed Google’s search interface, was involved in major product management including Gmail, and developed systems for customising searches on Google.",""],
        20: ["post-content","Motivating her team at Yahoo! to achieve success was challenging. Instead of attempting to fix the declining lines of business, she led her team to recreate them, investing in mobile apps at the brink of their popularity. Redesigning a major company was a huge risk and although Yahoo! was later sold to Verizon, Mayer was a fundamental key in its future success.",""],
        21: ["post-content","After her resignation at Yahoo!, Mayer began her own start-up Lumi Labs, a business that utilises AI to complete mundane tasks. Lumi Labs gave Mayer the perfect opportunity to reinvent her own success, building a business based on passion, embracing new opportunities with confidence, viewing computer science as art, taking scrutiny in her stride, and seeing for herself the daring side of reinventing.",""]
      }
      
      return (
        <div>
        <BlogTemplate 
        blogNum="3"
        title="4 Lessons From Marissa Mayer's Life in Tech"
        date="3rd June 2020"
        content={blogContent}
        authors={{"georgie-mansfield":["/potraits/georgie.jpg", "profile_img vivw_img", "Georgie Mansfield", "Education Team"]}}
        />
      </div>              
      );
    }
  }
  export default blogPost3;
