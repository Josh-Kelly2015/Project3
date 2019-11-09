import Background from "../../Images/BackGround_Image.jpg";
import React, { Component } from "react";
var sectionStyle = {
  backgroundImage: `url(${Background})`
};

class Section extends Component {
  render() {
    return <div style={sectionStyle}></div>;
  }
}
export default Section;
