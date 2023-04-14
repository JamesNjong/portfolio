import React, { Component } from "react";

class AbooutMeWeb extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    education: [
      {
        item: "Postgraduate Diploma in Business and Managment",
        institution: "ESMT-Berlin",
        timeline: "August 2019",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "Structured Masters, Mathematical Sciences",
        institution: "AIMS-Cameroon",
        timeline: "July 2019",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "MSc. Pure Mathematics",
        institution: "University of Buea",
        timeline: "December 2018",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "BSc. Mathematics with Computer Science",
        institution: "University of Buea",
        timeline: "August 2015",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
    ],
    
    certifications: [
      {
        item: "Become A Financial Analyst",
        institution: "LinkedIn Learning",
        timeline: "2021 | No Expiry Date",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "Responsive Web Design",
        institution: "FreeCodeCamp",
        timeline: "2022 | No Expiry Date",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "Become A Project Manager",
        institution: "LinkedIn Learning",
        timeline: "2022 | No Expiry Date",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "MARGA, General Business Management",
        institution: "MARGA Business Simulations GbmH",
        timeline: "2019 | No Expiry Date",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
    ],
    volunteering: [
      {
        item: "Founder, Engineering Lead",
        institution: "Carriograph",
        timeline: "2022 - Present",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "BAOBAB Ambassador",
        institution: "MasterCard Scholars Foundation",
        timeline: "2020 - 2021",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "Java and Android Developer",
        institution: "The Youkaris Project",
        timeline: "2017 - 2020",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },

      {
        item: "Chair, Pastoral Council and Harvest Committee",
        institution: "Buea Unversity Parish",
        timeline: "2014-2015, 2017",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
    ],
    content: [
      {
        item: "Postgraduate Diploma in Business and Managment",
        institution: "ESMT-Berlin",
        timeline: "August 2019",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "Structured Masters, Mathematical Sciences",
        institution: "AIMS-Cameroon",
        timeline: "July 2019",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "MSc. Pure Mathematics",
        institution: "University of Buea",
        timeline: "December 2018",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
      {
        item: "BSc. Mathematics with Computer Science",
        institution: "University of Buea",
        timeline: "August 2015",
        bullet1:
          "There are many variations of passages of Lorem Ipsum available",
        bullet2:
          "There are many variations of passages of Lorem Ipsum available",
        bullet3:
          "There are many variations of passages of Lorem Ipsum available",
      },
    ],
  };

  render() {
    let content = [];
    switch (this.props.content) {
      case "Volunteering":
        content = [...this.state.volunteering];
        break;
      case "Certifications":
        content = [...this.state.certifications];
        break;
      default:
        content = [...this.state.education];
        break;
    }
    return (
      <React.Fragment>
        {content.map((item, index) => (
          <div className="aboutItemContainer d-flex gap-4 my-4" key={index}>
            <div className="aboutItemRight">
              <h6 className="itemItem">{item.item}</h6>
              <div>
                <span>{item.institution}</span> <span className="px-4">    {item.timeline}</span>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default AbooutMeWeb;
