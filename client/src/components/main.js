import {Component} from "react";
import NavBar from "./navbar";
import '../main.css'

class Mainpage extends Component {
    render() {
        return (
        <section className="main_page">
                <div className="container">
                <NavBar/>,
                <div className="main_header">
                    <h1>Инжиниринговая компания "КМА Технология"</h1>
                    <h2>полный спектр услуг связанных с:<br/>
                        поставкой и внедрением передового оборудования и технологий<br/>
                        холодной и гарячей штамповки<br/><br/></h2>
                    <h2>Официальный дистрибьютор</h2>
                </div>
                <div className="main_btn_2">
                    <button className="main_cold">Холодная штамповка</button>
                    <button className="main_hot">Горячая штамповка</button>
                </div>
                <div className="logo_simpac_jnh">
                    <img src="./img/SIMPAC_logo.png" alt="Simpac"></img>
                    <img src="./img/JNH_logo.png" alt="JNH"></img>
                </div>
                <div className="contacts">
                    <div>Email: kmatechnologyua@gmail.com</div>
                    <div>Тел.: +38(067)538-60-60</div>
                </div>
            </div>
    </section>
        )
    }
}

export default Mainpage;