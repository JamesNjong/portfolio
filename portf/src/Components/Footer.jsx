import React, { Component } from 'react'
import github from "../Resources/socials/Github.svg";
import linkedin from "../Resources/socials/LinkedIN.svg";
import whatsapp from "../Resources/socials/WhatsApp.svg";
import outlook from "../Resources/socials/Outlook.svg";
import twitter from "../Resources/socials/Twitter.svg";
import logo from "../Resources/logo_perso.svg";

class Footer extends Component {
 constructor(props) {
  super(props);
 }
 state = {  }
 render() { 
  return (
    <div className="footer">
      <div className="bucket">
        <div className="footer-content">
          <div className="foot-left">
            <img src={logo} />
            <p className="name">James J. Njong</p>
            <div className="contact_socials">
              <a
                href="https://www.linkedin.com/in/james-jr-njong/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={github}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/james-jr-njong/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={linkedin}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
              <a
                href="https://twitter.com/James_J_Njong"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={twitter}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
              <a
                href="mailto:njongjames@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={outlook}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src={whatsapp}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
            </div>
          </div>
          <div className="foot-center py-4">
            <p className="heading-3 d-flex flex-column">Navigation</p>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">About</a>
            <a href="">Experience</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
          </div>
          <div className="foot-right py-4">
            <p className="heading-3 d-flex ">Projects</p>
            <a href="">Android</a>
            <a href="">iOS</a>
            <a href="">Flutter</a>
            <a href="">BI & Data Analysis</a>
            <a href="">Java Web (Backend)</a>
            <a href="">Python Web (Backend)</a>
          </div>
        </div>
      </div>
    </div>
  );
 }
}
 
export default Footer;