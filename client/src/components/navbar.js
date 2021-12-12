import {Component} from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
                <div className="div_logo"></div>
                <a href="/" className="main_btn">Главная</a>
                <a href="#" className="main_btn">Оборудование</a>
                <a href="#" className="main_btn">Контакты</a>
                <a href="/reg" className="main_btn">Log In</a>
        </div>
    )};
}

export default NavBar