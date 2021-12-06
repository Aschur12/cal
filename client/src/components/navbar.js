import {Component} from "react";


class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
                <div className="div_logo"></div>
                <button className="main_btn">Главная</button>
                <button className="main_btn">Оборудование</button>
                <button className="main_btn">Контакты</button>
                <button className="main_btn">Login</button>
        </div>
    )};
}

export default NavBar