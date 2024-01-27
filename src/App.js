import React from "react";;
import ReactDOM from "react-dom";
import Menu from "./Menu";
import Login from "./Login"

class App extends React.Component {
    render() {

        const menuItems = [
            {href: "/", title: "Главная"},
            {href: "/about", title: "О нас"},
            {href: "/service", title: "Услуги"},
            {href: "contacts", title: "Контакты"},
        ]

        return (
            <div>
                <h1>Первое приложение на React</h1>
                <h2>Для начала авторизируйтесь!</h2>
                <Login/>
                <Menu 
                titleMenu="Основное меню сайта"
                items={menuItems}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));