import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="shadow-sm project_item">
        <div className="project_item-image">
          <img src={this.props.image} alt="product" className="img img-fluid" />
        </div>
        <div class="project_item-body p-2">
          <div className="project_item-body-tools">
            {this.props.tools.map((item, index) => {
              return (
                <small
                  class={"project_type project_item-body-type-" + index}
                  key={index}
                >
                  {item}
                </small>
              );
            })}
          </div>
          <h3 class="project_item-body-name py-3">{this.props.name}</h3>
          <p class="project_item-body-description">
            Which unicorn companies have had the biggest return on investment?
          </p>
        </div>
        <div className="project_item-link p-4">
          <span className="link-item">
            <a href="#">view project</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Project;
