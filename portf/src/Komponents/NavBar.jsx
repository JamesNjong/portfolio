import React, { Component } from "react";
import logo from "../Iconography/logo_perso.svg";
import drawer from "../Iconography/drawerIcon.svg";
import cv from "../Docs/James_J_Njong_CV.pdf";

class NavBar extends Component {
  state = {
    menuItems: [
      { count: "01. ", sectionName: "Services", sectionLink: "#services" },
      { count: "02. ", sectionName: "About", sectionLink: "#about" },
      { count: "03. ", sectionName: "Background", sectionLink: "#background" },
      { count: "04. ", sectionName: "Portfolio", sectionLink: "#portfolio" },
      { count: "05. ", sectionName: "Contact", sectionLink: "#contact" },
    ],
  };
  render() {
    return (
      <div className="navigation">
        <div className="bucket">
          <nav
            className="navbar navbar-expand-lg"
            aria-label="Offcanvas navbar large"
          >
            <div className="container-fluid nav-container nav-items">
              <a href="/" className="brand ">
                <img
                  src={logo}
                  className="bi m-2"
                  alt="logo"
                  width="40"
                  height="40"
                  aria-label="Bootstrap"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-iconz">
                  <img
                    src={drawer}
                    className="bi m-2"
                    alt="logo"
                    width="40"
                    height="40"
                    aria-label="Bootstrap"
                  />
                </span>
              </button>
              <div
                className="offcanvas offcanvas-end text-bg-dark"
                tabindex="-1"
                id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                    James J. Njong
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-md-end align-items-md-end  flex-grow-1 pe-3">
                    {this.state.menuItems.map((item, index) => (
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href={item.sectionLink}
                        >
                          <span className="menuCount text-color-primary">
                            {item.count}
                          </span>{" "}
                          {item.sectionName}
                        </a>
                      </li>
                    ))}
                    <button
                      type="button"
                      className="btn-resume buttonSecondary mx-4  px-4"
                    >
                      <a href={cv} download>
                        Get Resume
                      </a>
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
