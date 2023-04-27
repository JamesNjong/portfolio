import React, { Component } from "react";

import folder from "../Iconography/folder.svg";
import viewon from "../Iconography/viewon.svg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    section: "04 Portfolio",
    heading: "Somethings on my plate",
    projects: [
      {
        name: "Zeword",
        tools: ["Kotlin", "SwiftUi", "React"],
        desc: "Fully offline Catholic bible for mobile and web built with Kotlin, SwiftUi and React.",
      },
      {
        name: "Nkolo",
        tools: ["Java", "SwiftUi", "React"],
        desc: "Personal finance native android and iOS app for local users built with Java, Swift and Firebase.",
      },
      {
        name: "Njakiri",
        tools: ["Flutter", "Firebase", "Dart"],
        desc: "Njakiri is a prototyped booking agency application built for mobile and web with Flutter.",
      },
      {
        name: "Tango",
        tools: ["Java", "SwiftUi", "Firebase"],
        desc: "Private messaging platform built on firebase for mobile and web with react, java and swift.",
      },
      {
        name: "Stride",
        tools: ["Compose", "Swift", "Firebase"],
        desc: "Stride is a native mobile note taker application built for android and iOS.",
      },
      {
        name: "Scryb",
        tools: ["Java", "Swift", "Firebase"],
        desc: "Scrybe is a custom note taker for android and iOS, built with Java, swift and firebase.",
      },
    ],
  };
  render() {
    return (
      <section className="page portfolio-page" id="portfolio">
        <div className="bucket">
          <div className="portfolio-content-container">
            <div className="pcc-headings">
              <p className="section-lable">{this.state.section}</p>
              <h3 className="text-color-secondary heading-3">
                {this.state.heading}{" "}
              </h3>
            </div>
            <div className="pcc-body py-4">
              {this.state.projects.map((item, key) => (
                <div className="pcc-body_item ">
                  <img
                    src={folder}
                    alt="folder"
                    width={60}
                    height={60}
                    className="img-fluid pcc-body_item-image py-4"
                  />
                  <p className="pcc-body_item-title heading-4">
                    {item.name}{" "}
                    <a href="" className="px-4">
                      <img
                        width={20}
                        height={20}
                        alt="go to github"
                        src={viewon}
                      />
                    </a>{" "}
                  </p>

                  <p className="pcc-body_item-description ">{item.desc}</p>

                  <div className="pcc-body_item-tools">
                    {item.tools.map((itemz, index) => (
                      <span className="pcc-body_item-tools_item">{itemz}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
