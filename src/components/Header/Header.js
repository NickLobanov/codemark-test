import React from 'react';
import './Header.css';

function Header({ handleInput, handleSubmit, isDisable }) {

    return (
        <header className="header">
            <form className="header__form" onSubmit={handleSubmit}>
                <input placeholder="Введите тег" className="header__input" onChange={handleInput}/>
                <button disable={isDisable}
                    type="submit"
                    className={`header__button header__button_submit ${isDisable && 'header__disable'}`}>
                        Загрузить
                </button>
                <button type="button" className="header__button header__button_reset">Очистить</button>
                <button type="button" className="header__button header__button_unite">Группировать</button>
            </form>
        </header>
    )
}

export default Header;