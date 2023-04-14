import React, { Component } from "react";

import bullet from "../Resources/exp_bullets.svg"

class Experience extends Component {
  state = {
    currentTab: "diool",
    diool: {
      item: "Sales Support Engineer",
      institution: "Diool",
      timeline: "September 2022 - Present",
      bullet1: "There are many variations of passages of Lorem Ipsum available",
      bullet2: "There are many variations of passages of Lorem Ipsum available",
      bullet3: "There are many variations of passages of Lorem Ipsum available",
    },
    aims: {
      item: "Junior Manager, Co-operative Education",
      institution: "AIMS-Cameroon",
      timeline: "February 2020 - June 2022",
      bullet1:
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      bullet2:
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      bullet3:
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    },
    wazahub: {
      item: "Junior Android Engineer",
      institution: "WaZaHub",
      timeline: "December 2019 - February 2022",
      bullet1: "There are many variations of passages of Lorem Ipsum available",
      bullet2: "There are many variations of passages of Lorem Ipsum available",
      bullet3: "There are many variations of passages of Lorem Ipsum available",
    },
  };

  switchTab = (tab = "diool") => {
    this.setState({ currentTab: tab });
  };

  render() {
    let selectedTabClass = "exp-tab_item_selected";
    const tabClass = "exp-tab_item";
    return (
      <div className="experince-page page">
        <div className="bucket">
          <div className="exp-container">
            <div className="exp_title_container">
              <span className="exp-header_title">Work Experience</span>
              <hr />
            </div>
            <div className="exp-header_content">
              <div className="exp-tabs">
                <span
                  type="button"
                  onClick={() => this.switchTab("diool")}
                  className={
                    this.state.currentTab === "diool"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  Diool
                </span>
                <span
                  type="button"
                  onClick={() => this.switchTab("aims")}
                  className={
                    this.state.currentTab === "aims"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  AIMS
                </span>
                <span
                  type="button"
                  onClick={() => this.switchTab("wazahub")}
                  className={
                    this.state.currentTab === "wazahub"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  WaZaHub
                </span>
              </div>
              {this.loadComponent()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  loadComponent = () => {
    let item, institution, timeline, bullet1, bullet2, bullet3;
    switch (this.state.currentTab) {
      case "diool":
        ({ item, institution, timeline, bullet1, bullet2, bullet3 } =
          this.state.diool);
        break;
      case "aims":
        ({ item, institution, timeline, bullet1, bullet2, bullet3 } =
          this.state.aims);
        break;
      default:
        ({ item, institution, timeline, bullet1, bullet2, bullet3 } =
          this.state.wazahub);
        break;
    }
    return (
      <div className="exp-item-body">
        <h6 className="exp-item-body_job">
          {item}
          <span className="exp-item-body_employer px-1"> @ {institution}</span>
        </h6>
        <p className="exp-item-body_timeline">{timeline}</p>
        <div className="exp-item-body_list">
          <span className="exp-item-body_list_item">
            <img src={bullet} alt="bullet" className="bullet_i" /> {bullet1}
          </span>
          <span className="exp-item-body_list_item">
            {" "}
            <img src={bullet} alt="bullet" className="bullet_i" /> {bullet2}
          </span>
          <span className="exp-item-body_list_item ">
            <img src={bullet} alt="bullet" className="bullet_i" /> {bullet3}
          </span>
        </div>
      </div>
    );
  };
}

export default Experience;
