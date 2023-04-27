import React, { Component } from "react";
import Service from "./service";

class Services extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    features: [
      {
        name: "Android",
        text: "Build high performant cross platform mobile apps from a single codebase.",
        classname: "service-item-light shadow-sm",
      },
      {
        name: "iOS",
        text: "Craete intuitive native apps for Android and iOS that keep your users coming.",
        classname: "service-item-secondary shadow-lg",
      },
      {
        name: "Flutter",
        text: "Guarantee beauty for your people on the web with sturdily engineered frontends.",
        classname: "service-item-light shadow-sm",
      },
      {
        name: "Frontend Web",
        text: "Step into the future with world class business intelligence and data analysis.",
        classname: "service-item-secondary shadow",
      },
    ],
  };
  render() {
    return (
      <section className="page services-page" id="services">
        <div className="bucket">
          <div className="services-content-container">
            <div className="scc-head_text">
              <small className="section-lable">01 Services</small>
              <h2 className=" heading-3 text-color-secondary">
                How can I help ?
              </h2>
            </div>
            <div className="scc-body-row py-4 my-2 row ">
              {this.state.features.map((item) => (
                <Service
                  serviceName={item.name}
                  serviceText={item.text}
                  serviceClass={item.classname}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
