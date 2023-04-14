import React, { Component } from "react";
import Service from "./service";
import androidService from "../Resources/services/android.svg";
import bidaService from "../Resources/services/bida.svg"; 
import flutterService from "../Resources/services/flutter.svg";
import iosService from "../Resources/services/swift.svg"; 

class Services extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    features: [
      {
        img: flutterService,
        name: "Flutter",
        text: "Paragraph of text beneath the heading to explain the heading.",
        classname: "service-item-light shadow-sm",
      },
      {
        img: androidService,
        name: "Android",
        text: "Paragraph of text beneath the heading to explain the heading.",
        classname: "service-item-secondary shadow-lg",
      },
      {
        img: iosService,
        name: "iOS",
        text: "Paragraph of text beneath the heading to explain the heading.",
        classname: "service-item-light shadow-sm",
      },
      {
        img: bidaService,
        name: "BIDA",
        text: "Paragraph of text beneath the heading to explain the heading.",
        classname: "service-item-secondary shadow",
      },
    ],
  };
  render() {
    return (
      <section id="servicesSection">
        <div className="bucket  my-4">
          <div className="services">
            <div className="serviceHead ">
              <div className="service-head_bloc card shadow-sm"></div>
              <div className="service-head_text">
                <h2 className="py-4 heading-3 "><span className="h">H</span>ere is how I help</h2> 
              </div>
            </div>
            <div className="serviceGrid row ">
              {this.state.features.map((item) => (
                <Service
                  serviceImage={item.img}
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
