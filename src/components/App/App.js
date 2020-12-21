import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const [tag, setTag] = React.useState('');
  const [card, setCard] = React.useState([]);

  const key = 'i25iMmapAhnCyZ4sKNBzce6vrGfqI6hX'

  const handleInput = (evt) => {
      setTag(evt.target.value)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    const responce = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`);
    const data = await responce.json();
    console.log(data)
    setCard([...card, {keyword: `${tag}`, img: `${data.data.image_url}`}])
  }

  return (
    <div className="App">
      <Header handleInput={handleInput} handleSubmit={handleSubmit}/>
      <Main cards={card}/>
    </div>
  );
}

export default App;
