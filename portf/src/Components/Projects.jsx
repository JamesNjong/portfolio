import React, { Component } from 'react'


import product1 from '../Resources/products/prod1.png'
import product2 from "../Resources/products/prod2.png";
import product3 from "../Resources/products/prod3.png";
import product4 from "../Resources/products/prod4.png";
import product5 from "../Resources/products/prod5.png";
import Project from './Project';


class Projects extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    products: [
      {
        image: product1,
        name: "Zeword",
        tools: ["Android", "iOS", "React"],
      },
      {
        image: product2,
        name: "Banq",
        tools: ["Android", "iOS", "React"],
      },
      {
        image: product3,
        name: "Njakiri",
        tools: ["Android", "iOS", "React"],
      },
      {
        image: product4,
        name: "Youkaris",
        tools: ["Android", "iOS", "React"],
      },
      {
        image: product5,
        name: "Tango",
        tools: ["Flutter", "Dart", "Firebase"],
      },
      {
        image: product1,
        name: "Stride",
        tools: ["Android","iOS", "Vue"],
      },
    ],
  };
  render() {
    return (
      <div className="page product_page">
        <div className="bucket">
          <div className="product_content">
            <div className="product_header">
              <h4 className="product_header-title header-1">
                Somethings I have built !
              </h4>
            </div>
            <div className="product_products">
              <div className="product_list">
                {this.state.products.map((item, index) => {
                  return (
                    <Project
                      key={index}
                      image={item.image}
                      name={item.name}
                      tools={item.tools}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Projects;