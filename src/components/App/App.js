import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import * as api from '../../utils/Api';

function App() {

  const [tag, setTag] = React.useState('');
  const [card, setCard] = React.useState([]);
  const [keywords, setKeywords] = React.useState([])
  const [disableButtno, setDisableButton] = React.useState(false);
  const [loadBtnText, setLoadBtnText] = React.useState('Загрузить');
  const [uniteBtnText, setUniteBtnText] = React.useState('Группировать');
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [popupText, setPopupText] = React.useState('');
  const [isSort, setSort] = React.useState(false)
  const [uniqueTag, setUniqueTag] = React.useState([])

  //Api key
  const key = 'i25iMmapAhnCyZ4sKNBzce6vrGfqI6hX'

  const handleInput = (evt) => {
      setTag(evt.target.value)
  }

  //Закрытие popup
  const closePopup = () => {
    setPopupVisible(false)
  }

  //Сортировка карточек
  const handleSort = (evt) => {
    evt.preventDefault()
    setUniteBtnText('Разгруппировать')
    const uniqueTag = keywords.filter((item, pos, arr) => arr.indexOf(item) === pos)
    setUniqueTag(uniqueTag)
    setSort(true)
  }

  //Разгруппировка карточек
  const handleUnsort = (evt) => {
    evt.preventDefault()
    setUniqueTag([])
    setUniteBtnText('Группировать')
    setSort(false)
  }

  //Обработчки кнопки сортировки 
  const handleSortBtn = (evt) => {
    !isSort ? handleSort(evt) : handleUnsort(evt)
  }

  //Получение карточки
  const getCard = () => {
    api.getCard(key, tag)
      .then((data) => {
        if (data.data.length === 0) {
          console.log('null')
          setPopupVisible(true)
          setPopupText('По тегу ничего не найдено')
        } else {
          setCard([...card, {keyword: `${tag}`, img: `${data.data.image_url}`}])
        }
      })
      .catch(() => {
        setPopupVisible(true)
        setPopupText('Произошла http ошибка')
      })
      .finally(() => {
        setDisableButton(false)
        setLoadBtnText('Загрузить')
      })
  }

  //Обработчик формы
  const formSubmit = (evt) => {
      evt.preventDefault()
      closePopup();
      setDisableButton(true);
      setLoadBtnText('Загрузка..');
      setKeywords([...keywords, tag]);
      getCard();
  }

  //Удаление карточек 
  const handleClearBtn = (evt) => {
    evt.preventDefault();
    setCard([]);
    setTag('');
    setUniqueTag([])
    setKeywords([])
  }

  //Обработчик клика по карточке
  const handleImgClick = (tag) => {
    setTag(tag)
  }

  return (
    <div className="app">
      <Header handleInput={handleInput}
        handleSubmit={formSubmit}
        isDisable={disableButtno}
        loadBtnText={loadBtnText}
        uniteBtnText={uniteBtnText}
        handleClearBtn={handleClearBtn}
        tag={tag}
        handleSort={handleSortBtn}/>
      <Main cards={card} isSort={isSort} keywords={uniqueTag} cardClick={handleImgClick}/>
      <Popup popupText={popupText} isVisible={popupVisible} onClose={closePopup}/>
    </div>
  );
}

export default App;
