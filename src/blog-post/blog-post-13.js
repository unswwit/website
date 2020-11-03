import React, { Component } from "react";
import ".././style.css";
import "./blog-post.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";

class blogPost13 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/blog-header.png" title="Blog Post #13" />

        {/*Start of blog post*/}
        <div className="blog-content">
          <div>
            <h2 className="blog-title">Upskill yourself in: MECHATRONICS</h2>
            <p className="date"> 13th July 2020 </p>
          </div>

          <div className="post">
            <p className="post-content">
              Mechatronic engineering is a broad form of engineering, combining
              mechanical, electrical and software disciplines. This field
              provides the expertise to create computer-controlled machines such
              as robotics and autonomous systems, and microprocessor-based
              technologies. Harnessing these skills can lead to careers
              associated with robotics, automation, control system design,
              medical and assistive technology, human-machine interaction and
              more!{" "}
            </p>
            <br />

            <p className="post-content">
              This blog post will cover the three principles of mechatronics
              engineering, including mechanical, electrical, and computing, with
              tools, software, and techniques for each.
            </p>
            <br />

            <h2 className="post-heading">Mechanical</h2>

            <img
              className="floatRight"
              src={
                process.env.PUBLIC_URL + "/blog-attachments/blog-13-mech.png"
              }
              alt="Mechanical Logo"
            />

            <p className="question">CAD MODELLING</p>

            <p className="post-content">
              Learning CAD (computer-aided design) plays a crucial role in
              bringing your structural designs to life. In two dimensions, CAD
              is useful for creating laser-cutting files. In three dimensions,
              CAD enables you to effectively simulate your work, communicate
              your visions and 3D print original designs.{" "}
            </p>
            <br />

            <p className="question">Useful Software:</p>

            <ul className="list">
              <li className="question">SolidWorks</li>
              <p className="post-content">
                Software that runs primarily on Microsoft Windows. SolidWorks is
                an assembly-driven software, allowing the user to create a
                complete computer-aided design by combining parts from other
                files. It also includes advanced simulation packages and
                manufacturing tools, which can be used to develop mechatronic
                systems from start to finish. It’s used for planning, visual
                ideation, modeling, feasibility assessment, prototyping, and
                project management in the early stages and later for the design
                and building of mechanical, electrical, and software elements.
              </p>
              <br />

              <li className="question">Fusion360</li>
              <p className="post-content">
                A cloud-based and Mac-friendly software. Fusion 360 allows the
                designer to build multiple components in a single file, adding
                ease to the assembly process. It also excels in mesh modeling,
                which allows the user to create more abstract curves and
                geometric surfaces.
              </p>
              <br />

              <li className="question">Adobe Illustrator</li>
              <p className="post-content">
                A vector graphics editing program. Vector graphics create shapes
                by connecting points with lines and curves. Images may,
                therefore, be scaled up or down without appearing pixelated.
                This program is therefore ideal for 2D CAD.
              </p>
              <br />

              <li className="question">AutoCAD</li>
              <p className="post-content">
                A drawing and design program that allows designers to create
                designs quickly. While drawing by hand, designers can create 2d
                drawings or 3D models or constructions. The program includes
                features like layering, resizing objects, and a database of
                objects that can be used in the future. It has a range of uses,
                such as generating graphs for presentations or creating the
                architecture of a building. It’s used in interior, aeronautical,
                engineering and architectural designs as well as for fine art,
                logos, maps, and greeting cards.{" "}
              </p>
              <br />
            </ul>

            <p className="question">SIMULATION</p>

            <p className="post-content">
              Robotics simulators are important tools for designing effective
              robots. By assessing algorithms, performing regression testing,
              and training AI systems, you can validate your design before
              implementing them in the real world.
            </p>
            <br />

            <p className="question">Useful Software:</p>

            <ul className="list">
              <li className="question">Gazebo</li>
              <p className="post-content">
                an open-source 3D robotics simulator. Using robust physics
                engines, high-quality graphics, and support code, this software
                can accurately and efficiently simulate populations of robots in
                complex environments.
              </p>
              <br />
            </ul>

            <br />
            <h2 className="post-heading">Electrical</h2>

            <img
              className="floatRight"
              src={
                process.env.PUBLIC_URL + "/blog-attachments/blog-13-elec.png"
              }
              alt="Electrical Logo"
            />

            <p className="question">PCB DESIGN</p>

            <p className="post-content">
              When creating unique machines, it may be necessary to customise
              your own electronics. In these cases, PCB (printed circuit board)
              design may prove useful in order to bring niche circuitry to life.
            </p>
            <br />

            <p className="question">Useful Software:</p>

            <ul className="list">
              <li className="question">Altium Designer</li>
              <p className="post-content">
                One of the most popular PCB design software packages. The layout
                software allows the user to manufacture circuit boards by
                defining electrical connectivity, component placement and
                routing.
              </p>
              <br />
            </ul>
            <br />

            <p className="question">CIRCUIT SIMULATION</p>

            <p className="post-content">
              Circuit simulation is an incredibly useful tool. It allows a user
              to design and test circuits virtually, negating the risks and
              difficulties associated with electricity use. When designing a
              circuit, producing a successful simulation is the fastest,
              cheapest and safest way to verify your work.
            </p>
            <br />

            <p className="question">Useful Software:</p>

            <ul className="list">
              <li className="question">LTspice</li>
              <p className="post-content">
                A high-performance analog circuit simulation software, allowing
                the user to perform schematic capturing and waveform viewing.
                The software contains a library of switching regulators,
                amplifiers and general circuit devices. It’s useful for those
                working with radio frequency electronics, power electronics,
                audio electronics, digital electronics, and in other
                disciplines. This tool is especially useful for testing out
                ideas that use high currents and require many safety factors
                during testing
              </p>
              <br />

              <li className="question">TINA</li>
              <p className="post-content">
                Executes DC, transient and frequency domain analysis with
                personalised result formatting. This software includes a virtual
                multimeter, allowing the user to probe circuit nodes.
                Additionally, microcontroller (MCU) simulation and RF network
                analysis are valuable in TINA 9.0. It facilitates the
                simulation, design, and real-time testing of hardware
                description language and mixed electronic circuits.
              </p>
              <br />
            </ul>

            <br />
            <h2 className="post-heading">Computing</h2>

            <img
              className="floatRight"
              src={
                process.env.PUBLIC_URL + "/blog-attachments/blog-13-comp.png"
              }
              alt="Computing logo"
            />

            <p className="question">PROGRAMMING LANGUAGES</p>

            <ul className="list">
              <li className="question">C</li>
              <li className="question">Python</li>
            </ul>
            <br />

            <p className="question">PROGRAMMING PLATFORMS</p>

            <p className="post-content">
              While it is important to become literate in versatile programming
              languages, it is also useful to know how to use specific
              programming platforms. These platforms are often useful for
              creating simple projects and prototypes, and for data analysis.
            </p>

            <ul className="list">
              <li className="question">Arduino</li>
              <p className="post-content">
                A computing platform and an open-source hardware and software
                company. Arduino manufactures microcontrollers and compatible
                electronic components which are ideal for prototyping and simple
                projects. The microcontrollers are coded through an integrated
                development environment (IDE) using a language based on C.
              </p>
              <br />

              <li className="question">Raspberry Pi</li>
              <p className="post-content">
                A platform similar to Arduino, but more complicated. It has the
                ability to run multiple programs and complete more intricate
                calculations. Raspberry Pi is compatible with many languages
                such as C, Python and Java.
              </p>
              <br />

              <li className="question">MATLAB</li>
              <p className="post-content">
                A programming platform which enables the user to analyse data,
                develop algorithms and create models and applications. MATLAB is
                a matrix-based language, which is ideal for computational
                mathematics.
              </p>
              <br />
            </ul>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "victoria-ruming": [
              "/potraits/victoria.jpg",
              "profile_img vivw_img",
              "Victoria Ruming",
              "Education team",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost13;
