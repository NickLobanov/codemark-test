import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';

function App() {

  const [tag, setTag] = React.useState('');
  const [card, setCard] = React.useState([]);
  const [disableButtno, setDisableButton] = React.useState(false);
  const [loadBtnText, setLoadBtnText] = React.useState('Загрузить');
  const [uniteBtnText, setUniteBtnText] = React.useState('Группировать');
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [popupText, setPopupText] = React.useState('')

  const key = 'i25iMmapAhnCyZ4sKNBzce6vrGfqI6hX'

  const handleInput = (evt) => {
      setTag(evt.target.value)
  }

  //Закрытие popup
  const closePopup = () => {
    setPopupVisible(false)
  }

  //Получение карточки
  async function handleSubmit(evt) {
    try {
      evt.preventDefault()
      closePopup();
      setDisableButton(true)
      setLoadBtnText('Загрузка..')
      const responce = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`);
      const data = await responce.json();
      if (data.data.length === 0) {
        console.log('null')
        setPopupVisible(true)
        setPopupText('По тегу ничего не найдено')
      } else {
        setCard([...card, {keyword: `${tag}`, img: `${data.data.image_url}`}])
      }
    }
    catch {
      setPopupVisible(true)
      setPopupText('Произошла http ошибка')
    }
    finally {
      setDisableButton(false)
      setLoadBtnText('Загрузить')
    }
  }

  //Удаление карточек 
  const handleClearBtn = (evt) => {
    evt.preventDefault();
    setCard([])
    setTag('')
  }

  

  return (
    <div className="app">
      <Header handleInput={handleInput}
        handleSubmit={handleSubmit}
        isDisable={disableButtno}
        loadBtnText={loadBtnText}
        uniteBtnText={uniteBtnText}
        handleClearBtn={handleClearBtn}
        tag={tag}/>
      <Main cards={card}/>
      <Popup popupText={popupText} isVisible={popupVisible} onClose={closePopup}/>
    </div>
  );
}

export default App;
