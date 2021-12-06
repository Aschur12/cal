import {Component} from "react";
import NavBar from "./navbar";
import "../main.css"

class Second extends Component {
    render() {
        return (
            <section className="second_page">
            <div className="container">
                <NavBar/>,
                <div className="second_head">О компании</div>
                <div className="second_text_1">ООО «КМА Технология» оказывает полный спектр услуг связанных с поставкой и внедрением передового оборудования и технологий.
                    Наша компания осоществляет полный комплекс задач от создания конструкторской документации на изделие до получения серийных штамповочных деталей. 
               </div>
               <div className="letter"></div>
               <div className="benefit">
                   <div className="benefit_head">Наши преимущества:</div>
                   <div className="benefit_text">У нас вы можете как купить пердовые пресса, штампы, доп. оборудование, так и получить комплекс сопутствующих услуг:
                    Профессиональная помощь в выборе требуемого оборудования.
                    Организация доставки оборудования, монтаж и наладка в вашем производстве.
                    Обучение работе с промышленными прессами ваших рабочих.
                    Комплексное техническое обслуживание оборудования.
                    Поставка комплектующих.
                    Гарантийный и послегарантийный ремонт прессов </div>
               </div>
            </div>
        </section>
        )
    }
}

export default Second;