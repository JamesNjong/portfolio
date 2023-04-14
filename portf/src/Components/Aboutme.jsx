import React, { Component } from "react";
import aboutace from "../Resources/me.svg";
import AbooutMeWeb from "./AbooutMeWeb.jsx";

class About extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuItems: [
      { sectionName: "Education" },
      { sectionName: "Certifications" },
      { sectionName: "Volunteering" },
    ],
    currentTab: "Education",
  };

  switchTab = (tab) => {
    this.setState({ currentTab: tab });
  };

  tabData = () => {
    switch (this.state.currentTab) {
      case "Volunteering":
        return this.state.volunteering;
      case "Certifications":
        return this.state.certifications;
      default:
        return this.state.education;
    }
  };

  render() {
    let selectedTabClass = "col-4 about-tab_item_selected";
    const tabClass = "col-4 about-tab_item";
    return (
      <section
        className="page about-page justify-content-center align-items-center"
        id="aboutSection"
      >
        <div className="bucket col-xxl-8 ">
          <div className="row justify-content-center align-items-center g-5 aboutSectionContent">
            <div class="col-12 col-sm-8 col-lg-4">
              <img
                src={aboutace}
                alt="about ace"
                className="about-img img-fluid"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 justify-content-start">
              <h1 class="heading-2">About Me</h1>
              <p className="py-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <div className="about-tabs align-items-center justify-content-center justify-content-md-between">
                  <span
                    type="button"
                    onClick={() => this.switchTab("Education")}
                    className={
                      this.state.currentTab === "Education"
                        ? selectedTabClass
                        : tabClass
                    }
                  >
                    Education
                  </span>
                  <span
                    type="button"
                    onClick={() => this.switchTab("Certifications")}
                    className={
                      this.state.currentTab === "Certifications"
                        ? selectedTabClass
                        : tabClass
                    }
                  >
                    Certifications
                  </span>
                  <span
                    type="button"
                    onClick={() => this.switchTab("Volunteering")}
                    className={
                      this.state.currentTab === "Volunteering"
                        ? selectedTabClass
                        : tabClass
                    }
                  >
                    Volunteering
                  </span>
                </div>
              </div>
              <AbooutMeWeb content={this.state.currentTab} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
