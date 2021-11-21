import Background from './img/BackImg.JPG';
import {Component} from "react";

var sectionStyle = {
  position: 'absolute',
  width: "100%",
  height: "1000px",
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