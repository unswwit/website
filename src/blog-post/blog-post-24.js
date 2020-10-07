import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost24 extends Component {
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
        title="Blog Post #24"
      />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class="blog-title">
              Sleep and Study 
            </h2>
            <p class="date">20th September 2020</p>
          </div>

          <div class="post">        
            <p class="post-content">
              In my time at university, I have learnt two things that most students have in common:
              <ol>
                <li>Their devout love for caffeine.</li>
                <li>The fact that at least once, everyone has pulled an all-nighter.</li>
              </ol>             
            </p>
            <br />
         
            <p class="post-content">
              And I believed that these two factors were just common aspects of university life. That was until I read <a href="https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316#:~:text=%22In%20Why%20We%20Sleep%2C%20Dr,with%20our%20sleep%2Ddeprived%20society." target="_blank" rel="noopener noreferrer"><i>Why We Sleep</i></a> by Matthew Walker. Before this book, I would drink an average of two cups of coffee a day and sleep around 7 hours per night. I led a very active lifestyle and thought that I was pretty on top of my health. What I did not understand was the vast implications of cutting down hours of sleep and how it impacted not only my neurological health but every other facet of my general health. Whilst there is a long list of benefits or lack thereof when you sleep for less than 8 hours, I want to share a secret I learned about the best study hack to ace your exams, and the answer is SLEEP.
            </p>
            <br />

            <p class="post-content">
              When we sleep, we go through two distinct phases, the first being REM (Rapid-Eye-Movement) Sleep and NREM (Non-Rapid-Eye-Movement) Sleep. REM sleep fuels creativity. It is a time for our brain to connect past experiences and emotions to build a more accurate representation of how our world works. We often hear people say that they need to "sleep on it" when contemplating big decisions, or have you ever woken up and the answer to your problems is now at the centre of your mind. Research shows that this problem solving, and creative control arises from REM sleep.
            </p>
            <br />

            <p class="post-content">
              However, memory consolidation occurs during NREM. In this phase, all the thoughts, ideas, and pieces of information we have stored in our short-term memory (stored in a region of the brain called the hippocampus) are transferred and consolidated to the Cortex. Critically, recalling information from long term memory can only occur if we have fallen asleep. Interestingly, Walker uses the metaphor of sleep, acting as a computer hard drive recovery service salvaging presumably deleted memory files. For instance, facts that we have forgotten soon after learning, such as a name or order of operations are recalled easily upon waking from a good night of sleep, leading to the lightbulb moment.
            </p>
            <br />

            <p class="post-content">
              Additionally, Dr Robert Stickgold, a researcher at Harvard Medical School, conducted a study in which students had to learn a visual memory task through repetition. One group of participants received a good night of sleep (8+ hours) on the day of learning and then tested three days later. They had good memory recall. Another group received a poor night of sleep (less than 8 hours) after learning and were tested three days later (the other nights having sufficient hours of sleep). This group failed to perform the memory task. Thus, Dr Stickgold’s research concluded that it is imperative to receive a good night of sleep after learning for memory consolidation. It does not matter if you catch up on sleep the days after. Memory consolidation is an all or nothing event.
            </p>
            <br />

            <p class="post-content">
              To sleep 8+ hours the night before a big study day is proven to be incredibly efficient. In doing so, you are emptying and cleaning the slate for the short-term memory centre of the hippocampus to be ready to absorb new information. The hippocampus like a USB has a limited storage capacity and sleep is incredibly important in enabling fact-based learning to occur.
            </p>
            <br />

            <p class="post-content">
            The KEY takeaways that I hope you have now gained are:
              <ul>
                <li>Before exams, aim to sleep for 8 hours! In doing so, you are moving all your information from short term to long term memory, so all the facts needed to ACE your exam are ready to be recalled.</li>
                <li>You need a good night of sleep before your study day to wipe the slate clean and absorb new information.</li>
                <li>Honestly, when in doubt, go to bed and sleep. It is just so good for you and it’s free!</li>
              </ul>  
            </p><br />

            <p class="post-content">
            I have now learnt that sleep and study go hand in hand. This book has changed my life, and an all-nighter for me is the thing of the PAST. I hope I have persuaded you to get a full night of sleep. Good Luck!
            </p><br />

            <div class="img-box">
                <img
                src={process.env.PUBLIC_URL + "/blog-attachments/blog-23-why-we-sleep.jpg"}
                alt="why-we-sleep"
                resizeMode="contain"
                />
            </div>

            <p class="post-content" style={{fontSize: "11pt"}}>
            Professor Matthew Walker is a Professor of Neuroscience and Psychology at the University of California, Berkeley, and Founder and Director of the Center for Human Sleep Science.
            </p><br />
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
        authors={{"elisa-sanjurjo":["/potraits/elisa.jpg", "profile_img vivw_img", "Elisa Sanjurjo", "Education team"]}}          
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost24;
