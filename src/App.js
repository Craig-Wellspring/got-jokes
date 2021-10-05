import React, { useState } from 'react';
import './App.css';
import getJoke from './helpers/jokeData';
import Joker from './Joker';

function App() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  }

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery
      })
    });

    setButton('Get Punchline');
  }

  return (
    <>
      <Joker joke={joke} btnText={btnText}/>
      {btnText === 'Get a Joke' || btnText === 'Get a New Joke' ?
        <button onClick={getAJoke}>{btnText}</button> :
        <button onClick={() => setButton('Get a New Joke')}>{btnText}</button>}
    </>
  );
}

export default App;
