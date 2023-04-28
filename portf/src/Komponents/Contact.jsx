import React, { Component, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let section = "05 Contact";
  let heading = "We are one hello away from the stars.";
  let formStatus = false;

  const toastject = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const form = useRef();

  useEffect(() => {
    if (formStatus) {
      form.current?.reset();
    }
  }, [formStatus]);

  const notify = (message, type) => {
    if (type === 1) {
      toast.info(message, toastject);
    } else if (type === 2) {
      toast.success(message, toastject);
    } else {
      toast.error(message, toastject);
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formStatus) {
      notify(
        "Cannot send message. Please check that you have entered a valid e-mail",
        0
      );
      return;
    } else {
      notify("Sending email. . .", 1);
    }

    emailjs
      .sendForm(
        "service_5yia5be",
        "template_9mbwqw3",
        form.current,
        "GAtW9o8lVSVD18WwK"
      )
      .then(
        (result) => {
          form.current?.reset();
          notify("Your email has been sent", 2);
        },
        (error) => {
          notify(
            "Error sending your email. Please check your internet connection.",
            0
          );
        }
      );
  };

  const handleChange = (e) => {
    if (isValidEmail(e.target.value)) {
      formStatus = true;
    } else {
      formStatus = false;
    }
  };

  return (
    <section className="page contact-page" id="contact">
      <div className="bucket">
        <div className="contact-content-container">
          <div className="ccc-left">
            <p className="section-lable">{section}</p>
            <h3 className="text-color-secondary heading-2">{heading}</h3>
          </div>
          <div className="ccc-right">
            <div className="form-holder">
              <h6 className="py-4 heading-4">Say hello !</h6>

              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="cf-row">
                  <label for="from_name">Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="e.g John Minang"
                    required
                  />
                </div>
                <div className="cf-row">
                  <label for="message">Message</label>
                  <textarea
                    id="msg-boot"
                    className="message-boot form-control"
                    name="message"
                    rows="10"
                    placeholder="Hey James. Bla bla bla . . ."
                    required
                  ></textarea>
                </div>
                <div className="cf-row-compact">
                  <div className="cf-row">
                    <label for="from_email">Email</label>
                    <input
                      type="text"
                      id="from_email"
                      name="from_email"
                      className="form-control"
                      placeholder="e.g jminang@gmail.com"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="cf-button_row">
                    <button type="submit" class="buttonSecondary btn-send">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
