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
  const [disableButton, setDisableButton] = React.useState(false);
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [popupText, setPopupText] = React.useState('');
  const [isSort, setSort] = React.useState(false);
  const [uniqueTag, setUniqueTag] = React.useState([]);
  const [isValid, setValid] = React.useState(false)

  //Api key
  const key = 'i25iMmapAhnCyZ4sKNBzce6vrGfqI6hX'

  //Валидация формы
  const handleInput = (evt) => {
    setTag(evt.target.value)
    const regEx = /[a-zA-Z](,)?/g;
    setValid(regEx.test(evt.target.value))
  }

  //Закрытие popup
  const closePopup = () => {
    setPopupVisible(false)
  }

  //Сортировка карточек
  const handleSort = (evt) => {
    evt.preventDefault()
    const uniqueTag = keywords.filter((item, pos, arr) => arr.indexOf(item) === pos)
    setUniqueTag(uniqueTag)
    setSort(true)
  }

  //Разгруппировка карточек
  const handleUnsort = (evt) => {
    evt.preventDefault()
    setUniqueTag([])
    setSort(false)
  }

  //Обработчки кнопки сортировки 
  const handleSortBtn = (evt) => {
    !isSort ? handleSort(evt) : handleUnsort(evt)
  }

  //Получение карточки
  const getCard = () => {
    const splitArr = tag.split(', ')
    if (splitArr[1] === undefined) {
      api.getCard(key, tag)
        .then((data) => {
          if (data.data.length === 0) {
            setPopupVisible(true)
            setPopupText('По тегу ничего не найдено')
          } else {
            setCard([...card, {keyword: `${tag}`, img: [data.data.image_url]}])
          }
        })
        .catch(() => {
          setPopupVisible(true)
          setPopupText('Произошла http ошибка')
        })
        .finally(() => {
          setDisableButton(false)
        })
    } else {
      Promise.all([api.getCard(key, splitArr[0]), api.getCard(key, splitArr[1])])
        .then(([firstCard, secondCard]) => {
          setCard([...card, {keyword: `${tag}`, img: [firstCard.data.image_url, secondCard.data.image_url]}])
        })
        .catch(() => {
          setPopupVisible(true)
          setPopupText('Произошла http ошибка')
        })
        .finally(() => {
          setDisableButton(false)
        })
    }
    
  }

  //Проверка мультитега
  // const checkTag = () => {
  //   if (tag.includes(',')) {
  //     const splitArr = tag.split(', ');
  //     setTag(splitArr[0])
  //     setSecondTag(splitArr[1])
  //   }
  // }


  //Обработчик формы
  const formSubmit = (evt) => {
    evt.preventDefault()
    if (isValid === true) {
      closePopup();
      setDisableButton(true);
      setKeywords([...keywords, tag]);
      getCard();
    } else {
      setPopupVisible(true);
      setPopupText('Разрешены только латинские буквы')
    }
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
        isDisable={disableButton}
        handleClearBtn={handleClearBtn}
        tag={tag}
        handleSort={handleSortBtn}
        isSort={isSort}/>
      <Main cards={card} isSort={isSort} keywords={uniqueTag} cardClick={handleImgClick}/>
      <Popup popupText={popupText} isVisible={popupVisible} onClose={closePopup}/>
    </div>
  );
}

export default App;
