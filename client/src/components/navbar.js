import {Component} from "react";
import '../main.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
                <div className="div_logo">
                    <img className="logo" src="./img/KMA_Logo.png" alt="KMA Technology"></img>
                </div>
                <button className="main_btn">Главная</button>
                <button className="main_btn">Оборудование</button>
                <button className="main_btn">Контакты</button>
                <button className="main_btn">Login</button>
            </div>
    );
  }
}

export default NavBar