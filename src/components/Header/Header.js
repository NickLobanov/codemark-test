import React from 'react';
import './Header.css';

function Header({ handleInput, handleSubmit, isDisable, isSort, handleClearBtn, tag, handleSort}) {

    return (
        <header className="header">
            <form className="header__form" onSubmit={handleSubmit}>
                <input value={tag} placeholder="Введите тег" className="header__input" onChange={handleInput} />
                <button disable={isDisable}
                    type="submit"
                    className={`header__button header__button_submit ${isDisable && 'header__disable'}`}>
                        {!isDisable ? 'Загрузить' : 'Загрузка..'}
                </button>
                <button type="button" className="header__button header__button_reset" onClick={handleClearBtn}>Очистить</button>
                <button type="button" className="header__button header__button_unite" onClick={handleSort}>
                    {!isSort ? 'Группировать' : 'Разгруппировать'}
                </button>
            </form>
        </header>
    )
}

export default Header;