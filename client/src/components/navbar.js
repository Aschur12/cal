import {Component} from "react";
import '../main.css'

class NavBar extends Component {
  render() {
    return (
      <div class="navbar">
                <div class="div_logo">
                    <img class="logo" src="./img/KMA_Logo.png" alt="KMA Technology"></img>
                </div>
                <button class="main_btn">Главная</button>
                <button class="main_btn">Оборудование</button>
                <button class="main_btn">Контакты</button>
                <button class="main_btn">Login</button>
            </div>
    );
  }
}

export default NavBar