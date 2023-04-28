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
        name: "Scryb",
        tools: ["Java", "Python", "JS", "etc"],
        desc: "A hundred litcode problems in a six languages. How i learn new concepts.",
        progress: "10% Complete",
        link: "https://github.com/JamesNjong/Scryb",
      },
      {
        name: "Zeword",
        tools: ["Kotlin", "SwiftUi", "JSON"],
        desc: "Fully offline Catholic bible for mobile and web built with Kotlin, and SwiftUi.",
        progress: "70% Complete",
        link: "https://github.com/JamesNjong/Zeword",
      },
      {
        name: "Nkolo",
        tools: ["Java", "SwiftUi", "React"],
        desc: "Personal finance native android and iOS app for local users built with Java, Swift and Firebase.",
        progress: "30% Complete",
        link: "https://github.com/JamesNjong/Nkolo",
      },
      {
        name: "Njakiri",
        tools: ["Java", "Firebase", "Swift"],
        desc: "Njakiri is a prototyped booking agency application built for mobile and web with Flutter.",
        progress: "10% Complete",
        link: "https://github.com/JamesNjong/Njakiri",
      },
      {
        name: "Tango",
        tools: ["Flutter", "Dart", "Firebase"],
        desc: "Private messaging platform built on firebase for mobile Android and iOS user with flutter.",
        progress: "In Design",
        link: "https://github.com/JamesNjong/Tango",
      },
      {
        name: "Stride",
        tools: ["Java", "Swift", "Angular"],
        desc: "Stride helps you collect data offline and export it as a csv to your offline folder.",
        progress: "10% Complete",
        link: "https://github.com/JamesNjong/Stride",
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
                  <div className="pcc-body_item_head">
                    <img
                      src={folder}
                      alt="folder"
                      width={40}
                      height={40}
                      className="img-fluid pcc-body_item-image py-4"
                    />

                    <div className="pcc-body_item-head_right">
                      <small className="small-test text-color-primary">
                        {item.progress}
                      </small>
                      <a href={item.link} className="px-4" target="_blank">
                        <img
                          width={20}
                          height={20}
                          alt="go to github"
                          src={viewon}
                        />
                      </a>{" "}
                    </div>
                  </div>
                  <p className="pcc-body_item-title heading-2">
                    {" "}
                    <a href={item.link} target="_blank">
                      {item.name}{" "}
                    </a>{" "}
                  </p>

                  <p className="pcc-body_item-description ">
                    {" "}
                    <a href={item.link} target="_blank">
                      {item.desc}
                    </a>{" "}
                  </p>

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
