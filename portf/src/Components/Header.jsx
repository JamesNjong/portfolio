import React, { Component } from "react";
import image1 from "../Resources/home/image1.svg";
import image2 from "../Resources/home/image2.svg";

class Header extends Component {
  render() {
    return (
      <section
        className="home-page justify-content-center align-items-center"
        id="headerSection"
      >
        <div className="background_shape">
          <span className="spaciously"></span>
          <div className="bucket col-xxl-8 ">
            <div className="row justify-content-between align-items-center g-5">
              <div className="col-lg-4 justify-content-start">
                <div className="d-flex flex-column">
                  <span className="text-color-light heading-1">James J.</span>{" "}
                  <span className="text-color-secondary heading-1">Njong</span>
                </div>
              </div>
              <div className="line"></div>
              <div className=" col-10 col-sm-8 col-lg-6">
                <h3 className="heading-2 text-color-secondary">Versatile Problem Solver</h3>
                <p className=" py-3 text-color-light">
                  Hello, my name is James, and I am a problem solving ace who
                  helps organizations achieve audacious goals.
                </p>
                <div className="button-group">
                  <button
                    type="button"
                    className="btn btn-lg button-primary px-4"
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg button-secondary  px-4"
                  >
                    Reach out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
