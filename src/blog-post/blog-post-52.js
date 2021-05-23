import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost52 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #52" />
        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>The Quantum Computing Race</h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>April 13, 2021</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              Computers are complex, intricate machines capable of solving many
              human challenges. Through computer science, we transform simple on
              and off switches into systems that store and manipulate
              information. However, they come down to one thing: millions and
              billions of bits*. To make classical computers faster, and better,
              we can do two things: make more bits, or make our bits smaller.
            </p>

            <p className={styles.postContent}>
              However, we’re fast approaching a hard limit: the size of an atom
              itself. The smaller we make our transistors (electrical switches),
              the closer we get to quantum physics - a subatomic netherworld
              where our normal assumptions about space and time no longer make
              sense. If we make our transistors too small, electrons may
              ‘quantum tunnel’, that is, teleport to the other side - as if the
              barrier did not exist at all. But if classical computing fails,
              why not make radically different computers based upon quantum
              physics itself?
            </p>

            <p className={styles.postContent}>
              What exactly is quantum physics about? It describes the behaviour
              of tiny particles, from molecules to electrons to photons. Quantum
              particles behave and interact like waves, but when we measure
              them, they look like points - which allows for some very
              interesting observations.
            </p>

            <p className={styles.postContent}>
              Firstly, according to Heisenberg's Uncertainty Principle, it is
              impossible to know precisely where anything is nor how fast it
              moves. Everything happens on a probability curve for its location
              - which means an electron in my dinner has a high probability of
              being in my dinner, and a very low probability of being on Mars -
              but theoretically it could still be found on Mars.
            </p>

            <p className={styles.postContent}>
              Secondly, you may have heard of Schrödinger's cat - a famous
              analogy describing the mind bending paradox of quantum
              superposition. We have a cat, some cat food and a radioactive
              chemical in a closed box. At some unknown time the radioactive
              chemical will poison the cat's food, causing the poor cat to
              perish. From a quantum perspective, this cat is neither alive nor
              dead - it is simultaneously both at the same time. The cat's
              mortality is entirely undetermined until we open the box and look
              inside.
            </p>

            <p className={styles.postContent}>
              Introducing quantum computing. Instead of bits we have quantum
              ‘qubits’, where we, for example, decide a clockwise spin is ‘1’
              and an anticlockwise spin is ‘0’. But like Schrödinger's cat,
              quantums can also exist in superposition - they might have a 70%
              probability of spinning clockwise, and a 30% chance of spinning
              anticlockwise. This isn’t a limitation of our knowledge or our
              measuring equipment, it's a fundamental tenet of how our universe
              works - randomness.
            </p>

            <p className={styles.postContent}>
              If 1 qubit can have 2 values simultaneously, then 4 qubits can
              store 16 values, and 16 qubits can store 65536 values. This means
              we multiply the amount of information we manipulate, with just one
              caveat - we can only read a tiny subset of this information at
              once.
            </p>

            <p className={styles.postContent}>
              Regardless, we can take advantage of this probabilistic behaviour
              to do interesting, and possibly dangerous, computations. Modern
              cybersecurity relies on the difficulty of factoring huge numbers,
              a mammoth task that takes modern supercomputers millions of years
              to solve. However, a quantum computer might use its own wave
              interference to cancel out invalid factorisations, cracking codes
              including 128-bit AES encryption in mere seconds. On the other
              hand, the new field of quantum cryptography could rely on the
              physics laws of uncertainty, becoming truly unbreakable.
            </p>

            <p className={styles.postContent}>
              A quantum computer could model molecules and chemical reactions to
              exceptional detail, providing biological insights that might
              identify the next medical breakthrough. We could simulate complex
              systems from climate change to financial markets, with the new
              knowledge helping us build a more sustainable future. With
              Grover’s Algorithm, quantum computers could search databases in a
              fraction of the time, allowing us to analyse greater amounts of
              data.
            </p>

            <p className={styles.postContent}>
              But why are quantum computers so difficult to create? Qubits are
              fragile, unstable: their states change in fractions of a second,
              and any external noise will distort them. Researchers can’t even
              read qubit values without ‘collapsing’ their states, making it
              equivalent to finding errors blindfolded. Even more worryingly,
              it’s theoretically impossible to copy a quantum particle without
              altering the original, making any ‘clone and compare’ correction
              method impossible.
            </p>

            <p className={styles.postContent}>
              So how have scientists and engineers tackled these challenges so
              far? One method involves storing tiny loops of superconducting
              metal near absolute zero - colder than outer space. Magnetic
              shields protect these qubits from thermal noise, and microwaves
              manipulate the behaviour within.
            </p>

            <p className={styles.postContent}>
              Both Google and IBM are racing to develop this technology. In 2019
              Google claimed they achieved ‘quantum supremacy’ with their
              53-qubit Sycamore machine, which solved in 200 seconds a problem
              that would reportedly take IBM’s supercomputer 10,000 years.
              However, this has been disputed by IBM physicists, which claim
              their computer would take only 2.5 days with some clever
              programming. On the other hand, IBM has promised to deliver a
              1000-qubit computer by 2023, an important milestone that would
              have us well on our way to a machine capable of breaking internet
              encryptions.
            </p>

            <p className={styles.postContent}>
              Even with supercooling, these techniques are imperfect, with
              Google’s Sycamore machine reportedly producing 99% noise and only
              1% signal. Furthermore, the huge costs involved are not feasible
              for everyday machines. However, ORCA, a UK firm, recently
              developed a promising approach to storing and entangling room
              temperature photons - avoiding the need to build giant
              liquid-helium refrigerators. Another popular method involves
              placing doped atoms on a silicon chip to nanometre precision, such
              that their quantum properties are heightened. In 2018, Prof
              Michelle Simmons (UNSW) won Australian of the Year for leading
              research in this area, creating a silicon quantum processing unit
              that is 200 times faster than any before.
            </p>

            <p className={styles.postContent}>
              Controlling particles whose very existence is riddled with
              uncertainty is a huge challenge for physicists and computer
              scientists today. As the race to create a quantum computer
              intensifies, we will continue to unlock the potential for
              computing to change our world.
            </p>
            <br />

            <p className={styles.postContent}>
              <em>
                *Read more about bits and bytes in our&nbsp;
                <a
                  href="https://unswwit.com/#/resources/blog/36"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  “The Small, The Powerful...The Byte”
                </a>
              </em>
            </p>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "chelsea-chaffey": [
              "/potraits/blog-authors/chelsea-chaffey.png",
              styles.anonProfile,
              "Chelsea Chaffey",
              "Education Team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost52;
