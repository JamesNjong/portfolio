import React, { Component } from "react";
import github from "../Iconography/socials/Github.svg";
import linkedin from "../Iconography/socials/LinkedIN.svg";
import whatsapp from "../Iconography/socials/WhatsApp.svg";
import outlook from "../Iconography/socials/Outlook.svg";
import twitter from "../Iconography/socials/Twitter.svg";
import logo from "../Iconography/logo_perso.svg";
import uparrow from "../Iconography/brokenarrow-up.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="bucket">
          <div className="footer-content">
            <div className="foot-left">
              <img src={logo} height={100} width={100} />
              <p className="name">James J. Njong</p>
            </div>
            <div className="foot-center">
              <p className="cta ">Everything you need and then some !</p>
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
            <div className="foot-right ">
              <a href="#" className="uparrow">
                <img src={uparrow} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
