import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";

class blogPost36 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/blog-header.png" title="Blog Post #36" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div class="blog-content">
          <div>
            <h2 class="blog-title">
              The Small, the Powerful…The Byte
            </h2>
            <p class="date">1st November 2020</p>
          </div>

          <div class="post">
            <p class="post-content">
              The byte. The elemental piece of technology that is so present,
              yet so invisible. Unobservable, yet absolutely set in stone.
              Hundreds and thousands of combinations, yet it’s only made up of
              1s and 0s. Intangible, but foundational. That’s the byte.
            </p>
            <br />
            <p class="question">
              What is the byte?
            </p>
            <p class="post-content">
              By definition, a byte is a series of 8 bits. A bit is the smallest
              increment of data, and can only be made up of binary digits, for
              those not as technologically advanced like myself 0 or 1. It is
              from the 8-bit byte that computers can produce letters, numbers,
              or symbols. One byte has up to 28 or 256 different combinations,
              that form the hundreds of possibilities of technology and hold
              even more data and information that we experience and use in
              everyday life.
            </p>
            <p class="question">
              So why 8 bits?
            </p>
            <p class="post-content">
              Funnily enough, early computer systems did attempt to use 5-bit
              code, giving a mere 32 possible combinations, which was practical
              if you only wanted lowercase letters of the English alphabet and
              a few symbols. Unsurprisingly, this did not suffice. Trying to keep
              it as minimal as possible, the 6-bit byte was then implemented and
              used in a variety of IBM technologies, and with 26  or 64
              possibilities, uppercase and lowercase letters with more symbols.
              But still, limitations urged the development of more, and though a
              7-bit byte was considered adequate (and is still used for Unicode
                character sets), in 1970 the Intel 8080 became the first
                widely-accepted 8-bit microprocessor.
            </p>
            <p class="question">
              The Small, the Powerful
            </p>
            <p class="post-content">
              There’s a deep history and amazing complexity surrounding the byte,
              much more than  we can express here.
            </p>
            <p class="post-content">
              But it’s not just that the byte is important, that it’s used
              everyday in our lives, that it makes social media, typing, and
              even pictures possible… but it’s that we can be like the byte.
            </p>
            <ul>
              <li>
                <p class="post-content">
                  A byte is tiny, yet essential. Say goodbye to the byte then
                  say goodbye to everyday technology that makes up our lives too.
                </p>
              </li>
              <li>
                <p class="post-content">
                A byte is pretty useless by itself, it can only create a single
                letter or character that’s meaningless alone. But put bytes
                together and we can develop novels, stories, communicate and
                share experiences, unite each other, and share ideas that build
                individuals, families and then societies up. All because of an
                initial byte.
                </p>
              </li>
            </ul>

            <br />
            <p class="post-content">
              And it’s the same for us.
            </p>
            <p class="post-content">
              It was one byte that changed the future of technology, and with
              multiple bytes, society was revolutionised.
            </p>
            <p class="post-content">
              In  the same way, it only takes one of us, our one dream, our one
              passion, or our one motivation to change the world, to inspire
              rapid change and implementation. Combining this with the support,
              the collaboration of other people around us, what may feel like
              our individual, meaningless aspirations are catalysed into the
              stories that make up our journey.
            </p>
            <p class="post-content">
            The byte is tiny and absolutely invisible, and sometimes we feel
            tiny and invisible and our efforts feel pointless, but those efforts
            make our foundation and the contribution of other people, or if you
            like, other bytes, make our journey worthwhile, are the supporting
            characters in our story that make the hardships, the failure and
            the journey worthwhile.
            </p>
            <p class="post-content">
            Technology is so much more than just code. Technology is individuals
            that work together to become people that change our society, that no
            matter how invisible they are they continue to make a difference,
            continue to build other people up, and continue to inspire change.
            </p>
            <br />
            <p class="post-content">
              That’s the byte. And that’s absolutely us.
            </p>
            <br />
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
export default blogPost36;
