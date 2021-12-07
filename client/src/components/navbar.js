import {Component} from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
                <div className="div_logo"></div>
                <a to="/" className="main_btn">Главная</a>
                <a to="#" className="main_btn">Оборудование</a>
                <a to="#" className="main_btn">Контакты</a>
                <a to="#" className="main_btn">Login</a>
        </div>
    )};
}

export default NavBar