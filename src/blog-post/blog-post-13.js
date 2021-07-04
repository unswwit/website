import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from ".././header";
import ShareBtns from "./ShareBtns";
import Tabletop from "tabletop";
import Chip from "@material-ui/core/Chip";
import BlogEndPreview from "./blog-end-preview";
import { Link } from "react-router-dom";

class blogPost13 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
      currentBlogNo: 0,
      currentBlog: "",
      previousBlogs: [],
      currentBlogCategories: [],
    };
  }

  render() {
    // Get Previous 2 Blog Info
    var currBlogNo = parseInt(
      String(this.props.match.url).split("/").reverse()[0]
    );
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: (googleData) => {
        const blogOriginal = googleData["blog-previews"]["elements"];
        let blogPreviews = googleData["blog-previews"]["elements"];
        const authorList = googleData["blog-authors"]["elements"];
        blogOriginal.forEach((blogPreview, index) => {
          const tempAuthor = {};
          blogPreview.authors.split(",").forEach((authorKey) => {
            const result = authorList.filter(
              (authorItem) => authorItem.authors === authorKey
            )[0];
            tempAuthor[authorKey] = [
              `/potraits/blog-authors/${result.img}`,
              result.name,
            ];
          });
          blogPreviews[index].authors = tempAuthor;
        });

        var lastTwoBlogPreviews = blogPreviews.slice(
          currBlogNo - 3,
          currBlogNo - 1
        );

        var currBlogCategories = blogPreviews[currBlogNo - 1].category.split(
          ","
        );

        this.setState({
          previousBlogs: lastTwoBlogPreviews,
          currentBlog: blogPreviews[currBlogNo - 1],
          currentBlogNo: currBlogNo,
          currentBlogCategories: currBlogCategories,
        });
      },
      simpleSheet: false,
    });

    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #13" />

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Upskill yourself in: MECHATRONICS
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>July 13, 2020</span>
              <span>
                <ShareBtns />
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
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

            <p className={styles.postContent}>
              This blog post will cover the three principles of mechatronics
              engineering, including mechanical, electrical, and computing, with
              tools, software, and techniques for each.
            </p>
            <br />

            <h2 className={styles.postHeading}>Mechanical</h2>

            <img
              className={styles.floatRight}
              src={
                process.env.PUBLIC_URL + "/blog-attachments/blog-13-mech.jpg"
              }
              alt="Mechanical Logo"
            />

            <p className={styles.question}>CAD MODELLING</p>

            <p className={styles.postContent}>
              Learning CAD (computer-aided design) plays a crucial role in
              bringing your structural designs to life. In two dimensions, CAD
              is useful for creating laser-cutting files. In three dimensions,
              CAD enables you to effectively simulate your work, communicate
              your visions and 3D print original designs.{" "}
            </p>
            <br />

            <p className={styles.question}>Useful Software:</p>

            <ul className={styles.list}>
              <li className={styles.question}>SolidWorks</li>
              <p className={styles.postContent}>
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

              <li className={styles.question}>Fusion360</li>
              <p className={styles.postContent}>
                A cloud-based and Mac-friendly software. Fusion 360 allows the
                designer to build multiple components in a single file, adding
                ease to the assembly process. It also excels in mesh modeling,
                which allows the user to create more abstract curves and
                geometric surfaces.
              </p>
              <br />

              <li className={styles.question}>Adobe Illustrator</li>
              <p className={styles.postContent}>
                A vector graphics editing program. Vector graphics create shapes
                by connecting points with lines and curves. Images may,
                therefore, be scaled up or down without appearing pixelated.
                This program is therefore ideal for 2D CAD.
              </p>
              <br />

              <li className={styles.question}>AutoCAD</li>
              <p className={styles.postContent}>
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

            <p className={styles.question}>SIMULATION</p>

            <p className={styles.postContent}>
              Robotics simulators are important tools for designing effective
              robots. By assessing algorithms, performing regression testing,
              and training AI systems, you can validate your design before
              implementing them in the real world.
            </p>
            <br />

            <p className={styles.question}>Useful Software:</p>

            <ul className={styles.list}>
              <li className={styles.question}>Gazebo</li>
              <p className={styles.postContent}>
                an open-source 3D robotics simulator. Using robust physics
                engines, high-quality graphics, and support code, this software
                can accurately and efficiently simulate populations of robots in
                complex environments.
              </p>
              <br />
            </ul>

            <br />
            <h2 className={styles.postHeading}>Electrical</h2>

            <img
              className={styles.floatRight}
              src={
                process.env.PUBLIC_URL + "/blog-attachments/blog-13-elec.jpg"
              }
              alt="Electrical Logo"
            />

            <p className={styles.question}>PCB DESIGN</p>

            <p className={styles.postContent}>
              When creating unique machines, it may be necessary to customise
              your own electronics. In these cases, PCB (printed circuit board)
              design may prove useful in order to bring niche circuitry to life.
            </p>
            <br />

            <p className={styles.question}>Useful Software:</p>

            <ul className={styles.list}>
              <li className={styles.question}>Altium Designer</li>
              <p className={styles.postContent}>
                One of the most popular PCB design software packages. The layout
                software allows the user to manufacture circuit boards by
                defining electrical connectivity, component placement and
                routing.
              </p>
              <br />
            </ul>
            <br />

            <p className={styles.question}>CIRCUIT SIMULATION</p>

            <p className={styles.postContent}>
              Circuit simulation is an incredibly useful tool. It allows a user
              to design and test circuits virtually, negating the risks and
              difficulties associated with electricity use. When designing a
              circuit, producing a successful simulation is the fastest,
              cheapest and safest way to verify your work.
            </p>
            <br />

            <p className={styles.question}>Useful Software:</p>

            <ul className={styles.list}>
              <li className={styles.question}>LTspice</li>
              <p className={styles.postContent}>
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

              <li className={styles.question}>TINA</li>
              <p className={styles.postContent}>
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
            <h2 className={styles.postHeading}>Computing</h2>

            <img
              className={styles.floatRight}
              src={
                process.env.PUBLIC_URL + "/blog-attachments/blog-13-comp.jpg"
              }
              alt="Computing logo"
            />

            <p className={styles.question}>PROGRAMMING LANGUAGES</p>

            <ul className={styles.list}>
              <li className={styles.question}>C</li>
              <li className={styles.question}>Python</li>
            </ul>
            <br />

            <p className={styles.question}>PROGRAMMING PLATFORMS</p>

            <p className={styles.postContent}>
              While it is important to become literate in versatile programming
              languages, it is also useful to know how to use specific
              programming platforms. These platforms are often useful for
              creating simple projects and prototypes, and for data analysis.
            </p>

            <ul className={styles.list}>
              <li className={styles.question}>Arduino</li>
              <p className={styles.postContent}>
                A computing platform and an open-source hardware and software
                company. Arduino manufactures microcontrollers and compatible
                electronic components which are ideal for prototyping and simple
                projects. The microcontrollers are coded through an integrated
                development environment (IDE) using a language based on C.
              </p>
              <br />

              <li className={styles.question}>Raspberry Pi</li>
              <p className={styles.postContent}>
                A platform similar to Arduino, but more complicated. It has the
                ability to run multiple programs and complete more intricate
                calculations. Raspberry Pi is compatible with many languages
                such as C, Python and Java.
              </p>
              <br />

              <li className={styles.question}>MATLAB</li>
              <p className={styles.postContent}>
                A programming platform which enables the user to analyse data,
                develop algorithms and create models and applications. MATLAB is
                a matrix-based language, which is ideal for computational
                mathematics.
              </p>
              <br />
            </ul>
          </div>
        </div>
 

        <div className={styles.chipContent}>
          <div className={styles.BlogCategories}>
            {this.state.currentBlogCategories.map((category) => {
              const chipColour = "#7F7F7F";
              return (
                <Link
                  to={{ pathname: "/media/blog", category }}
                  style={{ textDecoration: "none" }}
                >
                  <Chip
                    size="medium"
                    label={category}
                    style={{
                      textTransform: "uppercase",
                      backgroundColor: chipColour,
                      color: "white",
                      margin: "5px",
                    }}
                    onClick={() => {}}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "victoria-ruming": [
              "/potraits/blog-authors/victoria.jpg",
              styles.authorProfile,
              "Victoria Ruming",
              "Education team",
            ],
          }}
        />
 

        {/*Bottom Share Buttons*/}
        <div className={styles.shareContent}>
          <p className={styles.shareTextPosition}>Share this blog post</p>
          <ShareBtns />
        </div>

        {/*More From WIT Section*/}
        <div className={styles.moreFromWITContent}>
          <p className={styles.moreFromWITTextPosition}>More From WIT</p>
          {this.state.previousBlogs.map((blog) => {
            return (
              <div className={styles.scaleDown}>
                <BlogEndPreview
                  key={blog.blogNo}
                  blogNo={blog.blogNo}
                  imgUrl={`/blog-covers/${blog.img}`}
                  heading={blog.heading}
                  date={blog.date}
                  subheading={blog.subheading}
                  authors={blog.authors}
                  category={blog.category.split(",")}
                />
              </div>
            );
          })}
        </div>

        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost13;
