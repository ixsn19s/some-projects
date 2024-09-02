import React from 'react'
import HomePage from './components/HomePage'
import { useState } from 'react'
import GamePlay from './components/GamePlay';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGame = () => {
    setIsGameStarted ((prev) => !prev)
  };


  return (
    <>
    <div className=''>
      
      {
        isGameStarted ? <GamePlay />  :  <HomePage toggle={toggleGame} />
      }

    </div>
    </>
  )
}

export default App