import React, { Component } from "react";
import logo from "../Resources/logo_perso.svg";

class Navbar extends Component {
  state = {
    menuItems: [
      { sectionName: "Services", sectionLink: "#" },
      { sectionName: "About", sectionLink: "#" },
      { sectionName: "Experience", sectionLink: "#" },
      { sectionName: "Portfolio", sectionLink: "#" },
      { sectionName: "Contact", sectionLink: "#" },
    ]
  };
  render() {
    return (
      <div className="navigationBar">
        <div className="bucket">
          <header className="header-data-basket ">
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

            <ul className="nav">
              {this.state.menuItems.map((item) => (
                <li>
                  <a
                    href={item.sectionLink}
                    className="nav-link px-2 link-secondary"
                  >
                    {item.sectionName}
                  </a>
                </li>
              ))}
              <button type="button" className="mx-4 btn btn-md my-btn-sec">
                Get Resume
              </button>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}

export default Navbar;
