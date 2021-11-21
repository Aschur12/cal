import {Component} from "react";
import './style.css'

class Regist extends Component {
    render() {
        return (
            <div className='mainNavbar'>
            <button className='mainBut'>Главная</button>
            <button className='uslugiBut'>Услуги</button>

                <div className='regist_navbar'>
                <button className='regBut'>Регистрация</button>
                <button className='inBut'>Войти</button>

                  </div>
            <div className='logo'></div>
            </div>
            
            
        )
    }
}

export default Regist;