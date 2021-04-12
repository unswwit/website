import React, { Component } from "react";
import ".././style.css";
import styles from "./blog-post.module.css";
import AuthorCard from "./authorCard";
import PageHeader from "../header";
import ShareBtns from "./ShareBtns";

class blogPost30 extends Component {
  //start webpage at the top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Cover Photo */}
        <PageHeader imgUrl="/headers/blog-header.jpg" title="Blog Post #30" />

        {/*End of Header*/}

        {/*Start of blog post*/}
        <div className={styles.blogContent}>
          <div>
            <h2 className={styles.blogTitle}>
              Technical Interview Walkthrough with Amanda Li and Vivian Shen
              (Part 2)
            </h2>
            <div className={styles.blogDetails}>
              <span className={styles.date}>October 11, 2020</span>
              <span><ShareBtns /></span>
            </div> 
          </div>

          <div className={styles.post}>
            <p className={styles.postContent}>
              In Technical Interview Walkthrough Part 1, Vivian Shen and Amanda
              Li provided valuable insights into their own experiences regarding
              technical interviews, and the advice they have learned along the
              way. But what structure does a typical technical interview follow,
              and how can you prepare yourself? In Part 2, Vivian and Amanda
              offer a comprehensive breakdown of a typical technical nterview
              for software engineering, complete with tips and tricks for giving
              yourself the best possible chance of succeeding.
            </p>
            <br />

            <p className={styles.question}>Technical Interview Step by Step Guide</p>

            <p className={styles.postContent}>
              <strong>Vivian(V)</strong>: I'm Vivian, and I’m a third-year
              studying B. Data Science & Decisions (Computational Major). I am
              the current President of WIT and I was a Google STEP Intern last
              summer, and I got offers to be a Google SWE Intern and an
              Atlassian Data Science Intern this Summer.
            </p>
            <br />

            <p className={styles.postContent}>
              <strong>Amanda(A)</strong>: I’m Amanda, and I’m a third-year
              student studying Software and Biomedical Engineering. I am
              currently the VP for WIT and the Careers Director for EngSoc. I
              started applying for internships this year, and I’m interning at
              AI Australia as a Web Dev. This summer, I’ll be an Atlassian
              Software Developer Intern.
            </p>
            <br />

            <p className={styles.postContent}>
              The structure of technical interviews would differ depending on
              the company and role you've applied to, so make sure you
              understand your own interview process. Today, we're going to go
              over the most common structure of technical interviews for a{" "}
              <strong>software engineering role</strong>. If you haven't already
              read our last blog post, you can do so here.
            </p>
            <br />

            <p className={styles.postContent}>
              The typical technical interview is ~45 minutes long:
            </p>

