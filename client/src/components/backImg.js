import Background from './img/BackImg.JPG';
import {Component} from "react";

var sectionStyle = {
  position: "reletave",
  left: 0,
  top: 0,
  backgroundImage: `url(${Background})`,
  opacity: "0.5"
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default Section