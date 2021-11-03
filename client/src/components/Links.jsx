import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styleLink = {
    color: 'red',
    fontSize: '35px',
    marginRight: '100px'
}

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand" style={styleLink}>
                    Главная
                </Link>
                <Link to="/" className="navbar-brand" style={styleLink}>
                    Регистрация
                </Link>
                <Link to="/" className="navbar-brand" style={styleLink}>
                    Расчет
                </Link>
                <Link to="/" className="navbar-brand" style={styleLink}>
                    Контакты
                </Link>

            </React.Fragment>
        )
    }
}

export default Links