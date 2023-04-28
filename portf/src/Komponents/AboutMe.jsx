import React, { Component } from "react";

import skillet from "../Iconography/skilletIcon.svg";
import profile from "../images/me.svg";

class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    section: "Hello Again !",
    lable: "02 About Me",
    skilets: [
      "Kotlin",
      "Java",
      "Swift",
      "JavaScript",
      "Python",
      "React",
      "Angular",
      "Flutter",
      "ReactNative",
    ],
    aboutme:
      "My name is James, and I have been problem solving for the better part of ten years. A good chunk of that time I spent learning how to solve abstract problems in Mathematics, using code or just number crunching. <br/>In recent years, I have shifted to applying these techniques to solving problems at the intersection of business and technology, typically helping in either process engineering for tech-startups (currently doing this with Diool) or building software for mobile or web. I am a generalist at heart, and this has pushed me to master a range of technologies such as those listed here under. And what this means for you, is this: regardless of what problems your team is solving, I can jump on a team, quickly settle and start pushing value creation before you say go. <br/>I am genuinely curious to know where you’re at, what problems you are solving and how I can I help. ",
  };
  render() {
    return (
      <section className="page about-page" id="about">
        <div className="bucket">
          <div className="about-content-container">
            <div className="acc-row_left">
              <img
                className="img-fluid acc-row_left-img"
                src={profile}
                width="400"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="acc-row_right">
              <p className="section-lable">{this.state.lable}</p>
              <h3 className="heading-2 text-color-secondary">
                {this.state.section}
              </h3>
              <p className="py-1 my-3 acc-row_right-paragraph">
                My name is James, and I have been problem solving for the better
                part of ten years. A good chunk of that time I spent learning
                how to solve abstract problems in Mathematics, using code or
                just number crunching.
                <br /> <br />
                In recent years, I have shifted to applying these techniques to
                solving problems at the intersection of business and technology,
                typically helping in either process engineering for
                tech-startups (currently doing this with{" "}
                <a
                  href="www.diool.com"
                  target="_blank"
                  className="text-color-primary"
                >
                  Diool
                </a>{" "}
                ) or building software for mobile or web. I am a generalist at
                heart, and this has pushed me to master a range of technologies
                such as those listed here under. What this means for you, is
                following: regardless of what problems your team is solving, I
                can jump in, quickly learn what tools you are using, and start
                pushing value creation before you say go. <br /> <br />
                If you find the time, do book a chat and let me hear where
                you’re at, what problems you are solving and how I can I help.
              </p>
              <div className="acc-row_right-skills">
                {this.state.skilets.map((item, index) => (
                  <div className="acc-row_right-skills_skill" key={index}>
                    <p>{item}</p>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
