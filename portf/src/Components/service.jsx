import React, { Component } from "react";
import logo from "../Resources/logo_perso.svg";
import "../sassfiles/style.css";
class Service extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { serviceImage, serviceName, serviceText, serviceClass } = this.props;
    let myClass =
      "serviceGridItem col rounded  m-2 d-flex flex-column g-4 p-3 " +
      serviceClass;
    return (
      <div className={ myClass}>
        <img
          className="bi my-4"
          src={serviceImage}
          alt="icon"
          width="50px"
          height="50px"
        />
        <div className="service-grid-item_content">
          <h5 className="heading-3 my-4">{serviceName}</h5>
          <p className="paragraph">{serviceText}</p>
        </div>
        <a className="service-grid-item_project_link" href="#"> 
           view projects 
        </a>
      </div>
    );
  }
}

export default Service;