            <div className={styles.tableContainer}>
              <table className={styles.post}>
                <tbody>
                  <tr>
                    <th>Time</th>
                    <th>Task</th>
                    <th>Comments</th>
                  </tr>
                  <tr style={{ whiteSpace: "nowrap" }}>
                    <td className={styles.postContent}>5 min</td>
                    <td className={styles.postContent}>Self Introductions</td>
                    <td className={styles.postContent}>
                      Motivations for applying to this company and this specific
                      role.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.postContent}>30-35 min</td>
                    <td className={styles.postContent}>Technical Questions</td>
                    <td className={styles.postContent}>
                      Expect to be given either 1 hard question or 2 easy-medium
                      questions for you to CODE up. Always be asked about the
                      time and space complexity of your code
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.postContent}>5 min</td>
                    <td className={styles.postContent}>
                      Questions to ask the interviewer
                    </td>
                    <td className={styles.postContent}>
                      What do you want to know about the company,
                      internship/graduate training process, past intern/graduate
                      projects?{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />

            <p className={styles.postContent}>
              Today's question is: Given an array, find the duplicate element
            </p>
            <br />

            <ol className={styles.list}>
              {/*part 1*/}
              <li className={styles.question}> Clarify the question </li>
              <p className={styles.postContent}>
                Before you begin to code, you should always ask clarifying
                questions so that you have a holistic understanding of the
                question at hand.
              </p>
              <p className={styles.postContent}>
                "Is our given input just a single array?": yes
              </p>
              <p className={styles.postContent}>
                "What type(s) are we expecting in our array?": positive integers
                only
              </p>
              <p className={styles.postContent}>
                "What would the numbers look like in the array?": if the array
                is n+1 size, it will have integers 1 and n (inclusive)
              </p>
              <p className={styles.postContent}>
                "What should our function return? Boolean? The duplicated
                element?": return the value of the duplicated element or -1 if
                no duplicate
              </p>
              <p className={styles.postContent}>
                "How many elements would the array be expected to contain?":
                somewhere between 10-100 000 elements
              </p>
              <p className={styles.postContent}>"Can we get an empty array?": No</p>
              <p className={styles.postContent}>
                "Will our array always have one duplicate element?": Yes
              </p>
              <p className={styles.postContent}>
                "Will our array have more than one duplicate element?": No
              </p>
              <p className={styles.postContent}>
                "So if my array was [1,2,3,4,1,5,6,7,8,9] it would return 1
                correct?": Yes
              </p>
              <br />
              {/*part 2*/}
              <li className={styles.question}>Pick language</li>
              <p className={styles.postContent}>
                Today we'll be coding in Python since it's the language we're
                most comfortable programming in.
              </p>
              <br />
              {/*part 3*/}
              <li className={styles.question}>Verbalise your coding strategy </li>
              <p className={styles.postContent}>
                Think about your code implementation and verbalize how you
                intend to implement the code to the interviewer. After the
                interviewer has given you the 'green light' you should begin by
                choosing your coding language and start coding it up.
              </p>
              <br />
              <p className={styles.postContent}>
                Begin by saying anything that comes to your mind. You can begin
                by writing pseudocode (writing your implementation in English)
                and then translating that line by line. You can also first find
                a naive brute force solution and then later work on optimising
                your implementation.
              </p>
              <br />
              <p className={styles.postContent}>
                The brute force solution here would be to go through the array
                (iterate) and for every element, go through every element in the
                array to see if you can find a duplicate. We can do this by
                writing a nested for loop (for loop within a for loop).
              </p>
              <br />
              {/*part 4*/}
              <li className={styles.question}>Start coding</li>
              <p className={styles.postContent}>Pseudocode:</p>
              <pre>
                <code>For every element (call this i) in the array:</code>
                <br />
                <code style={{ marginLeft: "3em" }}>
                  For every element (call this j) in the array:
                </code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  If element i is the same as element j:
                </code>
                <br />
                <code style={{ marginLeft: "9em" }}>
                  We have found a duplicate
                </code>
                <br />
                <code>Otherwise, there are no duplicates</code>
                <br />
              </pre>{" "}
              <br />
              <p>Brute Force:</p>
              <pre>
                <code>def printDupNaive(nums):</code> <br />
                <code style={{ marginLeft: "3em" }}>
                  for i in range(0, len(nums)):
                </code>{" "}
                <br />
                <code style={{ marginLeft: "6em" }}>
                  for j in range(i+1, len(nums)):
                </code>{" "}
                <br />
                <code style={{ marginLeft: "9em" }}>
                  if nums[i] == nums[j]:
                </code>{" "}
                <br />
                <code style={{ marginLeft: "12em" }}>return nums[i]</code>{" "}
                <br />
                <code style={{ marginLeft: "3em" }}>return -1</code>
                <br />
              </pre>{" "}
              <br />
              {/*part 5*/}
              <li className={styles.question}>Optimise as you see fit</li>
              <p className={styles.postContent}>
                If you can think of ways to optimise the solution by yourself
                that's great! If not, always verbalise your thoughts so the
                interviewer knows what you're thinking about and they might give
                you a hint to point you in the right direction.
              </p>
              <br />
              <p className={styles.postContent}>
                Usually, going through all the data structures and algorithms
                you know and thinking about how they could be applied in this
                situation would help.
              </p>
              <br />
              <p className={styles.postContent}>
                <strong>Sort the array</strong>
              </p>
              <p className={styles.postContent}>
                We can begin by removing the nested loop by sorting our array
                first. Sorting first allows us to only compare adjacent elements
                as duplicates in a sorted list should be next to each other.
                This means only iterating through the array once, improving our
                time complexity.
              </p>
              <br />
              <p className={styles.postContent}>
                Python has built-in functions and libraries so take advantage of
                those instead of writing your own lengthy algorithms. If you are
                coding in C for example and must sort by yourself, make sure to
                choose an in-place sorting algorithm so the space complexity
                doesn’t worsen. Python’s sorting function is in-place.
              </p>
              <pre>
                <code>def printDupSort(nums):</code> <br />
                <code style={{ marginLeft: "3em" }}>nums.sort()</code>
                <br />
                <code style={{ marginLeft: "3em" }}>
                  for i in range(1, len(nums)):
                </code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  {" "}
                  if nums[i] == nums[i-1]:
                </code>
                <br />
                <code style={{ marginLeft: "9em" }}>return nums[i]</code> <br />
                <code style={{ marginLeft: "3em" }}>return -1</code>
              </pre>
              <br />
              <p className={styles.postContent}>
                <strong>Use a hashtable, dictionary or set</strong>
              </p>
              <p className={styles.postContent}>
                Alternatively, we can remove the nested loop by using a
                hashtable, dictionary or set. These data structures only store
                unique values. In Python, we can use a dictionary to store all
                the elements we’ve seen before. As we loop through our array, if
                our current element has appeared in the array before, it would
                be stored in ‘seen’ and hence we have found our duplicate.
              </p>
              <br />
              <p className={styles.postContent}>
                Python has built-in functions and libraries so take advantage of
                those instead of writing your own lengthy algorithms. If you are
                coding in C for example and must sort by yourself, make sure to
                choose an in-place sorting algorithm so the space complexity
                doesn’t worsen. Python’s sorting function is in-place.
              </p>
              <pre>
                <code>def printDupSort(nums):</code> <br />
                <code style={{ marginLeft: "3em" }}>seen = {"{}"} </code>
                <br />
                <code style={{ marginLeft: "3em" }}>for element in nums:</code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  if element in seen.keys():
                </code>
                <br />
                <code style={{ marginLeft: "9em" }}>return element</code>
                <br />
                <code style={{ marginLeft: "6em" }}>else:</code>
                <br />
                <code style={{ marginLeft: "9em" }}>seen[element] = True</code>
                <br />
                <code style={{ marginLeft: "3em" }}>return -1</code>
                <br />
              </pre>
              <br />
              <p className={styles.postContent}>
                <strong>
                  Use an algorithm - Floyd's Tortoise and Hare Cycle Detection
                  Algorithm
                </strong>
              </p>
              <p className={styles.postContent}>
                Though not necessary, you can also use an existing algorithm to
                help optimise your solutions. Here, Floyd's Tortoise and Hare
                Cycle Detection Algorithm has two pointers that move at
                different speeds through the array until they both point to
                equal values. Let's say for every move our tortoise pointer
                makes, our hare pointer moves two times. We keep doing this
                until we have found a duplicated value.
              </p>
              <pre>
                <code>def printDupAlgo(nums):</code>
                <br />
                <code style={{ marginLeft: "3em" }}>
                  tortoise = hare = nums[0]
                </code>
                <br />
                <code style={{ marginLeft: "3em" }}>while True:</code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  tortoise = nums[tortoise]
                </code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  hare = nums[nums[hare]]
                </code>
                <br />
                <code style={{ marginLeft: "6em" }}>if tortoise == hare:</code>
                <br />
                <code style={{ marginLeft: "9em" }}>break</code>
                <br />
                <br />
                <code style={{ marginLeft: "3em" }}>
                  # Finding the duplicate value
                </code>
                <br />
                <code style={{ marginLeft: "3em" }}>tortoise = nums[0]</code>
                <br />
                <code style={{ marginLeft: "3em" }}>
                  while tortoise != hare:
                </code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  tortoise = nums[tortoise]
                </code>
                <br />
                <code style={{ marginLeft: "6em" }}>hare = nums[hare]</code>
                <br /> <br />
                <code style={{ marginLeft: "3em" }}>return hare</code>
                <br />
              </pre>
              <br />
              <p className={styles.postContent}>
                <strong>Using maths</strong>
              </p>
              <p className={styles.postContent}>
                Not everything needs a complex algorithm, sometimes you can
                solve it mathematically.
              </p>
              <pre>
                <code>def printDupMaths(nums):</code>
                <br />
                <code style={{ marginLeft: "3em" }}>current_total = 0</code>
                <br />
                <code style={{ marginLeft: "3em" }}>for element in nums:</code>
                <br />
                <code style={{ marginLeft: "6em" }}>
                  current_total += element
                </code>
                <br />
                <code style={{ marginLeft: "3em" }}>
                  return expected_total - current_total
                </code>
                <br />
              </pre>
              <br />
              {/*part 6*/}
              <li className={styles.question}>Space & Time Complexity</li>
              <p className={styles.postContent}>
                The interviewer will then ask you to evaluate your code by
                analysing the amount of space your implementation uses and how
                long it takes to complete the program and produce an output.
              </p>
              <p className={styles.postContent}>
                printDupNaive uses O(1) space and has O(n^2) time complexity
                where n is the length of the array nums.
              </p>
              <p className={styles.postContent}>
                printDupSort uses O(1) space and O(nlogn) time complexity.
              </p>
              <p className={styles.postContent}>
                printDupDict uses O(n) space for the dictionary and has O(n)
                time complexity.
              </p>
              <p className={styles.postContent}>
                printDupAlgo uses O(1) space and has O(n) time complexity.
              </p>
              <p className={styles.postContent}>
                printDupMaths uses O(1) space and has O(n) time complexity.
              </p>
              <p className={styles.postContent}>
                All of our implementations have O(1) space complexity except for
                printDupDict because we only create variables that store
                integers or a single element. PrintDupDict has O(n) space
                complexity since we create a dictionary which in the worst-case
                scenario will store n values (having to loop through the whole
                array until we see a duplicate).
              </p>
              <p className={styles.postContent}>
                PrintDupNaive has O(n^2) time complexity since there are two
                loops nested inside each other. Meanwhile, printDupSort has
                O(nlogn) time complexity due to the in-built, comparison-based
                sort function. The rest of the implementations have O(n) time
                complexity as they all use loops but none are nested.
              </p>
              <p className={styles.postContent}>
                Revise/Enrol in COMP2521 for more information about space and
                time complexities.
              </p>
            </ol>
          </div>
        </div>
        {/*for the blog post author*/}
        <AuthorCard
          authors={{
            "vivian-wong": [
              "/potraits/blog-authors/vivw.jpg",
              styles.authorProfile,
              "Vivian Wong",
              "Education Executive",
            ],
          }}
        />
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default blogPost30;
