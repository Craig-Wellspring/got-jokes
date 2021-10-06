import React, { useState } from 'react';
import './App.css';
import getJoke from './helpers/jokeData';
import Joker from './Joker';

function App() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({setup: 'Got Jokes?', punchline: ''});

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
        <button id="get-joke-btn" onClick={getAJoke}>{btnText}</button> :
        <button id="get-joke-btn" onClick={() => setButton('Get a New Joke')}>{btnText}</button>}
    </>
  );
}

export default App;
