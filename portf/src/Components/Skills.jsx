import React, { Component } from 'react'


import cssskill from '../Resources/skillassets/cssskill.svg'
import reactskill from "../Resources/skillassets/reactskill.svg";



class Skills extends Component {
 constructor(props) {
  super(props);
 }
 state = { 
  skills:[cssskill, reactskill]
  }
 render() { 
  return ( 
   <div className="skills ">
    <div className="bucket">
     <marquee behavior="scroll" direction="left">
      {this.state.skills.map((item, index) => {
        return <skill key={index} image={item}/>
       })}
     </marquee>
    </div>
   </div>
   );
 }
}
 
export default Skills;