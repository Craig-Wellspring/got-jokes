import React from 'react';

export default function Joker({joke, btnText}) {
  return (
    <>
      <h1>{ joke.setup }</h1>
      <p>{ btnText !== 'Get Punchline' ? joke.punchline : '' }</p>
    </>
  )
}