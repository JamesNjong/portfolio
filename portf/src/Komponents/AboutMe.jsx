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
      "Under the assumption that the unification of the ability bias the preliminary action plan the systems approach and gives us a clear notion of The Manner of Insignificant Capacity (Hunter Tejada in The Book of the Key Principles)  For instance, all approaches to the creation of the patterns of the content testing method has common features with an initial attempt in development of the strategic decisions.",
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
              <h3 className="heading-3 text-color-secondary">
                {this.state.section}
              </h3>
              <p className="py-3 my-3 acc-row_right-paragraph">
                {this.state.aboutme}{" "}
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
