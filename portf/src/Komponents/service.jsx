import React, { Component } from "react";

class Service extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { serviceImage, serviceName, serviceText, serviceClass } = this.props;
    let myClass =
      "scc-body-row_item col rounded  m-2 d-flex flex-column g-4 p-4 " +
      serviceClass;
    return (
      <div className={myClass}>
        <div className="service-grid-item_content">
          <p className="heading-4 my-4 text-color-primary">
            {serviceName}
            <br />
            Development
          </p>

          <p className="paragraph my-4 py-4">{serviceText}</p>
        </div>
      </div>
    );
  }
}

export default Service;
