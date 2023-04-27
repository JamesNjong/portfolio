import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    section: "05 Contact",
    heading: "We are one hello away from the stars.",
    subheading: "Think it ! Type it! Send it",
  };
  render() {
    return (
      <section className="page contact-page" id="contact">
        <div className="bucket">
          <div className="contact-content-container">
            <div className="ccc-left">
              <p className="section-lable">{this.state.section}</p>
              <h3 className="text-color-secondary heading-2">
                {this.state.heading}
              </h3>
            </div>
            <div className="ccc-right">
              <div className="form-holder">
                <h6 className="py-4 heading-4">Say hello !</h6>

                <form action="" className="contact-form">
                  <div className="cf-row">
                    <label for="fname">Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="e.g John Minang"
                      required
                    />
                  </div>
                  <div className="cf-row">
                    <label for="msg-boot">Message</label>
                    <textarea
                      id="msg-boot"
                      className="message-boot form-control"
                      rows="10"
                      placeholder="Hey James. Bla bla bla . . ."
                      required
                    ></textarea>
                  </div>
                  <div className="cf-row-compact">
                    <div className="cf-row">
                      <label for="email-text">Email</label>
                      <input
                        type="text"
                        id="email-text"
                        className="form-control"
                        placeholder="e.g jminang@gmail.com"
                        required
                      />
                    </div>
                    <div className="cf-button_row">
                      <button type="button" class="buttonSecondary btn-send">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
