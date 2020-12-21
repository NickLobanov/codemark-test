import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const [tag, setTag] = React.useState('');
  const [card, setCard] = React.useState([]);
  const [disableButtno, setDisableButton] = React.useState(false);
  const [loadBtnText, setLoadBtnText] = React.useState('Загрузить');
  const [uniteBtnText, setUniteBtnText] = React.useState('Группировать')

  const key = 'i25iMmapAhnCyZ4sKNBzce6vrGfqI6hX'

  const handleInput = (evt) => {
      setTag(evt.target.value)
  }

  //Получение карточки
  async function handleSubmit(evt) {
    try {
      evt.preventDefault()
      setDisableButton(true)
      setLoadBtnText('Загрузка..')
      const responce = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`);
      const data = await responce.json();
      console.log(data)
      setCard([...card, {keyword: `${tag}`, img: `${data.data.image_url}`}])
    }
    catch {

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
    <div className="App">
      <Header handleInput={handleInput}
        handleSubmit={handleSubmit}
        isDisable={disableButtno}
        loadBtnText={loadBtnText}
        uniteBtnText={uniteBtnText}
        handleClearBtn={handleClearBtn}
        tag={tag}/>
      <Main cards={card}/>
    </div>
  );
}

export default App;
