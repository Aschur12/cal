import {Component} from "react";
import NavBar from "./navbar";
import "../main.css"
import { save_user } from "../api";

class Regist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: "",
            email: "" 
        }
    }
    change_input_login = async event => {
        const login = event.target.value;
        this.setState({login})
    }
    change_input_password = async event => {
        const password = event.target.value;
        this.setState({password})
    } 
    change_input_email = async event => {
        const email = event.target.value;
        this.setState({email})
    }
    to_save_user = async()=>{
        const {login, password, email} = this.state
        const payload = {login, password, email}
        await save_user(payload).then(res=>{
            window.alert('Подтвердите регистрацию на почте')
            this.setState({
                login: "",
                password: "",
                email: "" 
            })
        })
    }    
    render() {
        const {login, password, email} = this.state
        return (
            <section className="reg_page">
            <div className="container">
                <NavBar/>
                <div>Регистрации</div>
                <input type="text" className="login_input" placeholder="login" value={login} onChange={this.change_input_login}></input>
                <input type="text" className="password_input" placeholder="PASSWORD" value={password} onChange={this.change_input_password}></input>
                <input type="text" className="email_input" placeholder="E-MAIL" value={email} onChange={this.change_input_email}></input>
                <button  className="btn_reg_page" onClick={this.to_save_user}>Регистрация</button>
            </div>
    </section>
        )
    }
}

export default Regist;