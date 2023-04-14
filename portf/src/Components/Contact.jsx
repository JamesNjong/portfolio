import React, { Component } from "react";

import github from "../Resources/socials/Github.svg";
import linkedin from "../Resources/socials/LinkedIN.svg";
import whatsapp from "../Resources/socials/WhatsApp.svg";
import outlook from "../Resources/socials/Outlook.svg";
import twitter from "../Resources/socials/Twitter.svg";
import send from "../Resources/send.svg";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="contact-page page">
        <div className="bucket">
          <div className="contacts-columns">
            <div className="contact-columns_left">
              <p className="contact-tag">
                Contact <br /> <hr className="cdb-left-rule" />{" "}
              </p>
              <p className=" cta display-6 ">
                Everything you need, and then some.
              </p>
              <p className="text-des">
                Say Hello, to get life time access at no extra cost.
              </p>

              <div className="contact_socials">
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

            <div className="contact-columns_right">
              <div className="contact-form p-4 mb-5 shadow-sm ">
                <div className="tag-forms ">
                  <p className="heading-3 text-center">Say Hello!</p>
                </div>
                <form method="POST">
                  <div className="form-elements p-4">
                    <div className="row  label-input li-name">
                      <label for="name-text">Name</label>
                      <input
                        type="text"
                        id="name-text"
                        className="form-control"
                        placeholder="e.g John Minang"
                        required
                      />
                    </div>

                    <div className="row label-input li-message">
                      <label for="msg-boot">Message</label>
                      <textarea
                        id="msg-boot"
                        className="message-boot form-control"
                        rows="10"
                        placeholder="Hey James. Bla bla bla . . ."
                        required
                      ></textarea>
                    </div>

                    <div className="row">
                      <div className="col-12 emailtosubmitsection">
                        <div className="div-email label-input li-email">
                          <label for="email-text">Email</label>
                          <input
                            type="text"
                            id="email-text"
                            className="form-control"
                            placeholder="e.g jminang@gmail.com"
                            required
                          />
                        </div>
                        <div class="div-button py-3">
                          <button type="button" class="buttonGradient btn-send">
                            Send <img src={send} width={40}  />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
