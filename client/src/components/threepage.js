import {Component} from "react";
import NavBar from "./navbar";
import "../main.css"

class Threepage extends Component {
    render() {
        return (
            <section className="three_page">
            <div className="container">
                <NavBar/>
                 <div class="three_page_head">Холодная штамповка</div>
                 <div className="three_page_text">
                    <div className="three_page_text_1">Технология пресс-формования - наиболее близкая к нашей жизни технология производства, так  70% автомобильных кузовов, 60% мобильных телефонов и 50% бытовой техники изготавливаются из штампованных изделий.</div>
                    <div className="three_page_text_2">Пресса и линии SIMPAC подходят для эффективного массового производства широкого спектра деталей из листового металла: различные типы прессов усилием от 60 до 3000т., могут быть объединены в полностью автоматизированную производственную систему.</div>
                </div>
            
            </div>
        </section>
        )
    }
}

export default Threepage;