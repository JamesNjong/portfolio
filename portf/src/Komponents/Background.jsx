import React, { Component } from "react";

class Background extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    section: "03 The road to here",
    heading: "Background",
    currentTab: "experience",
    experience: [
      {
        where: "Diool",
        what: "Sales Support Engineer",
        when: "August 2022 - Present",
        link: "https://www.diool.com",
      },
      {
        where: "Fleri",
        what: "Partnerships Lead",
        when: "June - November 2022",
        link: "https://www.joinfleri.com",
      },
      {
        where: "AIMS-Cameroon",
        what: "Junior Manager, Co-operative Education",
        when: "February 2020 - June 2022",
        link: "https://www.aims-cameroon.org",
      },
      {
        where: "WaZaHub",
        what: "Junior Android Engineer",
        when: "November 2019 - February 2020",
        link: "https://www.wazahub.com",
      },
    ],
    education: [
      {
        where: "ESMT-Berlin",
        what: "PgD. Business and Managment",
        when: "August 2019",
        link: "https://nexteinstein.org/i2/aims-esmt-industry-immersion-program-2/",
      },
      {
        where: "AIMS-Cameroon",
        what: "MSc. Mathematical Sciences",
        when: "June 2019",
        link: "https://www.aims-cameroon.org",
      },
      {
        where: "University of Buea",
        what: "MSc. Pure Mathematics",
        when: "December 2018",
        link: "https://www.ubuea.cm",
      },
      {
        where: "University of Buea",
        what: "BSc. Mathematics with Computer Science",
        when: "December 2015",
        link: "https://www.ubuea.cm",
      },
    ],
    certifications: [
      {
        where: "freeCodeCamp",
        what: "Responsive Web Design",
        when: "January 2022",
        link: "https://freecodecamp.org/certification/njongjames/responsive-web-design",
      },
      {
        where: "LinkedIn Learning",
        what: "Financial Analysis Certification",
        when: "December 2021",
        link: "https://www.linkedin.com/learning/certificates/76f5d7fbda87ae84b2f31c2c38d59f2b8ae33a7bdc428c04aa2ad4453f4fcb60?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BXPZI795%2BQfuG6o5hpstrSQ%3D%3D",
      },
      {
        where: "LinkedIn Learning",
        what: "Project Management Certification",
        when: "November 2021",
        link: "https://www.linkedin.com/learning/certificates/d79ea543c69ff2d64f7ecc0fefeba13dec0dd08eaa50efb434d05616588fbe8d?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BXPZI795%2BQfuG6o5hpstrSQ%3D%3D",
      },
      {
        where: "MARGA Business Simulations GmbH",
        what: "MARGA, General Management Training",
        when: "August 2019",
        link: "http://www.marga.de/",
      },
    ],
    volunteering: [
      {
        where: "Carriograph",
        what: "Founder & Lead Engineer",
        when: "Since January 2023",
        link: "https://www.linkedin.com/in/james-jr-njong/",
      },
      {
        where: "MasterCard Foundation Scholars Program",
        what: "Baobab Ambassador",
        when: "2020 - 2021",
        link: "https://www.baobabplatform.org/",
      },
      {
        where: "Buea University Parish",
        what: "Pastoral Council and Fundraising Committee Chair",
        when: "2014-2015, and 2017",
        link: "https://www.ubuea.cm",
      },
      {
        where: "University of Buea",
        what: "Secretary General, Mathematics Student's Union",
        when: "2013-2015",
        link: "https://www.ubuea.cm",
      },
    ],
  };
  render() {
    let selectedTabClass = "bcc-body_left-tab_item-selected";
    const tabClass = "bcc-body_left-tab_item";
    return (
      <section className="page background-page" id="background">
        <div className="bucket">
          <div className="background-content-container">
            <div className="bcc-headings">
              <p className="section-lable">{this.state.section}</p>
              <h3 className="heading-2 text-color-secondary row">
                {this.state.heading}
              </h3>
            </div>
            <div className="bcc-body">
              <div className="bcc-body_left">
                <span
                  type="button"
                  onClick={() => this.switchTab("experience")}
                  className={
                    this.state.currentTab === "experience"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  Experience
                </span>
                <span
                  type="button"
                  onClick={() => this.switchTab("education")}
                  className={
                    this.state.currentTab === "education"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  Education
                </span>
                <span
                  type="button"
                  onClick={() => this.switchTab("certifications")}
                  className={
                    this.state.currentTab === "certifications"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  Certifications
                </span>
                <span
                  type="button"
                  onClick={() => this.switchTab("volunteering")}
                  className={
                    this.state.currentTab === "volunteering"
                      ? selectedTabClass
                      : tabClass
                  }
                >
                  Volunteering
                </span>
              </div>
              {this.loadComponent()}
            </div>
          </div>
        </div>
      </section>
    );
  }

  switchTab = (tab = "experience") => {
    this.setState({ currentTab: tab });
  };

  loadComponent = () => {
    var content = this.state.experience;
    switch (this.state.currentTab) {
      case "experience":
        content = this.state.experience;
        break;
      case "education":
        content = this.state.education;
        break;
      case "certifications":
        content = this.state.certifications;
        break;
      default:
        content = this.state.volunteering;
        break;
    }
    return (
      <div className="bcc-body_right">
        {content.map((item, index) => (
          <div className="bcc-body_right-item">
            <p className="bcc-body_right-item_what">{item.what} </p>
            <a
              href={item.link}
              className="bcc-body_right-item_what-link"
              target="blank"
            >
              @{item.where}
            </a>{" "}
            <p className="bcc-body_right-item_when">{item.when}</p>
          </div>
        ))}
      </div>
    );
  };
}

export default Background;
