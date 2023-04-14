import React from "react";

const skill = () => {
  return (
    <div className="skill-item">
      <img
        src={this.props.image}
        alt="skill item svg"
        loading="lazy"
        className="skill-svg"
      />
    </div>
  );
};

export default skill;
