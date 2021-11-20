import {Component} from "react";
import {Regist} from './regist.js'
import './main.css'


class Mainpage extends Component {
    render() {
        return (
            <div>
            <img src='./img/DA-800_1.JPG' className='back_img'></img>
            <Regist/>
            </div>
        )
    }
}

export default Mainpage;