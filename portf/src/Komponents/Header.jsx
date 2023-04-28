import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <section className="home-page page" id="home">
        <div className="bucket">
          <div className="bucket-host">
            <div className="home-content-container">
              <div className="hcc-column-left">
                <span className="heading-1 text-color-secondary">James J.</span>
                <span className="heading-1 text-color-light">Njong</span>
              </div>
              <div className="line-space">
                <div className="line"></div>
              </div>
              <div className="hcc-column-right">
                <small className="py-3">Hello there ! I'm the</small>
                <h3 className="heading-3 text-color-primary">
                  Versatile Problem Solver{" "}
                </h3>

                <p className=" py-3 text-color-light">
                  Helping businesses build systems, software and processes that
                  help them navigate ambiguity faster, and speed their growth.
                </p>
                <div className="button-group">
                  <button type="button" className=" buttonPrimary px-4">
                    <a href="#about" className="buttonLink">
                      Learn More
                    </a>
                  </button>
                  <button type="button" className=" buttonSecondary mx-4  px-4">
                    <a href="#contact" className="buttonLink">
                      Reach Out
                    </a>
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
