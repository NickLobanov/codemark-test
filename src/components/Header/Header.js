import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <form className="header__form">
                <input placeholder="Введите тег" className="header__input"/>
                <button className="header__button header__button_submit">Загрузить</button>
                <button className="header__button header__button_reset">Очистить</button>
                <button className="header__button header__button_unite">Группировать</button>
            </form>
        </header>
    )
}

export default Header;